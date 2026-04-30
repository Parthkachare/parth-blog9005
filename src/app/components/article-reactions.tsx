import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Heart, Flame, Lightbulb, ThumbsUp } from "lucide-react";

interface Reaction {
  icon: React.ReactNode;
  label: string;
  key: string;
}

const reactions: Reaction[] = [
  { icon: <ThumbsUp className="w-5 h-5" />, label: "Like", key: "like" },
  { icon: <Heart className="w-5 h-5" />, label: "Love", key: "love" },
  { icon: <Flame className="w-5 h-5" />, label: "Fire", key: "fire" },
  { icon: <Lightbulb className="w-5 h-5" />, label: "Helpful", key: "helpful" },
];

export function ArticleReactions({ articleId }: { articleId: string }) {
  const [counts, setCounts] = useState({ like: 0, love: 0, fire: 0, helpful: 0 });
  const [userReaction, setUserReaction] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`reactions-${articleId}`);
    const userR = localStorage.getItem(`user-reaction-${articleId}`);
    if (saved) setCounts(JSON.parse(saved));
    if (userR) setUserReaction(userR);
  }, [articleId]);

  const handleReaction = (key: string) => {
    const newCounts = { ...counts };

    if (userReaction === key) {
      newCounts[key as keyof typeof counts]--;
      setUserReaction(null);
      localStorage.removeItem(`user-reaction-${articleId}`);
    } else {
      if (userReaction) {
        newCounts[userReaction as keyof typeof counts]--;
      }
      newCounts[key as keyof typeof counts]++;
      setUserReaction(key);
      localStorage.setItem(`user-reaction-${articleId}`, key);
    }

    setCounts(newCounts);
    localStorage.setItem(`reactions-${articleId}`, JSON.stringify(newCounts));
  };

  return (
    <div className="bg-card border-2 border-border rounded-2xl p-6">
      <h3 className="font-bold mb-4">How was this article?</h3>
      <div className="flex gap-3">
        {reactions.map((reaction) => (
          <motion.button
            key={reaction.key}
            onClick={() => handleReaction(reaction.key)}
            className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
              userReaction === reaction.key
                ? "bg-[#FF7A00]/20 border-[#FF7A00]"
                : "bg-muted/30 border-border hover:border-[#FF7A00]/50"
            }`}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={userReaction === reaction.key ? "text-[#FF7A00]" : ""}>
              {reaction.icon}
            </div>
            <span className="text-xs font-medium">{counts[reaction.key as keyof typeof counts]}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
