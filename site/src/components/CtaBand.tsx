import { Link } from 'react-router-dom'
import { Reveal } from '../lib'

export default function CtaBand({
  heading = <>Healing begins with <em>one conversation.</em></>,
  copy = 'Share a little about what’s going on and what you’re looking for. Every message gets a personal reply, and the consult is a chance to see whether it’s the right fit for the work ahead.',
}: {
  heading?: React.ReactNode
  copy?: string
}) {
  return (
    <section className="tintband">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <Reveal soak><img className="squig-center" src="/img/squiggle.png" alt="" /></Reveal>
        <Reveal><div className="kicker">Take your next step</div></Reveal>
        <Reveal as="h2" className="d2" delay={60}>{heading}</Reveal>
        <Reveal as="p" delay={120}>
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
