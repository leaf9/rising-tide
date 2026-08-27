import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/about/', label: 'About' },
  { to: '/services/', label: 'Services' },
  { to: '/resources/', label: 'Pricing & FAQs' },
  { to: '/contact/', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav wrap">
      <div className="nav-in">
        <Link to="/"><img src="/img/logo.png" alt="Rising Tide Counseling Services" /></Link>
        <nav className="nav-links" aria-label="Main">
          {links.slice(0, 3).map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
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
          <Link to="/contact/" className="btn btn-fill" onClick={() => setOpen(false)}>Request a Free Consult</Link>
        </div>
      )}
    </header>
  )
}
