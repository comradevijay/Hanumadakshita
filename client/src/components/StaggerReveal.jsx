import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Wrap any group of elements to stagger them in on mount or on scroll.
 * Use <StaggerReveal.Item> for each child that should animate individually.
 */
export function StaggerReveal({ children, className, once = true, amount = 0.3 }) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

StaggerReveal.Item = function StaggerItem({ children, className, as: Tag = motion.div }) {
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
};

export default StaggerReveal;