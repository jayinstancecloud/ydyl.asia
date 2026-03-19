import "../globals.css";

export default function SolutionsPage() {
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
            <a href="/faq">FAQ</a>
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
          <div className="section-header">
            <h2>The complete digital stack for real-time coordination</h2>
            <p>
              YDYL connects project, financial, and policy data into a single, queryable layer so teams can coordinate large
              cross-border initiatives in real time.
            </p>
          </div>

          <div className="stack-grid">
            <article className="stack-card">
              <h3>Project Graph</h3>
              <p>
                Model complex portfolios as an interconnected graph of assets, contracts, timelines, and dependencies – always
                current, always queryable.
              </p>
              <ul>
                <li>Live dependency and risk views</li>
                <li>Timeline and milestone tracking</li>
                <li>Multi-party data ownership</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>Data API</h3>
              <p>
                Access normalized, policy-grade data for projects, funding, and outcomes through a single secure API, ready to
                power internal tools, analytics, and AI agents.
              </p>
              <ul>
                <li>Unified data schema across regions</li>
                <li>Real-time and historical access</li>
                <li>High-throughput queries without throttling</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>Governance Workspace</h3>
              <p>
                Coordinate decisions between ministries, operators, and partners with traceable workflows tied directly to the
                underlying data.
              </p>
              <ul>
                <li>Configurable approval flows</li>
                <li>Scenario planning and impact views</li>
                <li>Audit-ready decision history</li>
              </ul>
            </article>
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

