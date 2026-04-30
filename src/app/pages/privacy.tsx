export default function Privacy() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="bg-card border border-border rounded-2xl p-8 space-y-6 text-foreground/90">
          <p className="text-muted-foreground">
            Last updated: March 15, 2026
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
            <p>
              Welcome to Parth Kachare's Blog. This Privacy Policy explains how we
              collect, use, and protect your personal information when you visit
              our website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal information (name, email) when you subscribe to our newsletter</li>
              <li>Usage data and analytics through cookies and tracking technologies</li>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To send you newsletters and updates (with your consent)</li>
              <li>To improve our website and content</li>
              <li>To analyze website traffic and user behavior</li>
              <li>To display personalized advertisements</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Third-Party Services
            </h2>
            <p>
              We use third-party services including Google AdSense for
              advertisements. These services may collect information about your
              visits to this and other websites to provide relevant ads.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience and analyze
              traffic. You can control cookie preferences through your browser
              settings.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies in your browser</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:{" "}
              <a
                href="mailto:contact@parthblog.space"
                className="text-[#FF7A00] hover:underline"
              >
                contact@parthblog.space
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
