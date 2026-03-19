import "../globals.css";
import Link from "next/link";

export default function ChangelogPage() {
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">YDYL</div>
          <nav className="nav-links">
            <Link href="/developers">Developers</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/api-reference">API Reference</Link>
            <Link href="/status">Status</Link>
            <Link href="/panel">Panel</Link>
          </nav>
          <div className="nav-cta">
            <Link className="btn ghost" href="/">
              Home
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Changelog</h1>
            <p className="hero-subtitle">
              A running log of platform and API changes so you always know what shipped and what is coming next.
            </p>
          </div>
        </section>

        <section className="stack">
          <div className="stack-grid">
            <article className="stack-card">
              <h3>2026-03-19</h3>
              <p>Introduced YDYL public developer hub and initial APIs.</p>
              <ul>
                <li>Launched /v1/programs, /v1/projects, /v1/assets endpoints</li>
                <li>Added environment-scoped API keys</li>
                <li>Published status page and uptime SLAs</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>Upcoming</h3>
              <p>Planned improvements and deprecations.</p>
              <ul>
                <li>Streaming subscriptions for real-time milestone updates</li>
                <li>Expanded filters for ESG and impact reporting</li>
                <li>Versioned schemas with migration guides</li>
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

