import "../../../globals.css";

export default function DataApiAssetsPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Data API</p>
        <h1>Assets</h1>
      </div>

      <section style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Asset endpoints describe the physical and digital infrastructure that projects build or upgrade – corridors, ports,
          grids, facilities, and more – with their locations and operational state.
        </p>

        <h3>GET /v1/data/assets</h3>
        <p>Search assets across your portfolio.</p>
        <ul>
          <li>
            Filter by <code>type</code> (e.g., corridor, plant), <code>region</code>, or <code>status</code>.
          </li>
          <li>Use for network maps and asset inventories.</li>
        </ul>

        <h3>GET /v1/data/assets/{`{assetId}`}</h3>
        <p>Return a single asset with topology, linked projects, and selected health indicators.</p>
      </section>
    </div>
  );
}

