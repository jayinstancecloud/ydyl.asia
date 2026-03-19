import "../../../../globals.css";

export default function ProgramGraphQueryTagPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Program graph / Tags</p>
        <h1>Query tag</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Resolve a tag to the graph configuration it currently points to. This is the primary way clients discover which graph
          to use for a given label.
        </p>

        <h3>Endpoint</h3>
        <pre>
          <code>POST /v1/program-graph/tags.query</code>
        </pre>

        <h3>Request body</h3>
        <pre>
          <code>
            {`{
  "name": "production"
}`}
          </code>
        </pre>

        <h3>Response</h3>
        <pre>
          <code>
            {`{
  "name": "production",
  "graphId": "graph_123",
  "updatedAt": "2026-03-19T12:00:00Z"
}`}
          </code>
        </pre>

        <h3>Use cases</h3>
        <ul>
          <li>Have frontends or services resolve <code>production</code> to the active graph at runtime.</li>
          <li>Support instant rollbacks by moving the tag to a previous graph without redeploying clients.</li>
        </ul>
      </section>
    </div>
  );
}

