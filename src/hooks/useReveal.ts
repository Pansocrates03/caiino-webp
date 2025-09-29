export type RevealOptions = {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
};

export default function useReveal({ selector = "[data-reveal]", threshold = 0.18, rootMargin = "0px" }: RevealOptions = {}) {
  if (typeof window === "undefined") return;

  // Ejecutar después de render (si se necesita en componentes, llamarlo dentro de useEffect)
  const init = () => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (prefersReduced) {
      els.forEach(el => el.classList.add("visible"));
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("visible");
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  };

  return { init };
}