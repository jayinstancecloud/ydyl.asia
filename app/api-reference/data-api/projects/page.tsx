import "../../../globals.css";

export default function DataApiProjectsPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Data API</p>
        <h1>Projects</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Project endpoints expose detailed information about individual investments and workstreams, including progress,
          risks, and relationships to programs and assets.
        </p>

        <h3>GET /v1/data/projects</h3>
        <p>List projects across one or more programs.</p>
        <ul>
          <li>
            Filter by <code>programId</code>, <code>status</code>, or <code>country</code>.
          </li>
          <li>Use for portfolio overviews and project registers.</li>
        </ul>

        <h3>GET /v1/data/projects/{`{projectId}`}</h3>
        <p>Retrieve a specific project with milestones, risk flags, and linked assets.</p>
      </section>
    </div>
  );
}

