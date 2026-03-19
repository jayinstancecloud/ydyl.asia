import "../../../globals.css";

export default function DataApiEventsPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Data API</p>
        <h1>Events</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Event endpoints surface time‑ordered signals about your portfolio: approvals, alerts, progress updates, incident
          reports, and other changes in state that matter to operators and decision‑makers.
        </p>

        <h3>GET /v1/data/events</h3>
        <p>Stream or page through events across programs, projects, and assets.</p>
        <ul>
          <li>
            Filter by <code>programId</code>, <code>projectId</code>, <code>assetId</code>, or <code>type</code>.
          </li>
          <li>Use for activity feeds, notifications, and audit views.</li>
        </ul>

        <h3>GET /v1/data/events/{`{eventId}`}</h3>
        <p>Fetch a single event with its payload and relationships.</p>
      </section>
    </div>
  );
}

