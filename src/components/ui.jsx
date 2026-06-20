import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import TradeIcon from './TradeIcon'
import Seal from './Seal'
import { ACCREDITATIONS } from '../data/site'

/* Reveal-on-scroll wrapper (respects prefers-reduced-motion via CSS). */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-in')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

/* Eyebrow + heading + lede lockup. */
export function SectionHeader({
  eyebrow,
  heading,
  lede,
  center = false,
  headingClass = 'h1',
  as: H = 'h2',
  className = '',
}) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <H className={headingClass}>{heading}</H>
      {lede && <p className="lede">{lede}</p>}
    </div>
  )
}

export function CharterDivider({ className = '' }) {
  return (
    <div className={`charter-divider ${className}`} aria-hidden="true">
      <span className="lozenge" />
    </div>
  )
}

/* Count-up statistic. Parses a leading number with optional prefix/suffix. */
export function StatCounter({ value, label }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(value)
  const m = String(value).match(/^(\D*)(\d[\d,]*)(.*)$/)
  const prefix = m ? m[1] : ''
  const target = m ? parseInt(m[2].replace(/,/g, ''), 10) : null
  const suffix = m ? m[3] : ''

  useEffect(() => {
    if (target == null) return
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(`${prefix}${target}${suffix}`)
      return
    }
    let raf
    const io = new IntersectionObserver(
      (entries, obs) => {
        if (!entries[0].isIntersecting) return
        obs.disconnect()
        const start = performance.now()
        const dur = 1200
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setShown(`${prefix}${Math.round(target * eased)}${suffix}`)
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [prefix, suffix, target])

  return (
    <div className="stat" ref={ref}>
      <div className="figure">{shown}</div>
      <div className="rule" />
      <div className="label">{label}</div>
    </div>
  )
}

/* A single trade "punch" in the assay panel. */
export function TradeHallmark({ trade, delay = 0 }) {
  return (
    <Reveal className="hallmark" delay={delay}>
      <span className={`punch ${trade.flagship ? 'flagship' : ''}`}>
        <TradeIcon name={trade.icon} size={30} />
      </span>
      <span className="label">{trade.name}</span>
    </Reveal>
  )
}

/* Embossed accreditation roundel. */
export function AccreditationRoundel({ label }) {
  return (
    <div className="accred-roundel" title={label}>
      <span className="accred-ring" aria-hidden="true" />
      <span className="accred-text">{label}</span>
    </div>
  )
}

export function Stars({ count = 5 }) {
  return (
    <div className="stars" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1z" />
        </svg>
      ))}
    </div>
  )
}

/* An elegant architectural placeholder "plate" — drop in real photography later
   by passing a `src`. */
export function Frame({ label, motif = 0, seal = false, ratio = '4 / 3', src, alt = '', className = '' }) {
  return (
    <figure className={`frame ${className}`}>
      <div className="frame-plate" style={{ aspectRatio: ratio }}>
        {src ? <img src={src} alt={alt} /> : <PlateArt motif={motif} />}
        {label && !src && <figcaption className="frame-tag meta">{label}</figcaption>}
      </div>
      {seal && (
        <span className="frame-seal" aria-hidden="true">
          <Seal variant="full" size={66} title="Completed" />
        </span>
      )}
    </figure>
  )
}

/* Project "register" card — framed plate + ledger metadata. */
export function ProjectCard({ title, category, location, year, motif = 0, body, delay = 0 }) {
  return (
    <Reveal className="project-card" delay={delay}>
      <Frame motif={motif} seal ratio="4 / 3" />
      <div style={{ marginTop: 28 }}>
        <span className="eyebrow eyebrow--plain" style={{ color: 'var(--gold)' }}>
          {category}
        </span>
        <h3 className="h3" style={{ marginTop: 8 }}>
          {title}
        </h3>
        <div className="project-meta">
          <span>{location}</span>
          <span className="dot" />
          <span>{year}</span>
        </div>
        {body && (
          <p style={{ marginTop: 14, color: 'var(--ink-muted)', maxWidth: '52ch' }}>{body}</p>
        )}
      </div>
    </Reveal>
  )
}

