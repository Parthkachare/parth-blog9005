import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Keyboard, Trophy, RotateCcw, Zap } from "lucide-react";
import confetti from "canvas-confetti";

const testTexts = [
  "The quick brown fox jumps over the lazy dog",
  "TypeScript makes JavaScript development more robust and maintainable",
  "React hooks revolutionized the way we write components",
  "Modern web development requires knowledge of HTML CSS and JavaScript",
  "Building scalable applications demands proper architecture and planning",
];

export function TypingSpeedGame() {
  const [currentText, setCurrentText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [bestWpm, setBestWpm] = useState(
    parseInt(localStorage.getItem("bestWpm") || "0")
  );

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    if (isPlaying && userInput.length > 0) {
      const words = userInput.trim().split(" ").length;
      const minutes = (60 - timeLeft) / 60;
      const calculatedWpm = Math.round(words / minutes) || 0;
      setWpm(calculatedWpm);

      const correctChars = [...userInput].filter(
        (char, i) => char === currentText[i]
      ).length;
      const calculatedAccuracy = Math.round((correctChars / userInput.length) * 100) || 100;
      setAccuracy(calculatedAccuracy);
    }
  }, [userInput, timeLeft, currentText, isPlaying]);

  const startGame = () => {
    const randomText = testTexts[Math.floor(Math.random() * testTexts.length)];
    setCurrentText(randomText);
    setUserInput("");
    setIsPlaying(true);
    setTimeLeft(60);
    setWpm(0);
    setAccuracy(100);
  };

  const endGame = useCallback(() => {
    setIsPlaying(false);
    if (wpm > bestWpm) {
      setBestWpm(wpm);
      localStorage.setItem("bestWpm", wpm.toString());
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF7A00", "#ff9933", "#ffaa55"],
      });
    }
  }, [wpm, bestWpm]);

  const resetGame = () => {
    setCurrentText("");
    setUserInput("");
    setIsPlaying(false);
    setTimeLeft(60);
    setWpm(0);
    setAccuracy(100);
  };

  const getCharClass = (index: number) => {
    if (index >= userInput.length) return "text-muted-foreground";
    if (userInput[index] === currentText[index]) return "text-green-500";
    return "text-red-500";
  };

  return (
    <motion.div
      className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#ff9933] flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Keyboard className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold">Typing Speed Test</h3>
          <p className="text-sm text-muted-foreground">
            Test your typing skills!
          </p>
        </div>
      </div>

      {!isPlaying && !currentText && (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF7A00]/10 mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-10 h-10 text-[#FF7A00]" />
          </motion.div>
          <p className="text-muted-foreground mb-4">Ready to test your speed?</p>
          {bestWpm > 0 && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-[#FF7A00]" />
              <span className="text-sm font-semibold">Best: {bestWpm} WPM</span>
            </div>
          )}
          <Button onClick={startGame} className="bg-[#FF7A00] hover:bg-[#FF7A00]/90">
            Start Test
          </Button>
        </motion.div>
      )}

      {currentText && (
        <>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#FF7A00]">{timeLeft}s</div>
              <div className="text-xs text-muted-foreground">Time Left</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#FF7A00]">{wpm}</div>
              <div className="text-xs text-muted-foreground">WPM</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#FF7A00]">{accuracy}%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-4 mb-4 font-mono text-lg leading-relaxed min-h-[100px]">
            {currentText.split("").map((char, index) => (
              <span key={index} className={getCharClass(index)}>
                {char}
              </span>
            ))}
          </div>

          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={!isPlaying}
            className="w-full bg-background border-2 border-border rounded-xl p-4 font-mono resize-none focus:border-[#FF7A00] focus:outline-none transition-colors"
            placeholder={isPlaying ? "Start typing..." : "Game over!"}
            rows={3}
            autoFocus={isPlaying}
          />

          {!isPlaying && (
            <div className="flex gap-2 mt-4">
              <Button onClick={startGame} className="flex-1 bg-[#FF7A00] hover:bg-[#FF7A00]/90">
                Try Again
              </Button>
              <Button onClick={resetGame} variant="outline" size="icon">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
