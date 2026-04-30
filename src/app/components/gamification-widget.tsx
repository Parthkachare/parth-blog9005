import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Trophy, Flame, Star, Award, Zap, BookOpen } from "lucide-react";
import confetti from "canvas-confetti";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  progress?: number;
  total?: number;
}

export function GamificationWidget() {
  const [streak, setStreak] = useState(0);
  const [points, setPoints] = useState(0);
  const [articlesRead, setArticlesRead] = useState(0);
  const [timeOnSite, setTimeOnSite] = useState(0);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const savedStreak = parseInt(localStorage.getItem("readingStreak") || "0");
    const savedPoints = parseInt(localStorage.getItem("userPoints") || "0");
    const savedArticles = parseInt(localStorage.getItem("articlesRead") || "0");
    const lastVisit = localStorage.getItem("lastVisit");
    const today = new Date().toDateString();

    if (lastVisit !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastVisit === yesterday.toDateString()) {
        const newStreak = savedStreak + 1;
        setStreak(newStreak);
        localStorage.setItem("readingStreak", newStreak.toString());
        if (newStreak === 7 || newStreak === 30 || newStreak === 100) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#FF7A00", "#ff9933", "#ffaa55"],
          });
        }
      } else {
        setStreak(1);
        localStorage.setItem("readingStreak", "1");
      }
      localStorage.setItem("lastVisit", today);
    } else {
      setStreak(savedStreak);
    }

    setPoints(savedPoints);
    setArticlesRead(savedArticles);

    const startTime = Date.now();
    const timer = setInterval(() => {
      setTimeOnSite(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const newAchievements: Achievement[] = [
      {
        id: "first-visit",
        title: "Welcome!",
        description: "Visit the blog for the first time",
        icon: <Star className="w-5 h-5" />,
        unlocked: true,
      },
      {
        id: "week-streak",
        title: "Week Warrior",
        description: "Maintain a 7-day reading streak",
        icon: <Flame className="w-5 h-5" />,
        unlocked: streak >= 7,
        progress: Math.min(streak, 7),
        total: 7,
      },
      {
        id: "month-streak",
        title: "Monthly Master",
        description: "Maintain a 30-day reading streak",
        icon: <Trophy className="w-5 h-5" />,
        unlocked: streak >= 30,
        progress: Math.min(streak, 30),
        total: 30,
      },
      {
        id: "bookworm",
        title: "Bookworm",
        description: "Read 10 articles",
        icon: <BookOpen className="w-5 h-5" />,
        unlocked: articlesRead >= 10,
        progress: Math.min(articlesRead, 10),
        total: 10,
      },
      {
        id: "engaged-reader",
        title: "Engaged Reader",
        description: "Spend 30 minutes on the site",
        icon: <Zap className="w-5 h-5" />,
        unlocked: timeOnSite >= 1800,
        progress: Math.min(timeOnSite, 1800),
        total: 1800,
      },
      {
        id: "super-fan",
        title: "Super Fan",
        description: "Earn 1000 points",
        icon: <Award className="w-5 h-5" />,
        unlocked: points >= 1000,
        progress: Math.min(points, 1000),
        total: 1000,
      },
    ];

    setAchievements(newAchievements);
  }, [streak, points, articlesRead, timeOnSite]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Trophy className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold">Your Progress</h3>
          <p className="text-sm text-muted-foreground">Keep up the great work!</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <motion.div
          className="bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5 border border-[#FF7A00]/20 rounded-xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs text-muted-foreground">Streak</span>
          </div>
          <div className="text-2xl font-bold text-[#FF7A00]">{streak}</div>
          <div className="text-xs text-muted-foreground">days</div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5 border border-[#FF7A00]/20 rounded-xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs text-muted-foreground">Points</span>
          </div>
          <div className="text-2xl font-bold text-[#FF7A00]">{points}</div>
          <div className="text-xs text-muted-foreground">earned</div>
        </motion.div>

        <motion.div
          className="bg-muted/50 rounded-xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs text-muted-foreground">Articles</span>
          </div>
          <div className="text-2xl font-bold">{articlesRead}</div>
          <div className="text-xs text-muted-foreground">read</div>
        </motion.div>

        <motion.div
          className="bg-muted/50 rounded-xl p-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs text-muted-foreground">Time</span>
          </div>
          <div className="text-2xl font-bold">{formatTime(timeOnSite)}</div>
          <div className="text-xs text-muted-foreground">today</div>
        </motion.div>
      </div>

      <div>
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#FF7A00]" />
          Achievements
        </h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className={`p-3 rounded-xl border transition-all ${
                achievement.unlocked
                  ? "bg-[#FF7A00]/10 border-[#FF7A00]/30"
                  : "bg-muted/30 border-border/50 opacity-60"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    achievement.unlocked
                      ? "bg-[#FF7A00]/20 text-[#FF7A00]"
                      : "bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm mb-1">
                    {achievement.title}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {achievement.description}
                  </div>
                  {achievement.total && (
                    <div className="w-full bg-muted/50 rounded-full h-1.5">
                      <motion.div
                        className="bg-[#FF7A00] h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${
                            ((achievement.progress || 0) / achievement.total) * 100
                          }%`,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </div>
                {achievement.unlocked && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                  >
                    <Trophy className="w-5 h-5 text-[#FF7A00]" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
