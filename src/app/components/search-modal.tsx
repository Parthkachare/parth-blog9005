import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { blogPosts } from "../data/blog-posts";
import { Link } from "react-router";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-card border-2 border-border rounded-2xl shadow-2xl z-50 max-h-[70vh] overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="p-4 border-b border-border flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="border-0 focus-visible:ring-0"
                autoFocus
              />
              <button onClick={onClose}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-96 p-4">
              {query.length > 0 ? (
                results.length > 0 ? (
                  results.map((post) => (
                    <Link
                      key={post.id}
                      to={`/article/${post.id}`}
                      onClick={onClose}
                      className="block p-3 rounded-xl hover:bg-muted transition-colors mb-2"
                    >
                      <h4 className="font-semibold mb-1">{post.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {post.excerpt}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-8">No results</p>
                )
              ) : (
                <p className="text-center text-muted-foreground py-8">Start typing to search</p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
