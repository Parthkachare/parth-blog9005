import { blogPosts } from "../data/blog-posts";
import { Code, Palette, Brain, Rocket, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { BlogCard } from "../components/blog-card";
import { useState } from "react";

// Categories page component
const categories = [
  {
    name: "React",
    description: "Modern React development, hooks, patterns, and best practices",
    icon: Code,
    color: "#61DAFB",
    count: 24,
  },
  {
    name: "UI/UX",
    description: "Design systems, user experience, and interface design",
    icon: Palette,
    color: "#FF7A00",
    count: 18,
  },
  {
    name: "AI",
    description: "Artificial intelligence, machine learning, and automation",
    icon: Brain,
    color: "#10B981",
    count: 15,
  },
  {
    name: "Startups",
    description: "Entrepreneurship, business strategy, and startup growth",
    icon: Rocket,
    color: "#8B5CF6",
    count: 12,
  },
  {
    name: "Tutorials",
    description: "Step-by-step guides and practical coding tutorials",
    icon: BookOpen,
    color: "#F59E0B",
    count: 32,
  },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {selectedCategory || "Browse by Category"}
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {selectedCategory
              ? `${filteredPosts.length} articles in ${selectedCategory}`
              : "Explore articles organized by topic and find exactly what you're looking for"}
          </motion.p>
          {selectedCategory && (
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 text-[#FF7A00] hover:underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ← Back to all categories
            </motion.button>
          )}
        </div>
      </section>

      {/* Categories Grid or Filtered Posts */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        {!selectedCategory ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-[#FF7A00]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7A00]/10 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${category.color}20` }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7" style={{ color: category.color }} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FF7A00] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <Badge className="bg-muted text-foreground hover:bg-muted">
                    {category.count} articles
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Popular Posts from Each Category - Only show when no filter */}
        {!selectedCategory && (
          <div className="space-y-12">
            {categories.slice(0, 3).map((category, categoryIndex) => {
              const categoryPosts = blogPosts
                .filter((post) => post.category === category.name)
                .slice(0, 3);

              if (categoryPosts.length === 0) return null;

              return (
                <div key={category.name}>
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                      whileHover={{ scale: 1.5 }}
                    />
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </motion.div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {categoryPosts.map((post, postIndex) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: postIndex * 0.1 }}
                      >
                        <BlogCard {...post} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}