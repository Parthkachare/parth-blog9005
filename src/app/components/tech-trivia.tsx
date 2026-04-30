import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Brain, Trophy, RotateCcw, CheckCircle2, XCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 1,
    explanation: "CSS stands for Cascading Style Sheets, used for styling web pages.",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    correct: 1,
    explanation: "JavaScript was developed by Brendan Eich at Netscape in 1995.",
  },
  {
    question: "What is the latest version of HTML?",
    options: ["HTML4", "HTML5", "HTML6", "XHTML"],
    correct: 1,
    explanation: "HTML5 is the current standard for HTML, released in 2014.",
  },
  {
    question: "What does REST stand for in API design?",
    options: [
      "Remote Execution State Transfer",
      "Representational State Transfer",
      "Resource State Transition",
      "Rapid Execution Service Technology",
    ],
    correct: 1,
    explanation: "REST stands for Representational State Transfer, an architectural style for APIs.",
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Django", "Vue", "Angular"],
    correct: 1,
    explanation: "Django is a Python web framework, not a JavaScript framework.",
  },
  {
    question: "What does npm stand for?",
    options: [
      "Node Package Manager",
      "New Programming Method",
      "Network Protocol Module",
      "Node Programming Module",
    ],
    correct: 0,
    explanation: "npm stands for Node Package Manager, used for managing JavaScript packages.",
  },
];

export function TechTrivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("triviaHighScore") || "0")
  );

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#FF7A00", "#ff9933"],
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
      if (score + (selectedAnswer === questions[currentQuestion].correct ? 1 : 0) > highScore) {
        const newScore = score + (selectedAnswer === questions[currentQuestion].correct ? 1 : 0);
        setHighScore(newScore);
        localStorage.setItem("triviaHighScore", newScore.toString());
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF7A00", "#ff9933", "#ffaa55"],
        });
      }
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsComplete(false);
  };

  if (isComplete) {
    const finalScore = score;
    const percentage = Math.round((finalScore / questions.length) * 100);

    return (
      <motion.div
        className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center py-8">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#ff9933] mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
          <p className="text-4xl font-bold text-[#FF7A00] mb-4">
            {finalScore}/{questions.length}
          </p>
          <p className="text-muted-foreground mb-2">You scored {percentage}%</p>
          {finalScore === highScore && finalScore > 0 && (
            <p className="text-sm text-[#FF7A00] font-semibold mb-4">
              🎉 New High Score!
            </p>
          )}
          {highScore > 0 && (
            <p className="text-sm text-muted-foreground mb-6">
              High Score: {highScore}/{questions.length}
            </p>
          )}
          <Button onClick={restart} className="bg-[#FF7A00] hover:bg-[#FF7A00]/90">
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
        </div>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

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
          <Brain className="w-6 h-6 text-white" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">Tech Trivia</h3>
          <p className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[#FF7A00]">{score}</div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>
      </div>

      <div className="mb-2">
        <div className="w-full bg-muted/50 rounded-full h-2 mb-4">
          <motion.div
            className="bg-gradient-to-r from-[#FF7A00] to-[#ff9933] h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <h4 className="text-lg font-semibold mb-6">{question.question}</h4>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correct;
          const showResult = selectedAnswer !== null;

          let bgClass = "bg-muted/30 hover:bg-muted/50 border-border";
          if (showResult) {
            if (isCorrect) {
              bgClass = "bg-green-500/20 border-green-500";
            } else if (isSelected && !isCorrect) {
              bgClass = "bg-red-500/20 border-red-500";
            }
          }

          return (
            <motion.button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${bgClass} ${
                selectedAnswer === null ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              whileHover={selectedAnswer === null ? { scale: 1.02, x: 5 } : {}}
              whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {showResult && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                )}
                {showResult && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-muted/50 rounded-xl p-4 mb-4"
          >
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {showExplanation && (
        <Button
          onClick={nextQuestion}
          className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90"
        >
          {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
        </Button>
      )}
    </motion.div>
  );
}
