import { motion } from "motion/react";
import { Share2, Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface SocialShareProps {
  title: string;
  url?: string;
}

export function SocialShare({ title, url = window.location.href }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <motion.div
      className="bg-card border-2 border-border rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#ff9933] flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Share2 className="w-5 h-5 text-white" />
        </motion.div>
        <h3 className="font-bold">Share this article</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        <motion.a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-[#1DA1F2]/10 border-[#1DA1F2]/30 text-[#1DA1F2] hover:bg-[#1DA1F2]/20"
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </Button>
        </motion.a>

        <motion.a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-[#4267B2]/10 border-[#4267B2]/30 text-[#4267B2] hover:bg-[#4267B2]/20"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </Button>
        </motion.a>

        <motion.a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-[#0077B5]/10 border-[#0077B5]/30 text-[#0077B5] hover:bg-[#0077B5]/20"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </motion.a>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={copyToClipboard}
            variant="outline"
            size="sm"
            className={`gap-2 ${
              copied
                ? "bg-green-500/10 border-green-500/30 text-green-500"
                : "bg-muted/50"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Link2 className="w-4 h-4" />
                Copy Link
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
