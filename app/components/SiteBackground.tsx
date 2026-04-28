export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <svg
        className="site-background-svg"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            height="36"
            id="site-grid-pattern"
            patternUnits="userSpaceOnUse"
            width="36"
            x="0"
            y="0"
          >
            <rect className="site-grid-cell" height="36" width="36" x="0" y="0" />
            <rect className="site-grid-line-horizontal" height="1.2" width="36" x="0" y="0" />
            <rect className="site-grid-line-vertical" height="36" width="1.2" x="0" y="0" />
          </pattern>
        </defs>

        <rect fill="url(#site-grid-pattern)" height="100%" width="100%" x="0" y="0" />
      </svg>
    </div>
  );
}
