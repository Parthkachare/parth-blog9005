import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7A00] via-[#ff9933] to-[#FF7A00] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {percentage > 10 && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <motion.div
            className="relative w-16 h-16"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-muted"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className="text-[#FF7A00]"
                style={{
                  pathLength: scrollYProgress,
                }}
                strokeDasharray="175.93"
                strokeDashoffset="0"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold">{percentage}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
