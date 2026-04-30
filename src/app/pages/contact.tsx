import { Mail, MessageSquare, Send } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hi? I'd love to hear
            from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#FF7A00]" />
              </div>
              <h2 className="text-2xl font-bold">Send a Message</h2>
            </div>

            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 bg-input-background"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-2 bg-input-background"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="mt-2 bg-input-background"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  className="mt-2 bg-input-background"
                />
              </div>

              <Button className="w-full bg-[#FF7A00] hover:bg-[#ff8c1a] text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#FF7A00]" />
                </div>
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Send me an email anytime. I usually respond within 24 hours.
              </p>
              <a
                href="mailto:contact@parthblog.space"
                className="text-[#FF7A00] hover:underline"
              >
                contact@parthblog.space
              </a>
            </div>

            {/* General Info */}
            <div className="bg-gradient-to-br from-[#FF7A00] to-[#ff9933] text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Why Contact Me?</h3>
              <ul className="space-y-3 text-white/90">
                <li>• Collaboration opportunities</li>
                <li>• Guest post submissions</li>
                <li>• Technical questions</li>
                <li>• Sponsorship inquiries</li>
                <li>• General feedback</li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Response Time</h3>
              <p className="text-muted-foreground">
                I aim to respond to all messages within 24-48 hours during
                weekdays. For urgent matters, please mention "URGENT" in your
                subject line.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
