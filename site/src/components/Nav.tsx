import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HERO_VARIANT } from '../config'
import FacebookIcon from './FacebookIcon'

const links = [
  { to: '/about/', label: 'Meet Jada' },
  { to: '/services/', label: 'Services' },
  { to: '/resources/', label: 'Pricing & FAQs' },
  { to: '/contact/', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const light = pathname === '/' && HERO_VARIANT === 'dark'
  return (
    <header className={`nav ${light ? 'nav-light' : ''}`}>
      <div className="wrap nav-in">
        <Link to="/"><img src={light ? '/img/logo-white.png' : '/img/logo.png'} alt="Rising Tide Counseling Services" /></Link>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
          <FacebookIcon />
          <Link to="/contact/" className="btn btn-fill">Request a Free Consult</Link>
        </nav>
        <button className="nav-burger" aria-label="Open menu" onClick={() => setOpen(true)}>☰</button>
      </div>
      {open && (
        <div className="nav-drawer" role="dialog" aria-label="Menu">
          <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <FacebookIcon className="fb-drawer" />
        </div>
      )}
    </header>
  )
}
