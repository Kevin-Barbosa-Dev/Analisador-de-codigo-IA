import "../style/Skeleton.css";

export default function Skeleton() {
  return (
    <div className="pr-card skeleton">
      <div className="pr-card-header">
        <div className="pr-info">
          <span className="pr-id skeleton-line id" />
          <div>
            <div className="pr-title skeleton-line title" />
            <div className="pr-meta skeleton-line meta" />
          </div>
        </div>

        <div className="pr-status">
          <div className="status-icon skeleton-circle" />
          <div className="arrow skeleton-circle" />
        </div>
      </div>
    </div>
  );
}
