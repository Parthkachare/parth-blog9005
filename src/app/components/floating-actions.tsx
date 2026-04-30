import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Share2, Bookmark } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.div
          className="fixed bottom-24 right-6 z-40 flex flex-col gap-3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#FF7A00] text-white shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
