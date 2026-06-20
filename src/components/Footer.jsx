import { Link } from 'react-router-dom'
import Seal from './Seal'
import { NAV, TRADES, CONTACT, BRAND } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-x footer__inner">
        <div className="footer__crest">
          <Seal variant="full" size={96} title={BRAND.name} />
          <p className="small-caps footer__est">Est. {BRAND.established} · Sealed in craft</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__heading">The Guild</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Our Trades</h4>
            <ul className="footer__trades">
              {TRADES.slice(0, 12).map((t) => (
                <li key={t.name}>
                  <Link to="/services">{t.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact">
            <h4 className="footer__heading">Enquiries</h4>
            <ul>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </li>
              <li>Covering {CONTACT.area}</li>
            </ul>

            <div className="title-block">
              <div className="row">
                <span>Drawing</span>
                <span>Guild Register</span>
              </div>
              <div className="row">
                <span>Scale</span>
                <span>1 : 1 Craft</span>
              </div>
              <div className="row">
                <span>Coverage</span>
                <span>United Kingdom</span>
              </div>
              <div className="row">
                <span>Sheet</span>
                <span>01 / 01</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-x">
        <div className="charter-divider">
          <span className="lozenge" />
        </div>
        <p className="footer__colophon">
          © {BRAND.established === '[YEAR]' ? '2025' : BRAND.established}–present · {BRAND.name}. A qualified
          professional for every job, top to bottom. All work guaranteed and fully insured.
        </p>
      </div>
    </footer>
  )
}
