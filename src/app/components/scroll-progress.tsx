import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7A00] via-[#ff9933] to-[#FF7A00] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
