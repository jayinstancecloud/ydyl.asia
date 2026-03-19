import "../../../globals.css";

export default function ProgramGraphCliPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Program graph</p>
        <h1>CLI reference</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <h2>CLI reference</h2>
        <p className="hero-subtitle">
          Commands for the YDYL Program graph CLI, including their purposes, use cases, and examples.
        </p>

        <h3>Initialize a workspace</h3>
        <pre>
          <code>ydyl-graph init</code>
        </pre>
        <h4>Purpose</h4>
        <p>
          Creates a new Program graph workspace using an example template or an existing project model. It sets up the folder
          structure, configuration files such as <code>graph.yaml</code>, and starter mappings.
        </p>
        <h4>Use case</h4>
        <ul>
          <li>Use this command when starting a new Program graph project for a portfolio or program.</li>
          <li>Specify a source system or schema to scaffold a workspace tailored to a specific data model.</li>
        </ul>
        <h4>Example</h4>
        <pre>
          <code>ydyl-graph init --from-schema portfolio.graphql --env sandbox</code>
        </pre>

        <h3>Generate types from schemas</h3>
        <pre>
          <code>ydyl-graph codegen</code>
        </pre>
        <h4>Purpose</h4>
        <p>Generates strongly typed models from your graph schema and source definitions.</p>
        <h4>Use case</h4>
        <ul>
          <li>Run after changing <code>schema.graphql</code> or adding/updating source definitions.</li>
          <li>Creates type-safe classes for interacting with graph data in your resolvers or mappings.</li>
        </ul>

        <h3>Build your graph</h3>
        <pre>
          <code>ydyl-graph build</code>
        </pre>
        <h4>Purpose</h4>
        <p>Compiles the graph workspace to an optimized bundle, preparing it for deployment to YDYL.</p>
        <h4>Use case</h4>
        <ul>
          <li>Run after completing mappings and configuration.</li>
          <li>Ensures the graph is ready for deployment in the format required by the YDYL runtime.</li>
        </ul>

        <h3>Deploy your graph</h3>
        <pre>
          <code>ydyl-graph deploy</code>
        </pre>
        <h4>Purpose</h4>
        <p>Deploys the compiled graph to the YDYL Program graph service.</p>
        <h4>Use case</h4>
        <ul>
          <li>Run after building your graph to upload and activate it.</li>
          <li>Specify the deployment target (sandbox, staging, or production) and the graph name.</li>
        </ul>
        <h4>Example</h4>
        <pre>
          <code>
            {`ydyl-graph deploy <your_graph> --env production \n  --endpoint https://graph.ydyl.global \n  --deploy-key <your_api_key>`}
          </code>
        </pre>

        <h3>Run the graph locally</h3>
        <pre>
          <code>ydyl-graph dev</code>
        </pre>
        <h4>Purpose</h4>
        <p>Runs a local development environment to test the graph with simulated or mirrored data.</p>
        <h4>Use case</h4>
        <ul>
          <li>Use while developing and testing your graph locally.</li>
          <li>Simulate events and validate mappings without deploying to a live YDYL environment.</li>
        </ul>

        <h3>Execute unit tests</h3>
        <pre>
          <code>ydyl-graph test</code>
        </pre>
        <h4>Purpose</h4>
        <p>Runs the YDYL testing harness to execute unit tests for a graph workspace.</p>
        <h4>Use case</h4>
        <ul>
          <li>Write and run unit tests for mappings and resolvers to ensure your graph logic works correctly.</li>
        </ul>

        <h3>Add new data source</h3>
        <pre>
          <code>ydyl-graph add-source</code>
        </pre>
        <h4>Purpose</h4>
        <p>
          Adds a new data source to your graph manifest (<code>graph.yaml</code>) and updates related files such as{" "}
          <code>schema.graphql</code> and mappings.
        </p>
        <h4>Use case</h4>
        <ul>
          <li>Use when adding additional upstream systems or data sources to your graph.</li>
          <li>Automates updates to configuration and related files.</li>
        </ul>
        <h4>Example</h4>
        <pre>
          <code>ydyl-graph add-source projects --from-endpoint https://api.internal/portfolio</code>
        </pre>

        <p className="hero-subtitle" style={{ marginTop: 16 }}>
          Ensure you have the latest version of the CLI installed to avoid issues with deprecated or updated commands.
        </p>
      </section>
    </div>
  );
}

