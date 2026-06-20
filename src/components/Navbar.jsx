import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Seal from './Seal'
import { NAV, BRAND } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const hamburgerRef = useRef(null)
  const sheetRef = useRef(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile sheet on navigation
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock scroll while the sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Focus management for the modal mobile sheet: trap Tab, close on Escape,
  // focus the first item on open, and restore focus to the toggle on close.
  useEffect(() => {
    if (!open) {
      if (wasOpen.current) hamburgerRef.current?.focus()
      wasOpen.current = false
      return
    }
    wasOpen.current = true
    const sheet = sheetRef.current
    if (!sheet) return
    const getItems = () => sheet.querySelectorAll('a[href], button:not([disabled])')
    getItems()[0]?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const items = getItems()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-x site-header__inner">
        <Link to="/" className="brand" aria-label={`${BRAND.name} — home`}>
          <Seal variant="compact" size={42} title={BRAND.name} />
          <span className="brand-text">
            <span className="brand-name">Guild of Master Craftsman</span>
            <span className="brand-est">Master Builders · Est. {BRAND.established}</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary btn-sm">
            Request a Consultation
          </Link>
        </nav>

        <button
          ref={hamburgerRef}
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {createPortal(
        <div
          id="mobile-menu"
          ref={sheetRef}
          className={`mobile-sheet ${open ? 'is-open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="mobile-sheet__inner">
            <Seal variant="full" size={120} animate={open} />
            <nav className="mobile-nav" aria-label="Mobile">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="charter-divider" style={{ width: 'min(320px, 80%)' }}>
              <span className="lozenge" />
            </div>
            <Link to="/contact" className="btn btn-primary">
              Request a Consultation
            </Link>
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}
