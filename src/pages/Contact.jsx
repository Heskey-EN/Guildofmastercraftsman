import Seo from '../components/Seo'
import Seal from '../components/Seal'
import { Reveal, SectionHeader, CharterDivider, AccredStrip } from '../components/ui'
import { CONTACT } from '../data/site'

const STEPS = [
  { n: 'I', title: 'We listen first', body: 'We take time to understand your ideas, your property and what you hope to achieve — the practical needs and the finishing touches alike.' },
  { n: 'II', title: 'We arrange a visit', body: 'Where helpful, we come and see the space in person, assess the work properly and discuss the options face to face.' },
  { n: 'III', title: 'We prepare a clear proposal', body: 'You receive a transparent, itemised quotation with a realistic programme — no hidden extras, no surprises.' },
  { n: 'IV', title: 'We agree the way forward', body: 'Once you are happy, we confirm timings, assign the right qualified tradespeople and keep you informed at every stage.' },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact the Guild of Master Craftsman | Building Experts Across the UK"
        description="Begin your enquiry with the Guild of Master Craftsman. Speak to our team about extensions, renovations, new builds and every trade in between. Coverage across the UK."
      />

      {/* ---- Hero ---- */}
      <section className="page-hero">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Request a consultation</span>
            <h1 className="display" style={{ marginTop: 16 }}>
              Commission a craftsman.
            </h1>
            <p className="lede" style={{ margin: '22px auto 0' }}>
              Whether you are planning a single-room renovation or an ambitious whole-house transformation, we
              would be glad to hear from you. There is no obligation and no pressure — tell us what you have in
              mind, and we will help you understand what is possible.
            </p>
          </Reveal>
          <CharterDivider />
        </div>
      </section>

      {/* ---- Details + next steps ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
            {/* Details card */}
            <Reveal
              className="certificate-frame"
              style={{ padding: 'clamp(28px, 4vw, 44px)', background: 'var(--cream-deep)' }}
            >
              <span className="eyebrow">How to reach us</span>
              <h2 className="h2" style={{ marginTop: 12 }}>
                Our contact details
              </h2>
              <p style={{ marginTop: 14, color: 'var(--ink-muted)' }}>
                The simplest way to start is to call or email. Your enquiry comes straight to our team — never a
                call centre — and we reply promptly and personally.
              </p>

              <div style={{ marginTop: 26 }}>
                <div className="detail-row">
                  <span className="detail-label">Telephone</span>
                  <a className="detail-value" href={CONTACT.phoneHref}>
                    {CONTACT.phone}
                  </a>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email</span>
                  <a className="detail-value" href={CONTACT.emailHref} style={{ wordBreak: 'break-all' }}>
                    {CONTACT.email}
                  </a>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Coverage</span>
                  <span className="detail-value">We work with homeowners and clients {CONTACT.area}.</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Office hours</span>
                  <span className="detail-value">
                    {CONTACT.hours.map((h) => (
                      <span key={h.days} style={{ display: 'block', fontSize: '0.98rem' }}>
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              <div className="hero-actions" style={{ marginTop: 28 }}>
                <a href={CONTACT.phoneHref} className="btn btn-primary">
                  Call {CONTACT.phone}
                </a>
                <a href={CONTACT.emailHref} className="btn btn-ghost">
                  Email Us
                </a>
              </div>
            </Reveal>

            {/* What happens next */}
            <Reveal delay={120}>
              <span className="eyebrow">After you get in touch</span>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 28 }}>
                What happens next
              </h2>
              {STEPS.map((s, i) => (
                <div key={s.n} className="process-step" style={{ paddingBottom: i === STEPS.length - 1 ? 0 : 32 }}>
                  <div className="process-num">
                    <span>{s.n}</span>
                  </div>
                  <div>
                    <h3 className="h3">{s.title}</h3>
                    <p style={{ marginTop: 8, color: 'var(--ink-muted)' }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Reassurance + assurance ---- */}
      <section className="section band-raised">
        <div className="container-x reading" style={{ textAlign: 'center' }}>
          <Seal variant="full" size={84} />
          <h2 className="h1" style={{ marginTop: 28 }}>
            Built on trust, finished with care
          </h2>
          <p style={{ marginTop: 18, color: 'var(--ink-muted)', fontSize: 'var(--text-lede)' }}>
            With the Guild of Master Craftsman, you are placing your home in the hands of qualified professionals
            who take pride in their work and treat your property with the respect it deserves. However large or
            small the job, we are here to help you do it once and do it well.
          </p>
          <div style={{ marginTop: 44 }}>
            <AccredStrip />
          </div>
        </div>
      </section>
    </>
  )
}
