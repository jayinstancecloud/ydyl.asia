import "../../../globals.css";

export default function DataApiProgramsPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Data API</p>
        <h1>Programs</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Program endpoints let you fetch portfolio‑level objects that group projects, funding, and outcomes under a single
          umbrella. Use these APIs to build portfolio dashboards and steering reports.
        </p>

        <h3>GET /v1/data/programs</h3>
        <p>List programs visible to your organization.</p>
        <ul>
          <li>
            Filter by <code>region</code>, <code>sector</code>, or <code>status</code>.
          </li>
          <li>
            Paginate with <code>limit</code> and <code>cursor</code>.
          </li>
        </ul>

        <h3>GET /v1/data/programs/{`{programId}`}</h3>
        <p>Fetch a single program with its headline KPIs and configuration.</p>
      </section>
    </div>
  );
}

