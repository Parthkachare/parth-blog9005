import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "./ui/button";

interface BookmarkButtonProps {
  articleId: string;
  title: string;
}

export function BookmarkButton({ articleId, title }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setIsBookmarked(bookmarks.some((b: { id: string }) => b.id === articleId));
  }, [articleId]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (isBookmarked) {
      const updated = bookmarks.filter((b: { id: string }) => b.id !== articleId);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(false);
    } else {
      bookmarks.push({ id: articleId, title, savedAt: new Date().toISOString() });
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={toggleBookmark}
        variant="outline"
        size="sm"
        className={`gap-2 ${
          isBookmarked
            ? "bg-[#FF7A00]/10 border-[#FF7A00] text-[#FF7A00]"
            : ""
        }`}
      >
        <motion.div
          animate={isBookmarked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {isBookmarked ? (
            <BookmarkCheck className="w-4 h-4" />
          ) : (
            <Bookmark className="w-4 h-4" />
          )}
        </motion.div>
        {isBookmarked ? "Saved" : "Save"}
      </Button>
    </motion.div>
  );
}
