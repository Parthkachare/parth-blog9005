import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Link } from "react-router";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <Link
        to={`/article/${id}`}
        className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-[#FF7A00]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF7A00]/10"
      >
        <motion.div
          className="grid md:grid-cols-2 gap-6 p-6"
          whileHover="hover"
        >
          <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              variants={{
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
              variants={{
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="bg-[#FF7A00] text-white hover:bg-[#ff8c1a]">
                  Featured
                </Badge>
              </motion.div>
            </div>
            <motion.div
              className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2"
              variants={{
                hover: { scale: 1.2, rotate: -45 },
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>
          <div className="flex flex-col justify-center">
            <motion.div
              variants={{
                hover: { x: 5 },
              }}
              transition={{ duration: 0.3 }}
            >
              <Badge className="w-fit mb-3 bg-muted text-foreground hover:bg-muted">
                {category}
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl font-bold mb-4 group-hover:text-[#FF7A00] transition-colors"
              variants={{
                hover: { x: 5 },
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-4 line-clamp-3"
              variants={{
                hover: { x: 5 },
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {excerpt}
            </motion.p>
            <motion.div
              className="flex items-center gap-4 text-sm text-muted-foreground"
              variants={{
                hover: { x: 5 },
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link
      to={`/article/${id}`}
      className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-[#FF7A00]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF7A00]/10 h-full"
    >
      <motion.div
        className="h-full flex flex-col"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#FF7A00]/20 to-transparent opacity-0"
            variants={{
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0"
            variants={{
              hover: { opacity: 1, scale: 1, rotate: -45 },
            }}
            transition={{ duration: 0.3 }}
            initial={{ scale: 0.5 }}
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <motion.div
            variants={{
              hover: { y: -2 },
            }}
            transition={{ duration: 0.2 }}
          >
            <Badge className="mb-3 bg-muted text-foreground hover:bg-muted">
              {category}
            </Badge>
          </motion.div>
          <motion.h3
            className="text-xl font-semibold mb-2 group-hover:text-[#FF7A00] transition-colors line-clamp-2"
            variants={{
              hover: { y: -2 },
            }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1"
            variants={{
              hover: { y: -2 },
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {excerpt}
          </motion.p>
          <motion.div
            className="flex items-center gap-4 text-sm text-muted-foreground"
            variants={{
              hover: { y: -2 },
            }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}