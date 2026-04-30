import { useParams, Link } from "react-router";
import { blogPosts } from "../data/blog-posts";
import { BlogCard } from "../components/blog-card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { AdSensePlaceholder } from "../components/adsense-placeholder";
import { SocialShare } from "../components/social-share";
import { BookmarkButton } from "../components/bookmark-button";
import { GamificationWidget } from "../components/gamification-widget";
import { LiveStats } from "../components/live-stats";
import { TechTrivia } from "../components/tech-trivia";
import { ArticleReactions } from "../components/article-reactions";

export default function ArticlePage() {
  const { id } = useParams();
  const article = blogPosts.find((post) => post.id === id);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (article) {
      const articlesRead = parseInt(localStorage.getItem("articlesRead") || "0");
      const userPoints = parseInt(localStorage.getItem("userPoints") || "0");
      localStorage.setItem("articlesRead", (articlesRead + 1).toString());
      localStorage.setItem("userPoints", (userPoints + 10).toString());
    }
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button className="bg-[#FF7A00] hover:bg-[#ff8c1a] text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((post) => post.id !== id && post.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Ad Banner - Top */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AdSensePlaceholder size="leaderboard" label="Sponsored Content" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <article className="lg:col-span-2">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-[#FF7A00] text-white hover:bg-[#ff8c1a]">
                {article.category}
              </Badge>
            </motion.div>
            <BookmarkButton articleId={article.id} title={article.title} />
          </div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {article.title}
          </motion.h1>

          {/* Article Meta */}
          <motion.div
            className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </motion.div>
          </motion.div>

          {/* Social Share */}
          <motion.div
            className="flex items-center gap-3 pb-6 border-b border-border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-sm font-semibold flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share:
            </span>
            <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="outline"
                className="hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="outline"
                className="hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="outline"
                className="hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={copiedLink ? { scale: [1, 1.2, 1] } : {}}
            >
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopyLink}
                className={copiedLink ? "bg-green-500 text-white border-green-500" : ""}
              >
                <LinkIcon className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="rounded-2xl overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <div
              className="space-y-6 text-foreground"
              style={{ lineHeight: "1.8" }}
            >
              {article.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <motion.h2
                      key={index}
                      className="text-2xl font-bold mt-8 mb-4 text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {paragraph.replace("## ", "")}
                    </motion.h2>
                  );
                }
                if (paragraph.startsWith("```")) {
                  const code = paragraph.replace(/```\w*\n?|\n?```/g, "");
                  return (
                    <motion.pre
                      key={index}
                      className="bg-muted p-6 rounded-xl overflow-x-auto border border-border"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <code className="text-sm text-foreground">{code}</code>
                    </motion.pre>
                  );
                }
                return (
                  <motion.p
                    key={index}
                    className="text-foreground/90 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {paragraph}
                  </motion.p>
                );
              })}
            </div>
          </div>

          {/* Mid-Article Ad */}
          <div className="my-12">
            <AdSensePlaceholder size="rectangle" label="Partner Content" />
          </div>
        </motion.div>

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-border space-y-6">
          <ArticleReactions articleId={article.id} />
          <SocialShare title={article.title} />
        </div>
      </article>

      {/* Sidebar */}
      <motion.aside
        className="lg:col-span-1 space-y-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <AdSensePlaceholder size="rectangle" sticky />
        <LiveStats />
        <GamificationWidget />
        <TechTrivia />
      </motion.aside>
    </div>
  </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.h2
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Related Articles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Ad */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <AdSensePlaceholder size="leaderboard" label="Recommended Products" />
      </section>
    </div>
  );
}