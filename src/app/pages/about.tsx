import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#ff9933] mb-6 shadow-2xl shadow-[#FF7A00]/30">
            <span className="text-white font-bold text-4xl">PK</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Parth Kachare
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Web developer, designer, and tech enthusiast sharing insights about
            modern development and startup culture.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
            <p>
              Hi! I'm Parth Kachare, a passionate web developer and designer
              focused on building beautiful, functional, and user-centric digital
              experiences. This blog is my platform to share knowledge, insights,
              and lessons learned from my journey in tech.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              What I Write About
            </h2>
            <p>
              On this blog, you'll find articles covering a wide range of topics
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Modern web development with React, TypeScript, and Next.js</li>
              <li>UI/UX design principles and best practices</li>
              <li>Artificial intelligence and its impact on development</li>
              <li>Startup culture and entrepreneurship</li>
              <li>Practical tutorials and code walkthroughs</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              My Background
            </h2>
            <p>
              With years of experience in full-stack development and design, I've
              worked on projects ranging from small startups to large-scale
              enterprise applications. I'm particularly interested in the
              intersection of design and technology, and how we can create
              products that are both beautiful and performant.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Connect With Me
            </h2>
            <p>
              I'm always happy to connect with fellow developers, designers, and
              tech enthusiasts. Feel free to reach out!
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button
                className="bg-[#FF7A00] hover:bg-[#ff8c1a] text-white"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:hello@parthkachare.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-[#FF7A00] mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Articles</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-[#FF7A00] mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Readers</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-[#FF7A00] mb-2">5</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-[#FF7A00] mb-2">2026</div>
            <div className="text-sm text-muted-foreground">Est.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
