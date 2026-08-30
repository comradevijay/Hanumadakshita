import { useEffect, useRef } from "react";

/**
 * Animated particle-network background.
 * - Particles drift on their own (auto animation).
 * - Nearby particles are connected with thin lines.
 * - Particles near the cursor are gently pushed away (hover effect).
 *
 * Usage: render as an absolutely-positioned layer behind hero content,
 * e.g. <div className="hero"><HeroBackground /><div className="hero-inner">...</div></div>
 */
export default function HeroBackground({
  particleCount = 170,
  color = "47, 94, 255", // rgb, matches --blue
  linkDistance = 130,
  hoverRadius = 150,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let raf;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      // update + draw particles
      for (const p of particles) {
        // autonomous drift
        p.x += p.vx;
        p.y += p.vy;

        // gentle hover repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < hoverRadius) {
          const force = (hoverRadius - dist) / hoverRadius;
          p.x += (dx / (dist || 1)) * force * 1.8;
          p.y += (dy / (dist || 1)) * force * 1.8;
        }

        // wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.55)`;
        ctx.fill();
      }

      // connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < linkDistance) {
            const opacity = (1 - dist / linkDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    initParticles();

    if (!prefersReducedMotion) {
      raf = requestAnimationFrame(step);
    } else {
      // draw a single static frame for reduced-motion users
      step();
      cancelAnimationFrame(raf);
    }

    const hoverTarget = canvas.parentElement;

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });
    hoverTarget.addEventListener("mousemove", handleMouseMove);
    hoverTarget.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      hoverTarget.removeEventListener("mousemove", handleMouseMove);
      hoverTarget.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [particleCount, color, linkDistance, hoverRadius]);

  return <canvas ref={canvasRef} className="hero-bg-canvas" aria-hidden="true" />;
}