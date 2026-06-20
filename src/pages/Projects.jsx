import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import { Reveal, SectionHeader, CharterDivider, ProjectCard } from '../components/ui'
import OxbloodCTA from '../components/OxbloodCTA'
import { PROJECTS } from '../data/site'

const FILTERS = [
  { label: 'All', keys: null },
  { label: 'Extensions', keys: ['extension'] },
  { label: 'Conversions', keys: ['conversion'] },
  { label: 'Renovations', keys: ['renovation', 'refurbish'] },
  { label: 'New Builds', keys: ['new build', 'new-build'] },
  { label: 'Kitchens', keys: ['kitchen'] },
  { label: 'Roofing', keys: ['roof'] },
  { label: 'Heritage', keys: ['heritage', 'restoration', 'barn', 'listed', 'georgian'] },
]

export default function Projects() {
  const [active, setActive] = useState('All')

  const shown = useMemo(() => {
    const f = FILTERS.find((x) => x.label === active)
    if (!f || !f.keys) return PROJECTS
    return PROJECTS.filter((p) => {
      const hay = `${p.title} ${p.category} ${p.body}`.toLowerCase()
      return f.keys.some((k) => hay.includes(k))
    })
  }, [active])

  return (
    <>
      <Seo
        title="Our Projects | Guild of Master Craftsman"
        description="Explore a portfolio of work: extensions, conversions, refurbishments, heritage restoration, bespoke kitchens and new-build homes, delivered to an exacting standard across the UK."
      />

      {/* ---- Hero ---- */}
      <section className="page-hero">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">The Register · Commissions sealed</span>
            <h1 className="display" style={{ marginTop: 16 }}>
              A documented record of work done right.
            </h1>
            <p className="lede" style={{ margin: '22px auto 0' }}>
              Every project carries the same hallmark: the right qualified professional for each stage, from the
              first footing to the final coat. A representative selection of recent commissions — locations and
              dates shown as placeholders pending the client's own records.
            </p>
          </Reveal>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 24px',
              justifyContent: 'center',
              marginTop: 32,
            }}
          >
            {FILTERS.map((f) => (
              <button
                key={f.label}
                className={`chip ${active === f.label ? 'is-active' : ''}`}
                onClick={() => setActive(f.label)}
                aria-pressed={active === f.label}
              >
                {f.label}
              </button>
            ))}
          </div>
          <CharterDivider />
        </div>
      </section>

      {/* ---- Register grid ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-x">
          {shown.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
              {shown.map((p, i) => (
                <ProjectCard key={p.title} {...p} delay={(i % 2) * 100} />
              ))}
            </div>
          ) : (
            <p className="lede" style={{ textAlign: 'center', margin: '40px auto' }}>
              No projects in this category yet — please view all commissions.
            </p>
          )}

          <div
            className="certificate-frame"
            style={{ padding: 'clamp(28px, 4vw, 48px)', marginTop: 'clamp(56px, 7vw, 96px)' }}
          >
            <div className="reading" style={{ textAlign: 'center' }}>
              <span className="eyebrow">How we deliver</span>
              <h2 className="h2" style={{ marginTop: 12 }}>
                One standard, every stage
              </h2>
              <p style={{ marginTop: 16, color: 'var(--ink-muted)' }}>
                What unites these projects is not a single style but a single approach. Each begins with a proper
                survey and a clear, itemised quotation; each runs to a managed programme with a dedicated point of
                contact; and each ends only when the finished work meets the standard we would expect in our own
                homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OxbloodCTA
        eyebrow="Start a conversation"
        heading="Add your home to the Register."
        ctaLabel="Discuss Your Project"
      />
    </>
  )
}