/* Signed endorsement card. */
export function EndorsementCard({ quote, attribution, delay = 0 }) {
  return (
    <Reveal className="endorsement certificate-frame" delay={delay}>
      <Stars />
      <p className="pullquote" style={{ marginTop: 14 }}>
        {quote}
      </p>
      <div className="quote-rule" />
      <p className="attribution">{attribution}</p>
      <span className="sign-seal">
        <Seal variant="compact" size={40} title="Endorsed" />
      </span>
    </Reveal>
  )
}

/* Service detail card. */
export function ServiceCard({ service, eyebrow, body, bullets, delay = 0 }) {
  return (
    <Reveal className="card card-hover" delay={delay}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
        <span className="punch" style={{ width: 54, height: 54 }}>
          <TradeIcon name={service.icon} size={28} />
        </span>
        <div>
          {eyebrow && (
            <span className="eyebrow eyebrow--plain" style={{ color: 'var(--gold)', fontSize: '0.72rem' }}>
              {eyebrow}
            </span>
          )}
          <h3 className="h3" style={{ marginTop: 4 }}>
            {service.title}
          </h3>
        </div>
      </div>
      {body.map((p, i) => (
        <p key={i} style={{ color: 'var(--ink-muted)', marginTop: i ? '0.9em' : 0 }}>
          {p}
        </p>
      ))}
      {bullets?.length > 0 && (
        <ul className="gold-list" style={{ marginTop: 18 }}>
          {bullets.map((b) => (
            <li key={b} style={{ color: 'var(--ink)', fontSize: 'var(--text-small)' }}>
              {b}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  )
}

/* Three-value assurance card. */
export function ValueCard({ icon, title, body, delay = 0 }) {
  return (
    <Reveal className="value-card" delay={delay}>
      <div className="vc-icon">
        <TradeIcon name={icon} size={34} strokeWidth={1.3} />
      </div>
      <h3 className="h3">{title}</h3>
      <p style={{ color: 'var(--ink-muted)', marginTop: 12 }}>{body}</p>
    </Reveal>
  )
}

/* Marks of Assurance strip. */
export function AccredStrip() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(18px, 4vw, 40px)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {ACCREDITATIONS.map((a, i) => (
        <Reveal key={a} delay={i * 60}>
          <AccreditationRoundel label={a} />
        </Reveal>
      ))}
    </div>
  )
}

/* A few hairline engravings rotated by `motif` so placeholders feel intentional. */
export function PlateArt({ motif = 0 }) {
  const motifs = [
    // Façade
    <g key="f">
      <path d="M40 150 V70 l60 -34 60 34 V150" />
      <path d="M30 150 H170" />
      <rect x="58" y="92" width="22" height="30" />
      <rect x="120" y="92" width="22" height="30" />
      <rect x="90" y="104" width="20" height="46" />
      <path d="M69 92 V122 M131 92 V122 M79 92 H58 M141 92 H120" />
      <path d="M100 36 V24" />
    </g>,
    // Pitched roof / truss
    <g key="r">
      <path d="M30 138 L100 60 L170 138 Z" />
      <path d="M22 138 H178" />
      <path d="M100 60 V138 M64 138 L100 96 M136 138 L100 96" />
      <path d="M82 117 H118" />
    </g>,
    // Arch / interior
    <g key="a">
      <path d="M50 150 V96 a50 50 0 0 1 100 0 V150" />
      <path d="M36 150 H164" />
      <path d="M68 150 V108 a32 32 0 0 1 64 0 V150" />
      <path d="M100 64 V52" />
    </g>,
    // Plan / drawing
    <g key="p">
      <rect x="44" y="48" width="112" height="104" />
      <path d="M44 100 H156 M100 48 V152" />
      <path d="M44 76 H72 M156 124 H128" />
      <circle cx="72" cy="124" r="9" />
    </g>,
  ]
  return (
    <svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      >
        {motifs[motif % motifs.length]}
      </g>
    </svg>
  )
}
