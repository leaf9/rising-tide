import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { ScrollToTop } from './lib'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intake" element={<Navigate to="/contact/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <div className="sticky-cta">
        <Link className="btn btn-fill" to="/contact/">Request a Free Consult</Link>
      </div>
    </>
  )
}

function NotFound() {
  return (
    <section className="wrap" style={{ textAlign: 'center' }}>
      <div className="kicker">Page not found</div>
      <h1 className="d2">The tide took this page out.</h1>
      <p><Link to="/" style={{ color: 'var(--rt-sea)' }}>Back to the shore →</Link></p>
    </section>
  )
}
