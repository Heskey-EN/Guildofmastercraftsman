import { Link } from 'react-router-dom'
import { Reveal } from './ui'

export default function OxbloodCTA({
  eyebrow = 'Commission a craftsman',
  heading,
  trades = ['Extensions', 'Renovations', 'New Builds', 'Heritage'],
  ctaLabel = 'Request a Consultation',
  ctaTo = '/contact',
}) {
  return (
    <section className="oxblood section--tight">
      <div className="container-x oxblood__inner">
        <Reveal className="oxblood__content">
          <span className="eyebrow eyebrow--plain oxblood__eyebrow">{eyebrow}</span>
          <h2 className="display oxblood__heading">{heading}</h2>
          {trades?.length > 0 && (
            <p className="oxblood__trades small-caps">
              {trades.map((t, i) => (
                <span key={t}>
                  {t}
                  {i < trades.length - 1 && <span className="sep"> · </span>}
                </span>
              ))}
            </p>
          )}
          <Link to={ctaTo} className="btn btn-ghost-gold">
            {ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
