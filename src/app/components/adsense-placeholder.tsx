import { motion } from "motion/react";
import { DollarSign } from "lucide-react";

interface AdSensePlaceholderProps {
  size: "banner" | "leaderboard" | "rectangle" | "skyscraper" | "mobile";
  label?: string;
  sticky?: boolean;
}

const adSizes = {
  banner: { width: "468x60", aspect: "468/60" },
  leaderboard: { width: "728x90", aspect: "728/90" },
  rectangle: { width: "300x250", aspect: "300/250" },
  skyscraper: { width: "160x600", aspect: "160/600" },
  mobile: { width: "320x50", aspect: "320/50" },
};

export function AdSensePlaceholder({ size, label, sticky }: AdSensePlaceholderProps) {
  const adInfo = adSizes[size];

  return (
    <motion.div
      className={`${sticky ? "sticky top-20" : ""} w-full`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <DollarSign className="w-4 h-4 text-[#FF7A00]" />
          <p className="text-xs text-muted-foreground font-medium">
            {label || "Advertisement"}
          </p>
        </div>
        <div
          className="w-full bg-muted/30 rounded-lg flex items-center justify-center border border-dashed border-border/50"
          style={{ aspectRatio: adInfo.aspect }}
        >
          <div className="text-center px-4">
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FF7A00]/10 mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <DollarSign className="w-6 h-6 text-[#FF7A00]" />
            </motion.div>
            <p className="text-xs text-muted-foreground">
              Google AdSense {adInfo.width}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
