import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // --- Lenis smooth scrolling ---
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- Global scroll-reveal via IntersectionObserver ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            if (el.hasAttribute("data-reveal-group")) {
              // Stagger children inside this group
              const children = el.querySelectorAll("[data-reveal-item]");
              children.forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.12}s`;
                child.classList.add("reveal-visible");
              });
            }

            el.classList.add("reveal-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll("[data-reveal], [data-reveal-group]")
        .forEach((el) => {
          if (!el.classList.contains("reveal-visible")) observer.observe(el);
        });
    };

    observeAll();

    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      lenis.destroy();
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}