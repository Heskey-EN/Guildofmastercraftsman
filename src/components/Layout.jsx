import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Seal from './Seal'

function PageLoading() {
  return (
    <div style={{ minHeight: '70vh', display: 'grid', placeItems: 'center' }} aria-busy="true" aria-label="Loading">
      <Seal variant="full" size={88} animate />
    </div>
  )
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
