/**
 * Post-build step (runs via the `postbuild` npm script).
 *
 * The app is a client-rendered Vite SPA, so:
 *  1. GitHub Pages returns a hard 404 for /prane-na-... when the URL is opened
 *     or refreshed directly, because no such file exists in dist/.
 *  2. The per-route <title>/<meta>/canonical/JSON-LD are only injected
 *     client-side by react-helmet-async, so non-JS crawlers see the homepage head.
 *
 * This script fixes both without changing the app: for every service route it
 * writes dist/<slug>/index.html — a copy of the built index.html whose <head>
 * already contains that page's real title, description, canonical, Open Graph
 * tags and Service + BreadcrumbList JSON-LD. GitHub Pages then serves a real
 * 200 response for each URL, and React hydrates on top of it as before.
 *
 * dist/404.html is also written as a safety net for any other deep link.
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { SITE_URL, services } from "../src/data/services";

const distDir = resolve("dist");
const template = readFileSync(resolve(distDir, "index.html"), "utf8");

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const escapeJson = (value: unknown) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

for (const service of services) {
  const url = `${SITE_URL}/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.serviceName,
    description: service.description,
    url,
    areaServed: { "@type": "Place", name: "Велико Търново и региона" },
    provider: {
      "@type": "CleaningService",
      name: "izperi.me",
      telephone: "+359 884 555 884",
      url: `${SITE_URL}/`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Георги Измирлиев 17",
        addressLocality: "Велико Търново",
        postalCode: "5000",
        addressCountry: "BG",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Начало", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: service.h1, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const head = [
    `<title data-rh="true">${escapeAttr(service.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeAttr(service.description)}" />`,
    `<link data-rh="true" rel="canonical" href="${url}" />`,
    `<meta data-rh="true" property="og:title" content="${escapeAttr(service.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${escapeAttr(service.description)}" />`,
    `<meta data-rh="true" property="og:url" content="${url}" />`,
    `<meta data-rh="true" property="og:type" content="website" />`,
    `<script data-rh="true" type="application/ld+json">${escapeJson(serviceSchema)}</script>`,
    `<script data-rh="true" type="application/ld+json">${escapeJson(breadcrumbSchema)}</script>`,
    `<script data-rh="true" type="application/ld+json">${escapeJson(faqSchema)}</script>`,
  ].join("\n    ");

  // Drop the homepage-specific head tags so the route page has exactly one
  // title / description / canonical / og:* / JSON-LD set.
  let html = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="description"[^>]*>\s*/i, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/i, "")
    .replace(/<meta\s+property="og:(?:title|description|url|type|image)"[^>]*>\s*/gi, "")
    .replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi,
      "",
    );

  html = html.replace("</head>", `  ${head}\n  </head>`);

  const outDir = resolve(distDir, service.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), html);
  console.log(`prerendered /${service.slug}`);
}

// SPA fallback for any other deep link on GitHub Pages.
writeFileSync(resolve(distDir, "404.html"), template);
console.log("404.html fallback written");
