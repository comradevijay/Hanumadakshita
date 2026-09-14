// components/TextReveal.jsx
import { motion } from "framer-motion";

export default function TextReveal({ children, delay = 0, className = "" }) {
  return (
    // Mask container: hides anything outside its bounds
    <div style={{ overflow: "hidden" }} className={className}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier curve
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}