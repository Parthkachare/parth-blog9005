import { motion } from "motion/react";
import { blogPosts } from "../data/blog-posts";
import { BlogCard } from "../components/blog-card";
import { Search, Filter } from "lucide-react";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Badge } from "../components/ui/badge";

const categories = ["All", "React", "UI/UX", "AI", "Startups", "Tutorials"];

export default function AllBlogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">All Articles</h1>
          <p className="text-xl text-muted-foreground">
            Browse through {blogPosts.length} articles about web development, design, and technology
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          className="max-w-2xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer px-4 py-2 ${
                    selectedCategory === category
                      ? "bg-[#FF7A00] text-white"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Results Count */}
      <section className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-muted-foreground">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
        </p>
      </section>

      {/* All Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-2xl text-muted-foreground mb-4">No articles found</p>
            <p className="text-muted-foreground">Try adjusting your search or filter</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
