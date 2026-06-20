import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Seal from '../components/Seal'
import TradeIcon from '../components/TradeIcon'
import OxbloodCTA from '../components/OxbloodCTA'
import {
  Reveal,
  SectionHeader,
  CharterDivider,
  StatCounter,
  AccredStrip,
  Frame,
} from '../components/ui'
import { STATS } from '../data/site'

const PROCESS = [
  { n: 'I', title: 'Consultation', body: 'We listen first. We visit, understand how you want to live, assess the building honestly and set out what is possible — with clear advice on budget and programme.' },
  { n: 'II', title: 'Design', body: 'We translate the brief into detailed plans and specifications, coordinate drawings, approvals and structural calculations, and agree every material and finish before work begins.' },
  { n: 'III', title: 'Build', body: 'Your project is delivered by our master craftsmen under one site lead. The trades are sequenced properly, the site is run cleanly, and you are kept informed at every stage.' },
  { n: 'IV', title: 'Finish', body: 'The details that define quality: precise joinery, flawless plaster lines, crisp decoration and a thorough, snag-free handover. Finished, not merely complete.' },
  { n: 'V', title: 'Aftercare', body: 'We stand behind our work. Your guarantees are issued in writing, and we remain on hand long after the scaffolding comes down.' },
]

const CRAFTSMEN = [
  { role: 'Master Bricklayer', icon: 'brickwork', note: 'Decades on the tools; crisp brick and stonework that lasts.' },
  { role: 'Lead Joiner', icon: 'carpentry', note: 'Bespoke staircases, doors and fine cabinetry, cut by hand.' },
  { role: 'Qualified Electrician', icon: 'electrics', note: 'NICEIC-approved installation, rewiring and certification.' },
  { role: 'Heating Engineer', icon: 'plumbing', note: 'Gas Safe registered across boilers, heating and plumbing.' },
  { role: 'Master Plasterer', icon: 'plastering', note: 'Flawless modern finishes and traditional lime work alike.' },
  { role: 'Site Manager', icon: 'newbuild', note: 'Your single point of contact, coordinating every trade.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About the Guild of Master Craftsman | Heritage Building Experts"
        description="A UK building company built on heritage craftsmanship and modern professionalism. Our story, our standard, our five-stage process, accreditations and guarantees."
      />

      {/* ---- Hero ---- */}
      <section className="hero">
        <div className="container-x hero-grid">
          <Reveal>
            <span className="eyebrow">The Guild · Est. [YEAR]</span>
            <h1 className="display" style={{ marginTop: 18 }}>
              Master hands, <em style={{ fontWeight: 500 }}>one register.</em>
            </h1>
            <p className="lede" style={{ marginTop: 22 }}>
              We are a building company of all-round experts, assembled around a simple conviction: that every
              stage of a build deserves a master of its trade. From the first footing to the final coat, your
              project is placed in the hands of qualified craftsmen who take quiet pride in work done properly.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Project
              </Link>
              <Link to="/projects" className="link-quiet">
                See our work <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal className="hero-photo" delay={120}>
            <Frame motif={3} seal ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      {/* ---- The Charter / Story ---- */}
      <section className="section band-raised">
        <div className="container-x reading">
          <SectionHeader center eyebrow="Our story" heading="Established on a single standard" />
          <p className="dropcap" style={{ fontSize: 'var(--text-lede)', color: 'var(--ink)' }}>
            The Guild was founded across the UK by tradespeople who had grown tired of the compromises that dog
            so much of modern building — corners cut, trades that don't speak to one another, finishes that look
            right on handover day and tell a different story a year on. We set out to do it differently.
          </p>
          <p style={{ marginTop: '1.1em', color: 'var(--ink-muted)' }}>
            Rather than a builder who sub-lets the difficult parts, we built a guild: a single team of master
            craftsmen covering every trade and every stage, working to one shared standard and answering to one
            another for the quality of the whole. The structural engineer, the bricklayer, the joiner, the
            electrician and the decorator all pull in the same direction — yours.
          </p>

          <blockquote
            style={{
              fontFamily: 'var(--font-head)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.4rem, 1.2rem + 1vw, 2rem)',
              lineHeight: 1.3,
              color: 'var(--wax)',
              textAlign: 'center',
              margin: 'clamp(36px, 5vw, 56px) auto',
              maxWidth: '24ch',
            }}
          >
            “A master craftsman earns the right to set his seal to his work.”
          </blockquote>

          <p style={{ color: 'var(--ink-muted)' }}>
            In the old guilds, a craftsman earned that right only after years of disciplined apprenticeship and
            proven skill. We hold to the same idea. Every trade we send to your home is qualified, time-served and
            accountable — and every piece of work is finished to a level we would be content to stamp. If a detail
            isn't right, it gets put right. That is the whole point of putting your name to something.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
            <Seal variant="full" size={96} />
          </div>
        </div>
      </section>

      {/* ---- Our promise ---- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our promise"
            heading="What you can hold us to"
            lede="Building work asks a great deal of trust. We make our commitments plain from the outset."
          />
          <ul
            className="gold-list"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px 40px' }}
          >
            <li>Honest, detailed quotations — clear scope, clear costs, no surprises later.</li>
            <li>One point of contact who knows your project inside out.</li>
            <li>Tidy, considerate sites and respect for your home and neighbours.</li>
            <li>Realistic programmes, and straight talk if anything needs to change.</li>
            <li>Work guaranteed in writing, and standing behind it long after we leave.</li>
            <li>The right materials and methods for the building — old or new.</li>
          </ul>
        </div>
      </section>

      {/* ---- How we work ---- */}
      <section className="section band-deep">
        <div className="container-x">
          <SectionHeader
            eyebrow="How we work"
            heading="A considered process, from first idea to long after handover"
            lede="Five stages, one continuous standard of care."
          />
          <div style={{ maxWidth: 820 }}>
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} className="process-step" delay={i * 60}>
                <div className="process-num">
                  <span>{p.n}</span>
                </div>
                <div>
                  <h3 className="h3">{p.title}</h3>
                  <p style={{ marginTop: 8, color: 'var(--ink-muted)' }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Our craftsmen ---- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Our craftsmen"
            heading="Hallmarked masters of their trade"
            lede="The character of a build comes from the character of the people who make it. Roles shown are illustrative — your team is assembled to suit the work."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CRAFTSMEN.map((c, i) => (
              <Reveal key={c.role} className="card card-hover craftsman" delay={(i % 3) * 80}>
                <div
                  className="frame-plate"
                  style={{ aspectRatio: '5 / 4', background: 'var(--cream-deep)' }}
                >
                  <span style={{ color: 'var(--gold)' }}>
                    <TradeIcon name={c.icon} size={64} strokeWidth={1.1} />
                  </span>
                </div>
                <h3 className="h3" style={{ marginTop: 20 }}>
                  [Name]
                </h3>
                <div className="role">{c.role}</div>
                <p style={{ marginTop: 10, color: 'var(--ink-muted)' }}>{c.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="section--tight band-raised">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {STATS.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Accreditations ---- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Accreditations & guarantees"
            heading="Credentials you can verify, cover you can rely on"
            lede="We hold the qualifications and memberships appropriate to the trades we carry out, and protect every project with the right insurance and warranties. Schemes shown are illustrative — the client will confirm."
          />
          <AccredStrip />
        </div>
      </section>

      <OxbloodCTA heading="Put your project in master hands." />
    </>
  )
}
