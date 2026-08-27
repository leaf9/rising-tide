import { Link } from 'react-router-dom'
import { Reveal } from '../lib'

export default function CtaBand({
  heading = <>Reach out today — <em>the first conversation is free.</em></>,
  copy = 'Tell me a little about what’s going on and what you’re looking for. I’ll respond personally to set up your free consult — no obligation, no pressure.',
}: {
  heading?: React.ReactNode
  copy?: string
}) {
  return (
    <section className="tintband wcband">
      <img className="wc-art wc-low" src="/img/wc-layered.jpg" alt="" aria-hidden="true" loading="lazy" />
      <div className="wrap" style={{ textAlign: 'center' }}>
        <Reveal><div className="kicker">Take your next step</div></Reveal>
        <Reveal as="h2" className="d2" delay={60}>{heading}</Reveal>
        <Reveal as="p" delay={120} className="measure" >
          <span style={{ display: 'inline-block', maxWidth: '46ch' }}>{copy}</span>
        </Reveal>
        <Reveal delay={180}>
          <div style={{ marginTop: 26 }}>
            <Link className="btn btn-fill" to="/contact/">Request a Free Consult</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
