import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import OxbloodCTA from '../components/OxbloodCTA'
import {
  Reveal,
  SectionHeader,
  CharterDivider,
  ServiceCard,
  ValueCard,
  AccredStrip,
} from '../components/ui'
import { SERVICES } from '../data/site'

const SERVICE_COPY = {
  'extensions-lofts': {
    eyebrow: 'Creating space',
    body: [
      'When a home no longer fits the life inside it, the answer is rarely to move — it is to build well. We design and deliver single and double-storey extensions, wrap-arounds, garden rooms and loft conversions that feel original to the house rather than bolted on.',
      'Every scheme is handled end to end: structural calculations and steelwork, planning and building-regulations liaison, watertight construction, and a finish that matches your existing rooms detail for detail.',
    ],
    bullets: [
      'Single, double-storey, side-return and wrap-around extensions',
      'Loft conversions, dormers and habitable roof spaces',
      'Structural design, steelwork and party-wall coordination',
    ],
  },
  renovations: {
    eyebrow: 'Reimagining the existing',
    body: [
      'A thoughtful refurbishment can transform a tired property into the home it was always meant to be. We take on full-house renovations and focused single-room refits alike, reworking layouts, upgrading services and bringing every surface back to life.',
      'Because we hold all the trades in-house, a renovation runs as one continuous programme — walls come down, floors are levelled, wiring and pipework renewed, and finishes applied, all sequenced by a team that knows precisely what comes next.',
    ],
  },
  'new-builds': {
    eyebrow: 'From the ground up',
    body: [
      'Building from a bare plot is the truest test of an all-round contractor — and the work we are proudest of. We deliver individual homes and complete new builds from foundations to handover, managing the full sequence of trades to a programme and a budget.',
      'Our structural expertise underpins everything else: new foundations, steel and engineered timber, removing load-bearing walls or making a building sound again — the calculations right, the engineering sound, the work signed off correctly.',
    ],
    bullets: [
      'Bespoke new homes from foundations to finish',
      'Foundations, groundworks and structural shell',
      'Steel beams, lintels, padstones and load-bearing alterations',
      'Underpinning, subsidence and structural repair',
    ],
  },
  brickwork: {
    eyebrow: 'The art of the wall',
    body: [
      'Brickwork is where craftsmanship is most visible — and least forgiving. Our bricklayers and stonemasons work to crisp, consistent lines, whether raising a new elevation, building a feature wall or matching brick and bond on a period property.',
      'We handle facing brickwork and blockwork, natural and reconstituted stone, decorative detailing, arches and chimneys, alongside repointing and lime work where older buildings demand a gentler hand.',
    ],
  },
  roofing: {
    eyebrow: 'Keeping the weather out',
    body: [
      'A roof is the part of your home that works hardest and is noticed least — until something goes wrong. We carry out complete re-roofs, new roof structures, repairs and maintenance across pitched and flat roofs alike.',
      'From traditional slate and clay tiling to modern flat-roof systems, our work covers the whole assembly — timbers, felt and battens, insulation, leadwork, flashings, guttering and ventilation.',
    ],
    bullets: [
      'Full re-roofs and new roof structures',
      'Slate, clay and concrete tiling',
      'Flat roofs, including EPDM and GRP systems',
      'Leadwork, flashings, fascias, soffits and guttering',
    ],
  },
  carpentry: {
    eyebrow: 'Worked by hand',
    body: [
      'Carpentry runs through every project we touch, from the first structural timber to the last skirting board. Our joiners bring equal care to the work you will never see and the work you will live with every day.',
      'First-fix carpentry forms the bones of a build, while second-fix and bespoke joinery deliver the detail — staircases, doors, fitted wardrobes, panelling, shelving and made-to-measure furniture, properly jointed and finished to last.',
    ],
  },
  plastering: {
    eyebrow: 'The perfect surface',
    body: [
      'Plastering is the discipline that everything else is judged against — a wall is only as good as the surface it presents. Our plasterers deliver flat, true, blemish-free finishes ready for decoration.',
      'We cover internal plastering and dry-lining, traditional lime plaster for period properties, and a full range of external renders, each chosen to suit the building and applied to leave a finish that is clean to the eye and faithful to the line.',
    ],
  },
  'kitchens-bathrooms': {
    eyebrow: 'Rooms that work hard',
    body: [
      'Kitchens and bathrooms ask more of a builder than any other rooms in the house. They draw on nearly every trade we hold — and they are where coordination truly pays off.',
      'We manage the joinery, plumbing, electrics, tiling, plastering and decoration as a single, seamless job. Cabinetry fitted square and level, worktops templated precisely, services concealed cleanly, and the room handed over ready to use.',
    ],
  },
  electrics: {
    eyebrow: 'Safe and certified',
    body: [
      'Electrical work leaves no room for compromise. Our qualified, registered electricians carry out full and partial rewires, consumer-unit upgrades, new circuits, lighting design and fault-finding — all tested, certified and signed off to current regulations.',
      'From first-fix wiring to the considered placement of every socket and switch, the work is planned around how you actually use the space — and you receive the correct certification on completion.',
    ],
  },
  'plumbing-heating': {
    eyebrow: 'Warmth and water',
    body: [
      'From a dripping tap to a complete heating system, our plumbing and heating specialists keep your home warm, supplied and running quietly in the background.',
      'Gas work is carried out by registered engineers, every connection is made to last, and systems are commissioned and balanced so they perform efficiently from the day they are switched on.',
    ],
    bullets: [
      'Boiler installation, servicing and replacement',
      'Central heating, radiators and underfloor heating',
      'Full bathroom and kitchen plumbing',
      'Gas-safe registered engineers and certified work',
    ],
  },
  finishes: {
    eyebrow: 'The finishing touch',
    body: [
      'The finishes are what you see, touch and remember — and they reveal whether the work beneath them was done well. We treat them with the same seriousness as the structure.',
      'Our tilers set wall and floor tiles to true lines and even joints; our decorators prepare meticulously before they ever lift a brush; and our flooring specialists fit timber, engineered, laminate, LVT and tiled floors on a sound, level base.',
    ],
  },
  landscaping: {
    eyebrow: 'Beyond the walls',
    body: [
      'A home does not end at the back door, and neither does our work. We shape the ground a project sits on and the spaces around it, from the earliest excavation to the final paved terrace.',
      'Groundworks cover drainage, foundations, retaining structures and site preparation. Above ground, we build patios, paths and driveways, garden walls, fencing, decking and complete outdoor schemes — set on proper foundations and built to endure.',
    ],
  },
  heritage: {
    eyebrow: 'Honouring the original',
    body: [
      'Older and listed buildings ask for knowledge as much as skill — an understanding of how they were made and how they need to breathe. Our heritage work brings traditional materials and methods to bear on properties that deserve to be conserved.',
      'We undertake sympathetic restoration using lime mortars and plasters, repair and replicate period joinery and masonry, and carry out sensitive structural work that respects the fabric of the building.',
    ],
  },
}

