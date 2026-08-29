import { Reveal, usePageMeta } from '../lib'
import FilloutEmbed from '../components/FilloutEmbed'

export default function Contact() {
  usePageMeta(
    'Contact · Rising Tide Counseling',
    'Request a free consult with Jada Kouba, LCMHC · LCPC. Online Christian counseling across Florida and Maine.',
  )
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><img className="squig" src="/img/squiggle.png" alt="" /></Reveal>
          <Reveal><div className="kicker">Contact · get in touch &amp; inquire about availability</div></Reveal>
          <Reveal as="h1" className="d1" delay={80}>Let&rsquo;s begin your counseling <em>journey together</em></Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px,.9fr) 1.1fr', gap: 'clamp(36px,5vw,70px)', alignItems: 'start' }} data-collapse>
          <div>
            <Reveal as="p" className="measure">
              Share a little about what&rsquo;s going on and what you&rsquo;re looking for.{' '}
              <span className="painted">Every message gets a personal reply</span>, and the consult is
              a chance to see whether it&rsquo;s the right fit for the work ahead.
            </Reveal>
            <Reveal as="p" className="measure fine" delay={60}>
              Sessions are held online for residents of Florida and Maine. If you&rsquo;re not sure
              whether counseling is right for you, the consult is exactly for that conversation.
            </Reveal>
            <Reveal delay={120}>
              <div className="crisis" style={{ marginTop: 22 }}>
                <div>🕊️</div>
                <div>
                  <b>In crisis right now?</b> This form isn&rsquo;t monitored around the clock. If
                  you&rsquo;re in danger or thinking about harming yourself, call or text <b>988</b>{' '}
                  (Suicide &amp; Crisis Lifeline). Someone is there 24/7.
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal soak>
            <FilloutEmbed />
          </Reveal>
        </div>
      </section>
    </>
  )
}
