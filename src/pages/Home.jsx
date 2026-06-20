import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Seal from '../components/Seal'
import OxbloodCTA from '../components/OxbloodCTA'
import {
  Reveal,
  SectionHeader,
  CharterDivider,
  StatCounter,
  TradeHallmark,
  ProjectCard,
  AccredStrip,
  Frame,
} from '../components/ui'
import { TRADES, STATS, PROJECTS } from '../data/site'

const HOME_TEASERS = [
  {
    quote: 'They managed every trade flawlessly and the finish is exceptional. We could not be happier.',
    who: 'Homeowner · [Location]',
  },
  {
    quote: 'Honest, tidy and brilliant at what they do. The whole project ran like clockwork.',
    who: 'Client · [Location]',
  },
  {
    quote: 'A rare builder you can genuinely trust. We have already recommended them to friends.',
    who: 'Homeowner · [Location]',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Guild of Master Craftsman | Master Builders & Every Trade Under One Roof, UK"
        description="A qualified professional for every job, from foundations to finishing. Extensions, loft conversions, renovations, new builds and heritage restoration across the UK."
      />

      {/* ---- Hero ---- */}
      <section className="hero">
        <div className="container-x hero-grid">
          <Reveal>
            <span className="eyebrow">Every trade · Every stage</span>
            <h1 className="display" style={{ marginTop: 18 }}>
              Every trade. One standard.
              <br />
              <em style={{ fontWeight: 500 }}>Crafted to last.</em>
            </h1>
            <p className="lede" style={{ marginTop: 22 }}>
              A qualified professional for every job, top to bottom. From the first footing to the final coat,
              the Guild of Master Craftsman brings every trade under one roof — one accountable team, one
              exacting standard, work built to outlast the people who commissioned it.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View the Register
              </Link>
              <Link to="/contact" className="link-quiet">
                Request a Consultation <span className="arrow">→</span>
              </Link>
            </div>
            <div className="hero-bullets">
              <span>Qualified, time-served trades</span>
              <span>One point of contact</span>
              <span>Fixed, transparent quotes</span>
            </div>
          </Reveal>

          <Reveal className="hero-photo" delay={120}>
            <Frame motif={0} seal ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      {/* ---- Manifesto ---- */}
      <section className="section band-raised">
        <div className="container-x reading" style={{ textAlign: 'center' }}>
          <SectionHeader
            center
            eyebrow="The Guild promise"
            heading="Heritage craftsmanship, run with modern precision"
          />
          <p className="dropcap" style={{ textAlign: 'left', fontSize: 'var(--text-lede)', color: 'var(--ink)' }}>
            The Guild of Master Craftsman was founded on a simple principle: that genuine quality comes from
            skilled hands and proper standards, not shortcuts. We are an all-round building company with
            specialists in every trade and at every stage of a build, so the same care is applied to your
            foundations as to your final décor.
          </p>
          <p style={{ textAlign: 'left', marginTop: '1.1em', color: 'var(--ink-muted)' }}>
            Our clients come to us because they want a builder they can trust with their home, their budget and
            their time — and who treats each commission as a piece of work to be proud of. It is a more
            considered way to build, and it is the only way we know how.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
            <Seal variant="full" size={84} />
          </div>
        </div>
      </section>

      {/* ---- Assay panel: the trades ---- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our trades · Stamped on every project"
            heading="Every trade under one roof"
            lede="No subcontractor lottery. No finger-pointing. Just one team, accountable for the whole job — from groundworks to the last lick of paint."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {TRADES.map((t, i) => (
              <TradeHallmark key={t.name} trade={t} delay={(i % 6) * 50} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="section--tight band-deep">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {STATS.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Featured register ---- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Selected work"
            heading="Craftsmanship you can see"
            lede="A glimpse of recent projects, from full-house renovations to ground-up new builds — considered design, sound construction, and a finish that rewards a closer look."
          />
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {PROJECTS.slice(0, 2).map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 120} />
            ))}
          </div>
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <Link to="/projects" className="link-quiet">
              View the full Register <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Testimonials teaser ---- */}
      <section className="section band-raised">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Client stories"
            heading="Trusted in homes across the UK"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {HOME_TEASERS.map((t, i) => (
              <Reveal key={t.who + i} className="card" delay={i * 90}>
                <p style={{ fontFamily: 'var(--font-head)', fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.4 }}>
                  “{t.quote}”
                </p>
                <p className="attribution" style={{ marginTop: 16 }}>
                  {t.who}
                </p>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
            <Link to="/testimonials" className="link-quiet">
              Read more testimonials <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Marks of assurance ---- */}
      <section className="section--tight">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Accredited & assured"
            heading="Credentials you can verify"
          />
          <AccredStrip />
        </div>
      </section>

      <OxbloodCTA heading="Commission work worthy of the seal." />
    </>
  )
}
