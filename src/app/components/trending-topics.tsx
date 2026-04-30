import { motion } from "motion/react";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const trendingTopics = [
  { topic: "React 19 Features", count: "2.4k", change: "+12%", articleId: "1" },
  { topic: "TypeScript Tips", count: "1.8k", change: "+8%", articleId: "2" },
  { topic: "Web Performance", count: "1.5k", change: "+15%", articleId: "3" },
  { topic: "AI & Machine Learning", count: "3.2k", change: "+25%", articleId: "4" },
  { topic: "Next.js 15", count: "2.1k", change: "+18%", articleId: "5" },
];

export function TrendingTopics() {
  return (
    <motion.div
      className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#ff9933] flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <TrendingUp className="w-5 h-5 text-white" />
        </motion.div>
        <div>
          <h3 className="font-bold">Trending Now</h3>
          <p className="text-xs text-muted-foreground">Hot topics this week</p>
        </div>
      </div>

      <div className="space-y-3">
        {trendingTopics.map((item, index) => (
          <Link key={item.topic} to={`/article/${item.articleId}`}>
            <motion.div
              className="group p-3 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-[#FF7A00]/50 cursor-pointer transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-[#FF7A00]">
                      #{index + 1}
                    </span>
                    <h4 className="text-sm font-medium group-hover:text-[#FF7A00] transition-colors">
                      {item.topic}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{item.count} reads</span>
                    <span className="text-green-500 font-medium">
                      {item.change}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#FF7A00] transition-colors" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        className="mt-4 p-3 bg-gradient-to-r from-[#FF7A00]/10 to-transparent rounded-xl border border-[#FF7A00]/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-[#FF7A00]">12.5k+</span> active readers this week
        </p>
      </motion.div>
    </motion.div>
  );
}
