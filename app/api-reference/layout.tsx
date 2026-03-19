import "../globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function ApiReferenceLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <div className="logo">YDYL</div>
          <nav className="nav-links">
            <Link href="/developers">Developers</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/status">Status</Link>
          </nav>
          <div className="nav-cta">
            <Link className="btn ghost" href="/">
              Home
            </Link>
            <Link className="btn primary" href="/developers">
              Developer hub
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="stack">
          <div className="api-layout">
            <aside className="api-sidebar">
              <div className="api-sidebar-section">
                <div className="api-sidebar-section-title">API reference</div>
                <ul className="api-sidebar-list">
                  <li>
                    <Link href="/api-reference" className="api-sidebar-link">
                      Overview
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="api-sidebar-section">
                <div className="api-sidebar-section-title">Program graph</div>
                <ul className="api-sidebar-list">
                  <li>
                    <Link href="/api-reference/program-graph" className="api-sidebar-link">
                      API reference
                    </Link>
                  </li>
                  <li>
                    <Link href="/api-reference/program-graph/cli" className="api-sidebar-link">
                      CLI
                    </Link>
                  </li>
                  <li className="api-sidebar-dropdown">
                    <div className="api-sidebar-dropdown-toggle">
                      <Link href="/api-reference/program-graph/tags" className="api-sidebar-link">
                        Tags
                      </Link>
                      <span className="api-sidebar-dropdown-chevron">▾</span>
                    </div>
                    <ul className="api-sidebar-sublist">
                      <li>
                        <Link href="/api-reference/program-graph/tags/create" className="api-sidebar-link">
                          Create tag
                        </Link>
                      </li>
                      <li>
                        <Link href="/api-reference/program-graph/tags/delete" className="api-sidebar-link">
                          Delete tag
                        </Link>
                      </li>
                      <li>
                        <Link href="/api-reference/program-graph/tags/query" className="api-sidebar-link">
                          Query tag
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/api-reference/program-graph/subgraph" className="api-sidebar-link">
                      Subgraph
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="api-sidebar-section">
                <div className="api-sidebar-section-title">Data API</div>
                <ul className="api-sidebar-list">
                  <li>
                    <Link href="/api-reference/data-api" className="api-sidebar-link">
                      API reference
                    </Link>
                  </li>
                  <li>
                    <Link href="/api-reference/data-api/programs" className="api-sidebar-link">
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/api-reference/data-api/projects" className="api-sidebar-link">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/api-reference/data-api/assets" className="api-sidebar-link">
                      Assets
                    </Link>
                  </li>
                  <li>
                    <Link href="/api-reference/data-api/events" className="api-sidebar-link">
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            <div>{children}</div>
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

