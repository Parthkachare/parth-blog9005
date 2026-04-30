import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Footer() {
  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "mailto:hello@parthkachare.com", icon: Mail, label: "Email" },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/categories", label: "Categories" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#ff9933] flex items-center justify-center shadow-lg shadow-[#FF7A00]/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-lg">PK</span>
              </motion.div>
              <span className="text-xl font-semibold">Parth Kachare</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-sm">
              A tech blog focused on web development, UI/UX design, AI, and
              startup insights. Sharing knowledge to help developers build
              better products.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-muted hover:bg-[#FF7A00] hover:text-white transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link to={link.to} className="hover:text-foreground transition-colors inline-block">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest articles delivered to your inbox.
            </p>
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Input
                type="email"
                placeholder="Your email"
                className="bg-input-background"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-[#FF7A00] hover:bg-[#ff8c1a] text-white w-full">
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>&copy; 2026 Parth Kachare. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.div whileHover={{ y: -2 }}>
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}