import "./globals.css";

export default function HomePage() {
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
            <a className="btn ghost" href="#contact">
              Contact us
            </a>
            <a className="btn primary" href="/">
              Home
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="get-started">
          <div className="hero-content">
            <h1>Real-time infrastructure for initiatives that can’t afford lag</h1>
            <p className="hero-subtitle">
              YDYL provides a unified digital infrastructure layer for large-scale cross-border projects – delivering real-time
              data, collaboration, and governance tooling so decisions happen in seconds, not weeks.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">
                Talk to our team
              </a>
              <a className="btn secondary" href="#contact">
                View customer stories
              </a>
            </div>
            <div className="hero-badges">
              <span>Trusted by global infrastructure programs</span>
              <span>Built for governments, operators &amp; funds</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <h2>Unified project data, globally</h2>
              <p>
                Aggregate financial, operational, and risk data across regions into a single real-time layer – with granular
                access control for every stakeholder.
              </p>
              <ul>
                <li>Live project health dashboards</li>
                <li>Multi-region data ingestion</li>
                <li>Role-based access &amp; governance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="section-header">
            <h2>Powering high-stakes infrastructure programs</h2>
            <p>
              From transport corridors to energy grids, YDYL is designed for initiatives where latency, opacity, and data silos
              are not an option.
            </p>
          </div>
          <div className="testimonial-card">
            <p className="quote">
              “With YDYL, we moved from static quarterly reports to live cross-border visibility. Stakeholders now share a
              single, trusted view of project reality – and coordination cycles that used to take weeks now happen in hours.”
            </p>
            <p className="quote-author">Program Director, Multinational Infrastructure Initiative</p>
          </div>
        </section>

        <section className="reliability">
          <div className="reliability-inner">
            <div>
              <h2>99.9%+ uptime for mission-critical coordination</h2>
              <p>
                YDYL is architected for high availability and resiliency across clouds and regions. No cold starts. No surprise
                downtime. Just predictable performance for the teams that rely on it.
              </p>
            </div>
            <div className="reliability-actions">
              <a className="btn primary" href="#contact">
                Schedule a walkthrough
              </a>
              <a className="btn ghost" href="/why-ydyl">
                Why YDYL
              </a>
            </div>
          </div>
        </section>

        <section className="chains">
          <div className="section-header">
            <h2>Built for complex, multi-region ecosystems</h2>
            <p>
              Model projects that span jurisdictions, asset classes, and delivery partners – while keeping a consistent data
              layer underneath.
            </p>
          </div>
          <div className="chains-footer">
            <a className="link" href="#contact">
              Discuss your ecosystem
            </a>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="cta-inner">
            <div>
              <h2>Discover the YDYL advantage</h2>
              <p>
                Stay ahead with a real-time coordination layer for the most ambitious projects in the world. Share a bit about
                your program and we’ll follow up with a tailored walkthrough.
              </p>
            </div>
            <form className="cta-form" method="post" action="#">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Work email" required />
              <input type="text" name="org" placeholder="Organization" />
              <textarea name="details" rows={3} placeholder="Tell us about your initiative" />
              <button type="submit" className="btn primary">
                Request a demo
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

