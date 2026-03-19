import "../globals.css";
import Link from "next/link";

export default function ApiReferencePage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">API reference</p>
        <h1>API reference by product</h1>
        <p>
          Choose a product to explore its endpoints, response models, and usage patterns. All APIs share the same auth and
          error model.
        </p>
      </div>

      <div className="api-product-grid">
        <Link href="/api-reference/program-graph" className="api-product-card">
          <div className="api-product-icon">⧉</div>
          <div>
            <h3>Program graph</h3>
            <p>Explore the query API that powers live relational views of programs, projects, and assets.</p>
          </div>
        </Link>
        <Link href="/api-reference/data-api" className="api-product-card">
          <div className="api-product-icon">&lt;/&gt;</div>
          <div>
            <h3>Data API</h3>
            <p>Discover REST endpoints for fetching normalized, policy-grade program, project, and asset data.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

