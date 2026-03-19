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
            <article className="stack-card pricing-tier pricing-tier--community">
              <h3>Community</h3>
              <p className="pricing-tier-subtitle">Best for individuals</p>
              <p className="pricing-tier-price">Free.</p>
              <ul>
                <li>Support for 20+ chains</li>
                <li>Load balanced RPC proxy layer</li>
                <li>Enhanced monitoring</li>
                <li>Metrics and analytics dashboards</li>
                <li>Community subgraphs and data models</li>
                <li>TPS: 20 requests / 10 seconds</li>
                <li>Email support</li>
              </ul>
              <a className="btn primary pricing-tier-button" href="/#contact">
                Try It Free
              </a>
            </article>

            <article className="stack-card pricing-tier pricing-tier--developer">
              <h3>Developer</h3>
              <p className="pricing-tier-subtitle">Best for small team and medium-sized projects</p>
              <p className="pricing-tier-price">Pay as you go. Usage based.</p>
              <ul>
                <li>Everything in starter plan</li>
                <li>Unlimited custom subgraph indexing</li>
                <li>Unlimited community data querying</li>
                <li>TPS: 50 requests / 10 seconds</li>
                <li>Priority email support</li>
              </ul>
              <a className="btn primary pricing-tier-button" href="/#contact">
                Get Started
              </a>
            </article>

            <article className="stack-card pricing-tier pricing-tier--enterprise">
              <h3>Enterprise</h3>
              <p className="pricing-tier-subtitle">Best for large projects operating at enterprise scale</p>
              <p className="pricing-tier-price">Custom Pricing</p>
              <ul>
                <li>Everything in Developer plan</li>
                <li>Optional dedicated environment</li>
                <li>0xDb, dedicated indexing access</li>
                <li>Custom API and database sync</li>
                <li>Custom query limit</li>
                <li>99.9% uptime, sub-50ms latency, custom SLA support</li>
                <li>Email, Slack, Telegram support</li>
              </ul>
              <a className="btn primary pricing-tier-button" href="/#contact">
                Contact Sales
              </a>
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

