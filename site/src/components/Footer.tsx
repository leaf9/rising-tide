import { Link } from 'react-router-dom'
import FacebookIcon from './FacebookIcon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave" aria-hidden="true">
        <img src="/img/wave-aerial.jpg" alt="" loading="lazy" />
      </div>
      <div className="footer-in wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img className="foot-logo" src="/img/logo.png" alt="Rising Tide Counseling Services" />
            <p>Online Christian counseling with Jada Kouba, LCMHC · LCPC. Serving Florida and Maine.</p>
            <FacebookIcon className="fb-foot" />
          </div>
          <nav className="foot-col" aria-label="Footer">
            <Link to="/about/">Meet Jada</Link>
            <Link to="/services/">Services</Link>
            <Link to="/resources/">Pricing &amp; FAQs</Link>
            <Link to="/contact/">Request a Free Consult</Link>
          </nav>
          <div className="foot-crisis">
            If you or someone you love is in crisis, call or text <b>988</b>. The Suicide &amp; Crisis
            Lifeline is available 24/7.
          </div>
        </div>
        <div className="foot-note">
          <span>© {new Date().getFullYear()} Rising Tide Counseling</span>
          <span>Jada Kouba, LCMHC (FL) · LCPC (ME)</span>
        </div>
      </div>
    </footer>
  )
}
