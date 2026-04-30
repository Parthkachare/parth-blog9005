export default function Terms() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Terms of Service
        </h1>

        <div className="bg-card border border-border rounded-2xl p-8 space-y-6 text-foreground/90">
          <p className="text-muted-foreground">Last updated: March 15, 2026</p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Agreement</h2>
            <p>
              By accessing and using Parth Kachare's Blog, you accept and agree
              to be bound by the terms and provisions of this agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Use License</h2>
            <p>
              Permission is granted to temporarily view and access the materials
              (information or software) on this blog for personal,
              non-commercial transitory viewing only.
            </p>
            <p>This license shall not allow you to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for commercial purposes or public display
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on the website
              </li>
              <li>
                Remove any copyright or proprietary notations from the materials
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Disclaimer</h2>
            <p>
              The materials on this blog are provided on an 'as is' basis. We
              make no warranties, expressed or implied, and hereby disclaim all
              other warranties including, without limitation, implied warranties
              or conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Content Accuracy
            </h2>
            <p>
              While we strive to provide accurate and up-to-date information, we
              make no representations or warranties about the completeness,
              accuracy, reliability, or suitability of the information, products,
              or services contained on this blog.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              User Comments
            </h2>
            <p>
              If you post comments or content on our blog, you grant us a
              non-exclusive license to use, reproduce, and publish such content.
              You are responsible for the content you post and must not post
              anything illegal, offensive, or infringing.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Limitations
            </h2>
            <p>
              In no event shall Parth Kachare or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data or
              profit) arising out of the use or inability to use the materials on
              this blog.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Modifications
            </h2>
            <p>
              We may revise these terms of service at any time without notice. By
              using this blog, you agree to be bound by the current version of
              these terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
              <a
                href="mailto:parthuidesigns@gmail.com"
                className="text-[#FF7A00] hover:underline"
              >
                parthuidesigns@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
