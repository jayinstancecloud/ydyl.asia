import "../../../../globals.css";

export default function ProgramGraphCreateTagPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Program graph / Tags</p>
        <h1>Create tag</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Create a new tag that points to a specific Program graph configuration or deployment. Tags give teams a stable handle
          they can target from clients and automation.
        </p>

        <h3>Endpoint</h3>
        <pre>
          <code>POST /v1/program-graph/tags</code>
        </pre>

        <h3>Request body</h3>
        <pre>
          <code>
            {`{
  "name": "production",
  "graphId": "graph_123",
  "description": "Primary production view for national transport program"
}`}
          </code>
        </pre>

        <h3>Use cases</h3>
        <ul>
          <li>Pin a human-readable label like <code>production</code> or <code>pilot</code> to a specific graph.</li>
          <li>Allow clients to follow tags instead of hard-coding graph IDs.</li>
        </ul>
      </section>
    </div>
  );
}

