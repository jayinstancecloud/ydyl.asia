import "../globals.css";

export default function WhyYDYLPage() {
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
          <div className="section-header">
            <h2>Why YDYL</h2>
            <p>
              YDYL provides a unified digital infrastructure layer for cross-border initiatives, giving every stakeholder a
              real-time, trusted view of project reality.
            </p>
          </div>

          <div className="stack-grid">
            <article className="stack-card">
              <h3>Real-time visibility</h3>
              <p>
                Replace static quarterly reports with live dashboards that surface financial, operational, and risk data across
                programs and regions.
              </p>
              <ul>
                <li>Program, project, and asset-level telemetry in one place</li>
                <li>Drill-down from portfolio overviews to field-level activity</li>
                <li>Single source of truth for all stakeholders</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>Governance built in</h3>
              <p>
                Model responsibility, approvals, and workflows so that every decision is traceable and aligned to your governance
                framework.
              </p>
              <ul>
                <li>Configurable approval chains and decision logs</li>
                <li>Role-based access for ministries, operators, and financiers</li>
                <li>Policy guardrails encoded directly into workflows</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>Designed for complexity</h3>
              <p>
                Handle multi-country, multi-agency portfolios with a single data layer that respects local constraints and global
                coordination needs.
              </p>
              <ul>
                <li>Support for multi-region data residency requirements</li>
                <li>Flexible modeling for different program structures</li>
                <li>APIs that integrate with existing planning and finance tools</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="stack">
          <div className="section-header">
            <h2>How YDYL fits into your stack</h2>
            <p>
              YDYL sits between your on-the-ground delivery systems and decision-makers, aggregating data, enforcing governance,
              and exposing clean APIs to the tools your teams already use.
            </p>
          </div>

          <div className="stack-grid">
            <article className="stack-card">
              <h3>For program owners</h3>
              <p>
                Get a continuous read on delivery risk, budget utilization, and milestone progress across every program you
                oversee.
              </p>
              <ul>
                <li>Portfolio-level KPIs updated in real time</li>
                <li>Scenario views for regions, sectors, and funding sources</li>
                <li>Automated alerts when projects drift off plan</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>For delivery partners</h3>
              <p>
                Submit updates once and have them flow automatically to funders, regulators, and coordinating bodies without
                additional reporting overhead.
              </p>
              <ul>
                <li>Simple, structured data capture for field teams</li>
                <li>Shared view of requirements, milestones, and documents</li>
                <li>Reduced email and spreadsheet churn across organizations</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>For data and policy teams</h3>
              <p>
                Define metrics, thresholds, and policies once, then rely on YDYL to enforce them consistently across regions and
                programs.
              </p>
              <ul>
                <li>Reusable metric libraries for different program types</li>
                <li>APIs for feeding BI tools and policy models</li>
                <li>Audit-ready logs for every decision and change</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>For finance and funders</h3>
              <p>
                Connect disbursements, milestones, and impact in a single view so capital can be deployed and reallocated with
                confidence.
              </p>
              <ul>
                <li>Link financial flows to live delivery data</li>
                <li>Standardized reporting across diverse implementers</li>
                <li>Evidence to support future funding rounds</li>
              </ul>
            </article>
            <article className="stack-card">
              <h3>For technology teams</h3>
              <p>
                Use YDYL as a stable integration layer instead of building and maintaining dozens of custom connections between
                systems.
              </p>
              <ul>
                <li>Well-documented APIs and data contracts</li>
                <li>Configurable connectors to legacy and modern systems</li>
                <li>Centralized governance around access and data quality</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="cta">
          <div className="cta-inner">
            <div>
              <h2>See YDYL in action</h2>
              <p>
                Share a bit about your initiative and we&apos;ll walk you through how YDYL can unlock faster, better-coordinated
                delivery.
              </p>
            </div>
            <form className="cta-form" method="post" action="#">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Work email" required />
              <input type="text" name="org" placeholder="Organization" />
              <textarea name="details" rows={3} placeholder="Tell us about your initiative" />
              <button type="submit" className="btn primary">
                Request a walkthrough
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

