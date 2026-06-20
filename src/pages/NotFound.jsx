import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Seal from '../components/Seal'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Guild of Master Craftsman"
        description="This page isn’t in the Register. Return to the Guild of Master Craftsman home page to explore our building services across the UK."
      />
      <section className="section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div className="container-x" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <Seal variant="full" size={120} animate />
          <span className="eyebrow">Error 404</span>
          <h1 className="h1">This page isn’t in the Register</h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            The page you were looking for can’t be found — but our craftsmen are still hard at work elsewhere.
          </p>
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </section>
    </>
  )
}
