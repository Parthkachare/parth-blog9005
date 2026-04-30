import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#FF7A00] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-[#FF7A00] hover:bg-[#ff8c1a] text-white"
            asChild
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/blog">
              <Search className="w-4 h-4 mr-2" />
              Browse Blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
