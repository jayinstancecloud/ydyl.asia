import "../../../../globals.css";

export default function ProgramGraphDeleteTagPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Program graph / Tags</p>
        <h1>Delete tag</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Remove a tag that is no longer needed. Deleting a tag never deletes the underlying graph, only the label that points
          to it.
        </p>

        <h3>Endpoint</h3>
        <pre>
          <code>POST /v1/program-graph/tags.delete</code>
        </pre>

        <h3>Request body</h3>
        <pre>
          <code>
            {`{
  "name": "staging"
}`}
          </code>
        </pre>

        <h3>Use cases</h3>
        <ul>
          <li>Clean up temporary tags created for migrations or canary rollouts.</li>
          <li>Ensure that clients cannot accidentally target deprecated configurations.</li>
        </ul>
      </section>
    </div>
  );
}

