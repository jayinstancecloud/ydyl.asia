import "../globals.css";
import Link from "next/link";

export default function DevelopersPage() {
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">YDYL</div>
          <nav className="nav-links">
            <Link href="/docs">Docs</Link>
            <Link href="/api-reference">API Reference</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/status">Status</Link>
            <Link href="/panel">Panel</Link>
          </nav>
          <div className="nav-cta">
            <Link className="btn ghost" href="/">
              Home
            </Link>
            <Link className="btn primary" href="/docs">
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Build on the YDYL data layer</h1>
            <p className="hero-subtitle">
              Access normalized, real-time infrastructure and program data via stable APIs and a developer experience designed
              for high-trust environments.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/docs">
                Read the docs
              </Link>
              <Link className="btn secondary" href="/api-reference">
                Explore API reference
              </Link>
            </div>
            <div className="hero-badges">
              <span>REST + streaming endpoints</span>
              <span>Environment-scoped API keys</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <h2>For engineers building</h2>
              <ul>
                <li>Portfolio intelligence and monitoring tools</li>
                <li>Reporting and compliance workflows</li>
                <li>AI copilots for program teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stack">
          <div className="section-header">
            <h2>Everything you need to ship with confidence</h2>
            <p>
              Clear authentication, predictable schemas, and a stable changelog so you can plug YDYL into existing systems
              without surprises.
            </p>
          </div>
          <div className="stack-grid">
            <article className="stack-card">
              <h3>Documentation</h3>
              <p>Conceptual guides and quickstarts for getting data flowing into your environments in minutes.</p>
              <ul>
                <li>Quickstart by role and stack</li>
                <li>Environment and tenant model</li>
                <li>Data domains and schemas</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>API reference</h3>
              <p>Precise, copy-pasteable examples for every endpoint in the platform.</p>
              <ul>
                <li>Typed request / response models</li>
                <li>Filtering and pagination patterns</li>
                <li>Error codes and retry behavior</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>Operational visibility</h3>
              <p>Understand platform health and the impact of changes at a glance.</p>
              <ul>
                <li>Public status dashboard</li>
                <li>Versioned changelog</li>
                <li>Deprecation timelines</li>
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

