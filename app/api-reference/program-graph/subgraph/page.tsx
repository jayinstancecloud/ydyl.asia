import "../../../globals.css";

export default function ProgramGraphSubgraphPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Program graph</p>
        <h1>Remove subgraph</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Use this endpoint to remove a deployed Program graph subgraph from YDYL. Removing a subgraph does not delete
          underlying data sources; it only tears down the deployment and stops serving queries for that subgraph.
        </p>

        <h2>Endpoint</h2>
        <pre>
          <code>POST /v1/program-graph/subgraphs/remove</code>
        </pre>

        <h2>Request body</h2>
        <pre>
          <code>
            {`{
  "name": "national-transport-mainnet",
  "version": "2026.03.19-1"
}`}
          </code>
        </pre>

        <ul>
          <li>
            <code>name</code> – logical name of the subgraph to remove.
          </li>
          <li>
            <code>version</code> – specific version identifier to remove. Required to avoid accidentally removing the wrong
            deployment.
          </li>
        </ul>

        <h2>Response</h2>
        <pre>
          <code>
            {`{
  "code": 200,
  "msg": "subgraph removed",
  "data": {
    "name": "national-transport-mainnet",
    "version": "2026.03.19-1"
  }
}`}
          </code>
        </pre>

        <h2>Typical flow</h2>
        <ul>
          <li>List active deployments for a program.</li>
          <li>Confirm the subgraph <code>name</code> and <code>version</code> you want to retire.</li>
          <li>Call <code>/v1/program-graph/subgraphs/remove</code> and monitor status from the YDYL status page.</li>
        </ul>
      </section>
    </div>
  );
}

