import "../globals.css";

export default function PricingPage() {
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">YDYL</div>
          <nav className="nav-links">
            <div className="nav-dropdown">
              <span className="nav-dropdown-toggle">Developers</span>
              <div className="nav-dropdown-menu">
                <a className="nav-dropdown-link" href="/developers">
                  <strong>Developer hub</strong>
                  <span>Overview of building on YDYL</span>
                </a>
                <a className="nav-dropdown-link" href="/docs">
                  <strong>Documentation</strong>
                  <span>Concepts, auth, and guides</span>
                </a>
                <a className="nav-dropdown-link" href="/api-reference">
                  <strong>API reference</strong>
                  <span>Endpoints, parameters, and models</span>
                </a>
                <a className="nav-dropdown-link" href="/changelog">
                  <strong>Changelog</strong>
                  <span>What shipped and what&apos;s next</span>
                </a>
                <a className="nav-dropdown-link" href="/status">
                  <strong>Status</strong>
                  <span>Live view of platform health</span>
                </a>
              </div>
            </div>
            <a href="/solutions">Solutions</a>
            <a href="/scale">Scale</a>
            <a href="/pricing">Pricing</a>
            <a href="/why-ydyl">Why YDYL</a>
            <a href="/panel">Panel</a>
          </nav>
          <div className="nav-cta">
            <a className="btn ghost" href="/#contact">
              Contact us
            </a>
            <a className="btn primary" href="/">
              Home
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="stack">
          <div className="section-header" style={{ textAlign: "center" }}>
            <h2>Pricing</h2>
            <p>
              Start on YDYL with a pilot and scale to portfolios and full ecosystems as value is proven. All plans include
              Program graph, Data API, and Governance Workspace.
            </p>
          </div>

          <div className="stack-grid">
            <article className="stack-card">
              <h3>Pilot</h3>
              <p>Best for individual teams validating YDYL on a single initiative.</p>
              <ul>
                <li>One program, up to a few dozen projects</li>
                <li>Sandbox + staging environments</li>
                <li>Shared infrastructure and standard support</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>Portfolio</h3>
              <p>Best for ministries or agencies running multi‑year portfolios.</p>
              <ul>
                <li>Multiple programs and regions</li>
                <li>Higher throughput Data API limits</li>
                <li>Priority support and account team</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>Ecosystem</h3>
              <p>Best for cross‑border, multi‑stakeholder initiatives.</p>
              <ul>
                <li>Multi‑country coordination and data residency options</li>
                <li>Dedicated environments and custom SLAs</li>
                <li>Joint roadmap and integration support</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="cta">
          <div className="cta-inner">
            <div>
              <h2>Talk to us about pricing</h2>
              <p>
                Share a bit about your portfolio size, regions, and timelines and we&apos;ll come back with a tailored
                proposal.
              </p>
            </div>
            <form className="cta-form" method="post" action="#">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Work email" required />
              <input type="text" name="org" placeholder="Organization" />
              <textarea name="details" rows={3} placeholder="Describe your program and timelines" />
              <button type="submit" className="btn primary">
                Request pricing
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">YDYL</div>
          <div className="footer-meta">
            <span>© {new Date().getFullYear()} YDYL. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

