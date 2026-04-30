import { Button } from "../components/ui/button";
import { Mail, Sparkles, TrendingUp, Gamepad2 } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { blogPosts } from "../data/blog-posts";
import { BlogCard } from "../components/blog-card";
import { BlogSidebar } from "../components/blog-sidebar";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { AdSensePlaceholder } from "../components/adsense-placeholder";
import { TypingSpeedGame } from "../components/typing-speed-game";
import { TechTrivia } from "../components/tech-trivia";
import { GamificationWidget } from "../components/gamification-widget";
import { CodePlayground } from "../components/code-playground";
import { LiveStats } from "../components/live-stats";

const categories = ["React", "UI/UX", "AI", "Startups", "Tutorials"];

export default function BlogHome() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const latestPosts = blogPosts.filter((post) => !post.featured).slice(0, 8);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF7A00]/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 30,
            y: -mousePosition.y * 30,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-[#FF7A00]" />
              <span className="text-sm font-medium text-[#FF7A00]">Welcome to my blog</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                className="inline-block bg-gradient-to-r from-foreground via-[#FF7A00] to-foreground bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Parth's Blog
              </motion.span>
            </h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Insights about web development, UI/UX, startups, and technology
            </motion.p>
          </motion.div>
        </div>

        {/* Animated Categories Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.a
              key={category}
              href="/categories"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                className="px-4 py-2 cursor-pointer bg-card border border-border text-foreground hover:bg-[#FF7A00] hover:text-white hover:border-[#FF7A00] transition-all"
              >
                {category}
              </Badge>
            </motion.a>
          ))}
        </motion.div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FF7A00]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-[#FF7A00]" />
              <h2 className="text-2xl font-bold">Featured Article</h2>
            </div>
            <BlogCard {...featuredPost} featured />
          </motion.div>
        </section>
      )}

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Posts */}
          <div className="lg:col-span-2">
            <motion.h2
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Latest Posts
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {latestPosts.slice(0, 4).map((post, index) => (
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <AdSensePlaceholder size="leaderboard" label="Sponsored Content" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {latestPosts.slice(4, 8).map((post, index) => (
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
          </div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <BlogSidebar />
            <AdSensePlaceholder size="rectangle" sticky />
            <LiveStats />
            <GamificationWidget />
          </motion.div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Gamepad2 className="w-7 h-7 text-[#FF7A00]" />
          <h2 className="text-3xl font-bold">Take a Break - Play & Learn</h2>
        </motion.div>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Challenge yourself with our interactive games and keep improving your skills while having fun!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TypingSpeedGame />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TechTrivia />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CodePlayground />
        </motion.div>
      </section>

      {/* Newsletter Section with Enhanced Animation */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FF7A00] to-[#ff9933] p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          
          {/* Floating circles */}
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Mail className="w-8 h-8" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to the Newsletter
            </h2>
            <p className="text-white/90 mb-6">
              Get the latest articles, tutorials, and insights delivered directly
              to your inbox every week.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-[#FF7A00] hover:bg-white/90 font-semibold w-full sm:w-auto">
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Ad Placements */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <AdSensePlaceholder size="rectangle" label="Partner Content" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <AdSensePlaceholder size="rectangle" label="Featured Sponsor" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}