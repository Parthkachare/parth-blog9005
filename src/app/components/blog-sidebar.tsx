import { Search, Tag } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Input } from "./ui/input";
import { TrendingTopics } from "./trending-topics";

const trendingPosts = [
  {
    id: "1",
    title: "Building Modern React Applications with TypeScript",
    category: "React",
  },
  {
    id: "2",
    title: "The Future of Web Development in 2026",
    category: "Tutorials",
  },
  {
    id: "3",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    category: "UI/UX",
  },
  {
    id: "4",
    title: "How AI is Transforming Developer Workflows",
    category: "AI",
  },
];

const categories = [
  { name: "React", count: 24, color: "#61DAFB" },
  { name: "UI/UX", count: 18, color: "#FF7A00" },
  { name: "AI", count: 15, color: "#10B981" },
  { name: "Startups", count: 12, color: "#8B5CF6" },
  { name: "Tutorials", count: 32, color: "#F59E0B" },
];

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Search */}
      <motion.div
        className="bg-card border border-border rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Search className="w-5 h-5" />
          Search Articles
        </h3>
        <Input
          type="search"
          placeholder="Search blog posts..."
          className="bg-input-background"
        />
      </motion.div>

      {/* Trending Topics */}
      <TrendingTopics />

      {/* Categories */}
      <motion.div
        className="bg-card border border-border rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="/categories"
              className="block"
            >
              <motion.div
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-sm group-hover:text-[#FF7A00] transition-colors">
                    {category.name}
                  </span>
                </div>
                <motion.span
                  className="text-xs text-muted-foreground"
                  whileHover={{ scale: 1.1 }}
                >
                  {category.count}
                </motion.span>
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>

    </div>
  );
}