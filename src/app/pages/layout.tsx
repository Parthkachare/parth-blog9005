import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ReadingProgress } from "../components/reading-progress";
import { CursorGlow } from "../components/cursor-glow";
import { CookieConsent } from "../components/cookie-consent";
import { FloatingActions } from "../components/floating-actions";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorGlow />
      <ReadingProgress />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <CookieConsent />
    </div>
  );
}