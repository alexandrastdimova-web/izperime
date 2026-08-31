# Диагностика: защо izperime.com "изглежда стар"

## Кратък отговор
Production **не е стар**. Живият домейн сервира точно build-а от последния commit `92310a4`. Няма mismatch между Pages artifact и репото. Това, което виждаш, е кеш в браузъра/CDN, а не стара версия на сървъра.

## Какво беше проверено (само четене, без промени)

| Проверка | Резултат |
|---|---|
| Последен commit | `92310a47…` от 31.08.2026, 21:39:06 UTC |
| `last-modified` на живия `https://izperime.com/` | 31.08.2026, 21:39:43 UTC — 37 сек след commit-а |
| Сървър | `server: GitHub.com`, `x-github-edge-region: fra` (GitHub Pages) |
| JS bundle на живо | `/assets/index-Eq2QIckq.js` |
| JS bundle в локалния `dist/` от същия commit | `index-Eq2QIckq.js` — **идентичен хеш** |
| Workflow | `.github/workflows/deploy.yml`, trigger `push` към `main`, `npm run build` → `upload-pages-artifact(dist)` → `deploy-pages` (без gh-pages branch, artifact-базиран деплой) |
| Заглавие на начална страница | „izperi.me – пране на дивани и матраци във Велико Търново“ (новото) |
| 7-те SEO маршрута | всички `200`, prerender-нат статичен HTML с правилен `<title data-rh>` |
| Новите 3 страници | съдържат `FAQPage` JSON-LD → значи са от последния build |
| `sitemap.xml` | 8 `<loc>` записа, включително трите нови URL-а |
| `favicon.ico` | `200`, 3882 B (новият) |
| Непознат URL | `404` (коректно, `404.html` работи) |

## Конкретната причина
Идентичният хеш на bundle-а (`index-Eq2QIckq.js`) в production и в build-а от `92310a4`, плюс `last-modified` 37 секунди след commit-а, доказват, че последният build е стигнал до production. Причината за усещането за „стара начална версия“ е една от следните, и трите са клиентски:

1. **Браузърен кеш** — GitHub Pages връща `cache-control: max-age=600` за HTML. Стар `index.html` в кеша продължава да зарежда стария bundle до 10 минути.
2. **Edge кеш** — отговорите се връщаха с `age: ~320s`, т.е. вече кеширано копие на edge възела.
3. **Самата начална страница не е променяна** в този commit — commit `92310a4` добавя favicon и трите нови SEO страници; hero/секциите на home остават същите по замисъл.

## Най-безопасната следваща стъпка
Без деплой и без промени по кода:

1. Отвори `https://izperime.com/?v=1` (или hard refresh: Ctrl+Shift+R / на iPhone — Settings → Safari → Clear History), после сравни с `https://izperime.com/detailing-luksozni-avtomobili-veliko-tarnovo/` — ако новата страница се вижда, кешът е потвърден като единствена причина.
2. Ако все още изглежда старо след hard refresh: кажи ми **кой точно елемент** очакваш да е различен на началната страница (текст, лого, секция) — тогава проблемът е в съдържанието на компонента, а не в деплоя, и ще го проверя в кода.

Нищо не е променяно и нищо не е публикувано.
