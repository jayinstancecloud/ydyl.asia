import "../../globals.css";

export default function ProgramGraphApiReferencePage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Program graph</p>
        <h1>Program graph API reference</h1>
      </div>

      <div style={{ maxWidth: 720, marginBottom: 32 }}>
        <h2>Introduction</h2>
        <p className="hero-subtitle">
          The Program graph API lets you query programs, projects, and assets as a connected graph. It is designed for
          real-time, high-throughput analytics across large portfolios without having to manage your own indexing
          infrastructure.
        </p>
      </div>

      <div>
        <h2>References</h2>
        <div className="api-product-grid">
          <article className="api-product-card">
            <div>
              <h3>CLI</h3>
              <p>
                Deploy and manage graph workspaces using the CLI, aligned with existing tooling for seamless setup and migration.
              </p>
            </div>
          </article>
          <article className="api-product-card">
            <div>
              <h3>Tags</h3>
              <p>
                Assign and manage tags to version graph definitions, enabling hot-swaps and safe rollbacks without changing
                client endpoints.
              </p>
            </div>
          </article>
          <article className="api-product-card">
            <div>
              <h3>Subgraph</h3>
              <p>
                Define and manage subgraphs that expose focused slices of the overall data model for specific teams or workflows.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

