import "../globals.css";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">YDYL</div>
          <nav className="nav-links">
            <Link href="/developers">Developers</Link>
            <Link href="/api-reference">API Reference</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/status">Status</Link>
            <Link href="/panel">Panel</Link>
          </nav>
          <div className="nav-cta">
            <Link className="btn ghost" href="/">
              Home
            </Link>
            <Link className="btn primary" href="/api-reference">
              View APIs
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Developer documentation</h1>
            <p className="hero-subtitle">
              Learn how to connect to YDYL, authenticate requests, and query program and project data safely.
            </p>
          </div>
        </section>

        <section className="stack">
          <div className="stack-grid">
            <article className="stack-card">
              <h3>1. Concepts</h3>
              <p>Understand how YDYL models programs, projects, and assets.</p>
              <ul>
                <li>Programs, projects, assets, and counterparts</li>
                <li>Environments (sandbox, staging, production)</li>
                <li>Data freshness and consistency guarantees</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>2. Authentication</h3>
              <p>Issue and rotate API keys for each environment and team.</p>
              <ul>
                <li>Organization- and project-level keys</li>
                <li>Scopes and roles</li>
                <li>Rotation and revocation patterns</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>3. First request</h3>
              <p>Call the projects API and render a basic portfolio view.</p>
              <ul>
                <li>Fetch programs and projects</li>
                <li>Filter by geography, sector, or status</li>
                <li>Paginate large result sets</li>
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

