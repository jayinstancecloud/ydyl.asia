import "../globals.css";

export default function FaqPage() {
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
        <section className="faq">
          <div className="faq-grid">
            <article className="faq-item">
              <h3>What is YDYL?</h3>
              <p>
                YDYL is a digital infrastructure layer for large-scale, cross-border development initiatives. It unifies data,
                workflows, and governance into a single platform so programs can operate in real time.
              </p>
            </article>
            <article className="faq-item">
              <h3>Who is YDYL for?</h3>
              <p>
                We work with government agencies, multilateral institutions, infrastructure operators, and funds managing complex
                portfolios that span multiple jurisdictions.
              </p>
            </article>
            <article className="faq-item">
              <h3>Can YDYL integrate with our existing systems?</h3>
              <p>
                Yes. YDYL is designed to ingest data from existing project management tools, financial systems, and on-the-ground
                reporting so you can maintain current workflows while upgrading the coordination layer.
              </p>
            </article>
            <article className="faq-item">
              <h3>How long does it take to get started?</h3>
              <p>
                Typical pilots go live in weeks, not months. We start with a focused portfolio slice, then expand once the core
                data model and governance patterns are established.
              </p>
            </article>
            <article className="faq-item">
              <h3>Do you offer dedicated environments?</h3>
              <p>
                Yes. For high-sensitivity programs, we provide dedicated, regionally scoped environments with tailored compliance
                and security controls.
              </p>
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

