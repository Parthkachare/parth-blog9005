import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setIsDark(theme === "dark");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        onClick={toggleTheme}
        variant="ghost"
        size="icon"
        className="relative"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="w-5 h-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      </Button>
    </motion.div>
  );
}
