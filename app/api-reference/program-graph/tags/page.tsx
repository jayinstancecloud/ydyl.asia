import "../../../globals.css";

export default function ProgramGraphTagsPage() {
  return (
    <div>
      <div className="api-main-header">
        <p className="api-breadcrumb">Program graph</p>
        <h1>Tags API overview</h1>
      </div>

      <div style={{ maxWidth: 720 }}>
        <p className="hero-subtitle">
          Tags let you label and version Program graph configurations so that you can safely roll out changes, roll back to
          previous snapshots, and target specific views from client applications.
        </p>
      </div>
    </div>
  );
}

