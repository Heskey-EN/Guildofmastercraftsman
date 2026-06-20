import Seo from '../components/Seo'
import Seal from '../components/Seal'
import OxbloodCTA from '../components/OxbloodCTA'
import { Reveal, SectionHeader, CharterDivider, EndorsementCard, AccredStrip } from '../components/ui'

const TESTIMONIALS = [
  {
    quote:
      'We had spoken to several builders before the Guild, and the difference was immediate. There was a clear programme, a single point of contact, and a genuine pride in the craftsmanship. The brickwork matches the original house so precisely that visitors cannot tell where the old ends and the new begins.',
    attribution: 'Mr & Mrs [Surname] · [Town] — Two-storey rear extension',
  },
  {
    quote:
      'What impressed us most was how seamlessly the trades worked together. Structural work, joinery, plastering, electrics and the en-suite plumbing were all carried out by the same team, to the same exacting standard. The finish is flawless and it was completed on time and to budget.',
    attribution: '[First name] [Surname] · [Town] — Loft conversion with en-suite',
  },
  {
    quote:
      'Restoring a listed property is a daunting prospect, and we needed people who truly understood traditional methods. Lime plaster, reclaimed materials, hand-finished joinery, careful liaison with the conservation officer — nothing was rushed or compromised. Master craftsmen in the truest sense.',
    attribution: 'Dr [Surname] · [Town] — Grade II listed cottage restoration',
  },
  {
    quote:
      'We wanted a kitchen and two bathrooms reworked completely, tailored to us rather than off the shelf. The joinery is beautiful, the tiling is faultless, and the attention to detail in the smaller things was remarkable. Tidy, courteous, and clearly proud of what they do.',
    attribution: 'Ms [Surname] · [Town] — Kitchen & dual-bathroom refurbishment',
  },
  {
    quote:
      'We took on a tired property that needed everything: rewiring, replumbing, new heating, replastering, flooring and decorating. The thought of coordinating it all kept us awake at night. The Guild made it effortless — one team, one programme, one standard. The house feels built to last for generations.',
    attribution: 'Mr & Mrs [Surname] · [Town] — Whole-house renovation',
  },
  {
    quote:
      'Building from the ground up is a leap of faith, and we are so glad we placed ours in the Guild’s hands. Groundworks, structure, roofing, carpentry, finishes — every trade was their own, every milestone met. We now live in a home that is solid, beautiful and unmistakably crafted with care.',
    attribution: '[First name] & [First name] [Surname] · [Town] — Bespoke detached new build',
  },
]

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials | Guild of Master Craftsman"
        description="Read what our clients say about the Guild of Master Craftsman — extensions, loft conversions, renovations and heritage work delivered to an exacting standard across the UK."
      />

      {/* ---- Hero ---- */}
      <section className="page-hero">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Endorsements</span>
            <h1 className="display" style={{ marginTop: 16 }}>
              Vouched for, by the people they built for.
            </h1>
            <p className="lede" style={{ margin: '22px auto 0' }}>
              A building project is one of the most significant investments a household ever makes, and trust has
              to be earned long before the first brick is laid. So much of our work comes by recommendation. Names
              and locations below are placeholders to be replaced with verified client details before launch.
            </p>
          </Reveal>
          <CharterDivider />
        </div>
      </section>

      {/* ---- Endorsements grid (masonry) ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-x">
          <div className="columns-1 md:columns-2 lg:columns-3" style={{ columnGap: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.attribution} className="mb-6 break-inside-avoid">
                <EndorsementCard quote={t.quote} attribution={t.attribution} delay={(i % 3) * 80} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Featured endorsement ---- */}
      <section className="section band-raised">
        <div className="container-x reading" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-head)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 1.3rem + 1.6vw, 2.6rem)',
              lineHeight: 1.3,
              color: 'var(--ink)',
            }}
          >
            “A rare builder you can genuinely trust — we have already recommended them to friends.”
          </p>
          <div className="quote-rule" style={{ margin: '24px auto' }} />
          <p className="attribution">Homeowner · [Location]</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
            <Seal variant="full" size={72} />
          </div>
        </div>
      </section>

      {/* ---- Trust strip ---- */}
      <section className="section--tight">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Accredited & assured"
            heading="Reputation backed by recognised credentials"
          />
          <AccredStrip />
        </div>
      </section>

      <OxbloodCTA heading="Join the homes we’ve built for." />
    </>
  )
}
