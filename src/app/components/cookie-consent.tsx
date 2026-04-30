import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="relative overflow-hidden rounded-2xl bg-card border-2 border-[#FF7A00]/30 shadow-2xl backdrop-blur-xl">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 via-transparent to-[#FF7A00]/5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="relative p-6">
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF7A00]/20 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Cookie className="w-6 h-6 text-[#FF7A00]" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">We value your privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to enhance your browsing experience, serve personalized ads, and
                    analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={acceptCookies}
                  className="flex-1 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white"
                >
                  Accept All
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="flex-1"
                >
                  Decline
                </Button>
              </div>

              <button
                onClick={declineCookies}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
