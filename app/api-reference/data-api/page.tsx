import "../../globals.css";

export default function DataApiReferencePage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Data API</p>
        <h1>Data API reference</h1>
        <p>
          The YDYL Data API gives you instant access to structured program, project, asset, and activity data – both
          real-time and historical – through a single, high‑throughput endpoint. Use it to power dashboards, reporting
          tools, and decision support systems without running your own data pipelines.
        </p>
      </div>

      <section className="stack">
        <div className="section-header">
          <h2>Domains</h2>
          <p>Explore the main data domains exposed by the API.</p>
        </div>

        <div className="api-product-grid">
          <div className="api-product-card">
            <div className="api-product-icon">▢</div>
            <div>
              <h3>Programs</h3>
              <p>Portfolio‑level views of initiatives, including objectives, funding envelopes, and headline KPIs.</p>
            </div>
          </div>

          <div className="api-product-card">
            <div className="api-product-icon">▤</div>
            <div>
              <h3>Projects</h3>
              <p>
                Detailed project records with status, milestones, risks, and linkages back to their parent programs and assets.
              </p>
            </div>
          </div>

          <div className="api-product-card">
            <div className="api-product-icon">⛓</div>
            <div>
              <h3>Assets</h3>
              <p>Physical and digital assets such as corridors, plants, and facilities, with topology and health signals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stack">
        <div className="section-header">
          <h2>Activity and finance</h2>
          <p>Endpoints focused on what is happening in and around your programs over time.</p>
        </div>

        <div className="api-product-grid">
          <div className="api-product-card">
            <div className="api-product-icon">◎</div>
            <div>
              <h3>Events</h3>
              <p>
                Time‑ordered events describing changes in state – approvals, alerts, progress updates, and operational signals.
              </p>
            </div>
          </div>

          <div className="api-product-card">
            <div className="api-product-icon">$</div>
            <div>
              <h3>Allocations</h3>
              <p>
                Funding allocations and disbursements across programs and projects, suitable for budget tracking and audit
                trails.
              </p>
            </div>
          </div>

          <div className="api-product-card">
            <div className="api-product-icon">⇄</div>
            <div>
              <h3>Transactions</h3>
              <p>
                Fine‑grained transactional records for integrations with financial systems or downstream analytics warehouses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

