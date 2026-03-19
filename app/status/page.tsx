import "../globals.css";
import Link from "next/link";

export default function StatusPage() {
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">YDYL</div>
          <nav className="nav-links">
            <Link href="/developers">Developers</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/api-reference">API Reference</Link>
            <Link href="/changelog">Changelog</Link>
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
            <h1>Platform status</h1>
            <p className="hero-subtitle">
              High-level health of the YDYL platform, including API uptime and regional data pipelines.
            </p>
          </div>
        </section>

        <section className="metrics">
          <div className="section-header">
            <h2>Current status</h2>
            <p>All systems are operational. Historical uptime is shown for the last 90 days.</p>
          </div>

          <div className="status-group">
            <div className="status-group-header">
              <div className="status-group-title">Data infrastructure</div>
              <div className="status-group-uptime">100.0% uptime</div>
            </div>

            <div className="status-service">
              <div className="status-service-header">
                <div className="status-service-name">
                  <span className="status-dot" />
                  <span>Graph layer</span>
                </div>
                <div className="status-service-uptime">100.0% uptime</div>
              </div>
              <div className="status-bars">
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="status-bar" />
                ))}
              </div>
              <div className="status-meta">&lt; 90 days ago • Today</div>
            </div>

            <div className="status-service">
              <div className="status-service-header">
                <div className="status-service-name">
                  <span className="status-dot" />
                  <span>Data API</span>
                </div>
                <div className="status-service-uptime">100.0% uptime</div>
              </div>
              <div className="status-bars">
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="status-bar" />
                ))}
              </div>
              <div className="status-meta">&lt; 90 days ago • Today</div>
            </div>
          </div>

          <div className="status-group">
            <div className="status-group-header">
              <div className="status-group-title">Web properties</div>
              <div className="status-group-uptime">100.0% uptime</div>
            </div>

            <div className="status-service">
              <div className="status-service-header">
                <div className="status-service-name">
                  <span className="status-dot" />
                  <span>Web app</span>
                </div>
                <div className="status-service-uptime">100.0% uptime</div>
              </div>
              <div className="status-bars">
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="status-bar" />
                ))}
              </div>
              <div className="status-meta">&lt; 90 days ago • Today</div>
            </div>

            <div className="status-service">
              <div className="status-service-header">
                <div className="status-service-name">
                  <span className="status-dot" />
                  <span>Landing page</span>
                </div>
                <div className="status-service-uptime">100.0% uptime</div>
              </div>
              <div className="status-bars">
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="status-bar" />
                ))}
              </div>
              <div className="status-meta">&lt; 90 days ago • Today</div>
            </div>

            <div className="status-service">
              <div className="status-service-header">
                <div className="status-service-name">
                  <span className="status-dot" />
                  <span>Docs</span>
                </div>
                <div className="status-service-uptime">100.0% uptime</div>
              </div>
              <div className="status-bars">
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="status-bar" />
                ))}
              </div>
              <div className="status-meta">&lt; 90 days ago • Today</div>
            </div>
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

