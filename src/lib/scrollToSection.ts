/**
 * Smooth-scrolls to a section by id and keeps correcting the target position
 * while late-loading images/fonts shift the layout.
 */
export const scrollToSection = (id: string) => {
  let attempts = 0;
  let lastTop: number | null = null;

  const step = () => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (lastTop === null || Math.abs(top - lastTop) > 2) {
      window.scrollTo({ top, behavior: attempts === 0 ? "smooth" : "auto" });
      lastTop = top;
    }
    attempts += 1;
    if (attempts < 12) window.setTimeout(step, 150);
  };

  requestAnimationFrame(step);
};
