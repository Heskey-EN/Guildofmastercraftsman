import { useId } from 'react'

/**
 * The Guild wax seal — a layered inline SVG.
 *  - variant="full": dimensional wax disc with gold engraved ring text + monogram.
 *    Used sparingly as an authored signature (hero, footer, sign-offs).
 *  - variant="compact": solid wax disc + monogram only, crisp at small sizes
 *    (header, inline glyphs).
 */
export default function Seal({
  variant = 'full',
  size = 200,
  animate = false,
  title = 'Guild of Master Craftsman',
  className = '',
  style,
}) {
  const uid = useId().replace(/:/g, '')
  const wax = `wax-${uid}`
  const gold = `gold-${uid}`
  const wobble = `wobble-${uid}`
  const soft = `soft-${uid}`
  const ringTop = `ringTop-${uid}`
  const ringBottom = `ringBottom-${uid}`

  const compact = variant === 'compact'

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={`${animate ? 'seal-animate ' : ''}${className}`}
      style={{ transform: 'rotate(-2deg)', overflow: 'visible', ...style }}
    >
      <title>{title}</title>
      <defs>
        <radialGradient id={wax} cx="38%" cy="34%" r="75%">
          <stop offset="0%" stopColor="var(--wax-light)" />
          <stop offset="55%" stopColor="var(--wax)" />
          <stop offset="100%" stopColor="var(--wax-deep)" />
        </radialGradient>
        <linearGradient id={gold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--gold)" />
          <stop offset="45%" stopColor="var(--gold-light)" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
        <filter id={wobble} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
        </filter>
        <filter id={soft} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>

        {/* Engraved ring text paths (radius 64, centred 100,100) */}
        <path id={ringTop} d="M36,100 A64,64 0 0,1 164,100" fill="none" />
        <path id={ringBottom} d="M36,100 A64,64 0 0,0 164,100" fill="none" />
      </defs>

      {/* (1) pressed-into-paper shadow */}
      <circle
        cx="103"
        cy="105"
        r="86"
        fill="var(--wax-deep)"
        opacity="0.4"
        filter={`url(#${soft})`}
      />

      {/* (2) wax body with poured-edge wobble */}
      <g filter={`url(#${wobble})`}>
        <circle cx="100" cy="100" r="86" fill={`url(#${wax})`} />
      </g>

      {/* (3) pressed rim + molten catch-light */}
      <circle cx="100" cy="100" r="80" fill="none" stroke="var(--wax-deep)" strokeWidth="5" opacity="0.8" />
      <path
        d="M48,66 A72,72 0 0,1 132,40"
        fill="none"
        stroke="var(--wax-light)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />

      {!compact && (
        <>
          {/* (4) gold engraved ring text */}
          <g
            fill={`url(#${gold})`}
            fontFamily='"Cormorant SC", serif'
            fontWeight="600"
            letterSpacing="2.4"
            style={{ textTransform: 'uppercase' }}
          >
            <text fontSize="13.5" textAnchor="middle">
              <textPath href={`#${ringTop}`} startOffset="50%">
                Guild of Master Craftsman
              </textPath>
            </text>
            <text fontSize="9.5" textAnchor="middle" letterSpacing="3">
              <textPath href={`#${ringBottom}`} startOffset="50%">
                · Every Trade · Every Stage ·
              </textPath>
            </text>
          </g>

          {/* (5) inner gold hairline ring */}
          <circle cx="100" cy="100" r="50" fill="none" stroke="var(--gold)" strokeWidth="0.9" opacity="0.85" />
          <circle cx="100" cy="100" r="46" fill="none" stroke="var(--gold)" strokeWidth="0.5" opacity="0.5" />
        </>
      )}

      {/* (6) central device — monogram in a heraldic lozenge */}
      <g fill="none" stroke={`url(#${gold})`} strokeWidth="1.2" opacity="0.9">
        <path d="M100,58 L138,100 L100,142 L62,100 Z" />
      </g>
      <text
        x="100"
        y={compact ? '118' : '116'}
        textAnchor="middle"
        fontFamily='"Cormorant Garamond", serif'
        fontWeight="700"
        fontSize={compact ? '58' : '44'}
        fill={`url(#${gold})`}
        style={{ letterSpacing: '1px' }}
      >
        GMC
      </text>
      {!compact && (
        <>
          <circle cx="100" cy="66" r="1.6" fill="var(--gold-light)" />
          <circle cx="100" cy="134" r="1.6" fill="var(--gold-light)" />
        </>
      )}
    </svg>
  )
}
