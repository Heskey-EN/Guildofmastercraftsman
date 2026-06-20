/* Fine engraved-style line icons, one per trade. 24x24, currentColor stroke. */

const ICONS = {
  extension: (
    <>
      <path d="M2 21V10l6-4 6 4v11" />
      <path d="M1 21h22" />
      <path d="M14 21v-8h7v8" />
      <path d="M17.5 13v-3" />
    </>
  ),
  loft: (
    <>
      <path d="M2 12 12 4l10 8" />
      <path d="M5 11v9h14v-9" />
      <path d="M9.5 20v-5h5v5" />
      <path d="M14.5 8 12 6 9.5 8" />
    </>
  ),
  renovation: (
    <>
      <path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z" />
      <path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </>
  ),
  newbuild: (
    <>
      <path d="M6 21V4l8 2v15" />
      <path d="M14 8h5v13" />
      <path d="M9 4V2l3 1.2" />
      <path d="M3 21h18" />
      <path d="M9 9v0M9 13v0M9 17v0" />
    </>
  ),
  structural: (
    <>
      <path d="M5 4h4M15 4h4M5 20h4M15 20h4" />
      <path d="M7 4v16M17 4v16" />
      <path d="M9 12h6" />
    </>
  ),
  brickwork: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 12h18" />
      <path d="M9 5v3.5M15 5v3.5M12 8.5v3.5M6 8.5v3.5M18 8.5v3.5" />
      <path d="M9 12v3.5M15 12v3.5M12 15.5V19M6 15.5V19M18 15.5V19" />
    </>
  ),
  roofing: (
    <>
      <path d="M2 18 12 6l10 12z" />
      <path d="M2 18h20" />
      <path d="M12 6v12M7.5 18 12 11.5M16.5 18 12 11.5" />
    </>
  ),
  carpentry: (
    <>
      <path d="M5 3v16h16" />
      <path d="M5 9h6v6" />
      <path d="M11 3v4M15 3v4M19 3v4" />
    </>
  ),
  plastering: (
    <>
      <rect x="2" y="9" width="15" height="5" rx="1" />
      <path d="M9.5 9V7a2 2 0 0 1 2-2h2.5" />
      <path d="M19 5h2" />
    </>
  ),
  kitchen: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <circle cx="9" cy="9" r="2" />
      <circle cx="15" cy="9" r="2" />
      <circle cx="9" cy="15" r="2" />
      <circle cx="15" cy="15" r="2" />
    </>
  ),
  bathroom: (
    <>
      <path d="M3 12h18v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
      <path d="M6 12V7a2 2 0 0 1 4 0" />
      <path d="M6 18l-1 3M18 18l1 3" />
      <path d="M9 7h2" />
    </>
  ),
  electrics: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  plumbing: (
    <>
      <path d="M6 3v7a4 4 0 0 0 4 4 4 4 0 0 1 4 4v3" />
      <path d="M4 3h4M16 21h4" />
    </>
  ),
  tiling: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </>
  ),
  decorating: (
    <>
      <rect x="3" y="4" width="13" height="6" rx="1" />
      <path d="M16 7h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7" />
      <path d="M11 12v3H8.5v6" />
    </>
  ),
  flooring: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="1" />
      <path d="M3 12h18" />
      <path d="M9 6v6M15 6v6M6 12v6M12 12v6M18 12v6" />
    </>
  ),
  landscaping: (
    <>
      <path d="M12 22v-7" />
      <path d="M8 15a4 4 0 1 1 8 0z" />
      <path d="M9.2 11.2a3 3 0 1 1 5.6 0" />
      <path d="M10.4 8a2.4 2.4 0 1 1 3.2 0" />
    </>
  ),
  heritage: (
    <>
      <path d="M4 4h16" />
      <path d="M5 7h14" />
      <path d="M8 7v10M16 7v10M12 7v10" />
      <path d="M6 17h12" />
      <path d="M4 20h16" />
    </>
  ),
}

export default function TradeIcon({ name, size = 28, className = '', strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.extension}
    </svg>
  )
}
