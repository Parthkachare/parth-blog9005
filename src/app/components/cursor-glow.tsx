import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] hidden lg:block"
          animate={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 122, 0, 0.05), transparent 80%)`,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}
    </>
  );
}