const WHY = [
  {
    icon: 'structural',
    title: 'One qualified pro per trade',
    body: 'Every discipline is covered by a time-served specialist — never a generalist filling in. The right hands for every part of the work.',
  },
  {
    icon: 'newbuild',
    title: 'Project-managed end to end',
    body: 'One accountable team plans, sequences and runs the whole programme, so trades dovetail and your project stays on time and on budget.',
  },
  {
    icon: 'renovation',
    title: 'Sealed & certified',
    body: 'Building regulations, structural sign-off and safety certification handled for you — and every project guaranteed and fully insured.',
  },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Building Services Across the UK | Guild of Master Craftsman"
        description="Every trade under one roof, delivered by qualified specialists. From extensions and loft conversions to heritage restoration, managed to a master standard across the UK."
      />

      {/* ---- Hero ---- */}
      <section className="page-hero">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Our trades</span>
            <h1 className="display" style={{ marginTop: 16 }}>
              Every trade, under one roof — top to bottom.
            </h1>
            <p className="lede" style={{ margin: '22px auto 0' }}>
              Most building projects pass through a dozen pairs of hands. Ours is the rare practice that brings
              every one of those trades under a single roof — and holds them all to the same exacting standard.
            </p>
          </Reveal>
          <CharterDivider />
        </div>
      </section>

      {/* ---- Index ledger ---- */}
      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container-x">
          <SectionHeader
            eyebrow="What we do"
            heading="Every trade, in detail"
            lede="Jump to a craft below, or read on — each is delivered in-house by qualified specialists and managed as part of one coordinated programme."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {SERVICES.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="ledger-row"
                style={{ textDecoration: 'none' }}
              >
                <span className="index">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-head)', fontSize: '1.15rem' }}>
                    {s.title}
                  </span>
                  <span className="meta" style={{ fontSize: '0.72rem' }}>
                    {s.descriptor}
                  </span>
                </span>
                <span className="link-quiet" aria-hidden="true">
                  <span className="arrow">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Detailed services ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => {
              const c = SERVICE_COPY[s.id]
              return (
                <div id={s.id} key={s.id} style={{ scrollMarginTop: 96 }}>
                  <ServiceCard
                    service={s}
                    eyebrow={c.eyebrow}
                    body={c.body}
                    bullets={c.bullets}
                    delay={(i % 2) * 100}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---- Fully managed ---- */}
      <section className="section band-deep">
        <div className="container-x">
          <Reveal className="certificate-frame" style={{ padding: 'clamp(32px, 5vw, 64px)' }}>
            <div className="reading" style={{ textAlign: 'center' }}>
              <span className="eyebrow">One team, start to finish</span>
              <h2 className="h1" style={{ marginTop: 14 }}>
                Your project, fully managed
              </h2>
              <p style={{ marginTop: 18, color: 'var(--ink-muted)', fontSize: 'var(--text-lede)' }}>
                With the Guild, there is no juggling of contractors, no gaps between trades, and no question of
                who is responsible — because the answer is always the same. One team plans your project,
                sequences the work, manages the site and protects the standard at every stage.
              </p>
            </div>
            <ul
              className="gold-list"
              style={{ maxWidth: 720, margin: '32px auto 0', gridTemplateColumns: '1fr 1fr', display: 'grid', gap: '14px 28px' }}
            >
              <li>A single point of contact from enquiry to handover</li>
              <li>Every trade coordinated under one accountable team</li>
              <li>Clear programmes, transparent quotations and tidy sites</li>
              <li>Workmanship guaranteed and fully insured — across the UK</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
              <Link to="/contact" className="btn btn-primary">
                Request a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Why the Guild ---- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader center eyebrow="Why the Guild" heading="Trust, built into every project" />
          <div className="grid md:grid-cols-3 gap-6">
            {WHY.map((w, i) => (
              <ValueCard key={w.title} {...w} delay={i * 90} />
            ))}
          </div>
          <div style={{ marginTop: 'clamp(40px, 5vw, 72px)' }}>
            <AccredStrip />
          </div>
        </div>
      </section>

      <OxbloodCTA heading="Commission a craftsman for every stage." />
    </>
  )
}
