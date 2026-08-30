import { useMemo } from "react";

// Site palette (matches styles.css custom properties)
const COLORS = [
  "#2f5eff", // --blue
  "#16a06a", // --green
  "#f5921e", // --orange
  "#7c5cff", // --purple
  "#ef5da8", // --pink
  "#1fbce1", // light blue accent
];

const PARTICLE_COUNT = 10;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function makeParticle(index) {
  const size = randomBetween(4, 14); // px
  const startX = randomBetween(0, 100); // vw
  const startY = randomBetween(0, 100); // vh
  const midX = randomBetween(0, 100);
  const midY = randomBetween(0, 100);
  const endX = randomBetween(0, 100);
  const endY = randomBetween(0, 100);
  const duration = randomBetween(18, 42); // seconds
  const delay = randomBetween(-30, 0); // negative so they're mid-animation on load
  const color = COLORS[index % COLORS.length];
  const opacity = randomBetween(0.25, 0.55);

  return {
    id: index,
    style: {
      "--p-size": `${size}px`,
      "--p-x1": `${startX}vw`,
      "--p-y1": `${startY}vh`,
      "--p-x2": `${midX}vw`,
      "--p-y2": `${midY}vh`,
      "--p-x3": `${endX}vw`,
      "--p-y3": `${endY}vh`,
      "--p-duration": `${duration}s`,
      "--p-delay": `${delay}s`,
      "--p-color": color,
      "--p-opacity": opacity,
    },
  };
}

const ParticlesBackground = () => {
  // Generated once per mount, not on every re-render
  const particles = useMemo(
    () => Array.from({ length: PARTICLE_COUNT }, (_, i) => makeParticle(i)),
    []
  );

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p) => (
        <span key={p.id} className="particle-dot" style={p.style} />
      ))}
    </div>
  );
};

export default ParticlesBackground;