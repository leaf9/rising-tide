import { Link } from 'react-router-dom'
import { Reveal, usePageMeta } from '../lib'
import CtaBand from '../components/CtaBand'

const struggles = [
  'Anxiety and worry', 'Stress', 'Sadness or depression', 'Emotional dysregulation',
  'Relationship issues', 'Narcissistic abuse', 'Co-dependency', 'Parenting issues',
  'Obsessive thinking', 'Major life transitions', 'Adult ADHD', 'Self-esteem issues',
  'Grief', "Women's issues", 'Divorce',
]

export default function About() {
  usePageMeta(
    'About Jada Kouba, LCMHC · LCPC — Rising Tide Counseling',
    'Meet Jada Kouba — dually licensed counselor with 20 years in mental health and 15 years in private practice, offering online Christian counseling in Florida and Maine.',
  )
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><img className="squig" src="/img/squiggle.png" alt="" /></Reveal>
          <Reveal><div className="kicker">About</div></Reveal>
          <Reveal as="h1" className="d1" delay={80}>Discover your path to <em>healing and growth</em></Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 420px) 1fr', gap: 'clamp(36px,6vw,80px)', alignItems: 'start' }} data-collapse>
          <Reveal soak>
            <div className="portrait" style={{ aspectRatio: '4/5' }}>
              <img src="/img/jada-palm.jpg" alt="Jada Kouba" style={{ objectPosition: 'center 12%' }} />
            </div>
          </Reveal>
          <div>
            <Reveal><h2 className="d2">Hello, my name is Jada</h2></Reveal>
            <Reveal as="p" className="measure">
              I am a licensed clinical counselor, and I have worked in the mental health field for 20
              years — for the past 15, I&rsquo;ve had the privilege of running my own private practice.
              I&rsquo;ve walked alongside individuals and families as they&rsquo;ve faced challenges such
              as anxiety, depression, grief, abuse, family issues, and relationship struggles.
            </Reveal>
            <Reveal as="p" className="measure" delay={60}>
              My approach to counseling is compassionate, integrative, and focused on helping each
              person move toward healing, clarity, and hope. I love learning and growing as a
              professional and believe it is essential, so that I can offer the best support possible to
              my clients.
            </Reveal>
            <Reveal as="p" className="measure" delay={120}>
              I also offer Christian-based counseling, weaving together{' '}
              <span className="painted">faith and evidence-based tools</span> to bring greater depth and
              meaning to the therapeutic process. Every day I get to walk alongside individuals as they
              work through challenges and discover new purpose in their lives. I love what I do, and I am
              so honored that I get to use my God-given gifts and passions in this way.
            </Reveal>
            <Reveal as="p" className="measure" delay={180}>
              Because life is busy, I offer flexible online sessions so you can focus on your mental
              health without the added stress of commuting. My heart is to make therapy feel like a safe,
              supportive space — a place where your mind, body, and spirit can be nurtured and renewed.
              I&rsquo;ve had the privilege of seeing clients experience real transformation — growing
              personally, finding peace, and stepping into life with a renewed sense of hope.
            </Reveal>
            <Reveal delay={240}>
              <p style={{ fontFamily: 'var(--rt-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--rt-pine)', marginTop: 18 }}>
                — Jada Kouba, LCMHC · LCPC
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="tintband wcband wc-top">
        <img className="wc-art" src="/img/wc-sweep.jpg" alt="" aria-hidden="true" loading="lazy" />
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,6vw,80px)' }} data-collapse>
          <div>
            <Reveal><div className="kicker">Core principles</div></Reveal>
            <Reveal as="h2" className="d2" delay={60}>Trust is the heart of it</Reveal>
            <Reveal as="p">
              As a counselor, I love what I do and care deeply for the people I work with. My faith is an
              important part of who I am, and it guides me as I walk alongside clients in their journey
              toward healing.
            </Reveal>
            <Reveal as="p" delay={60}>
              I believe trust is at the heart of the counseling relationship, and I strive to create a
              safe space where clients feel seen, heard, and supported. Nothing is more meaningful to me
              than seeing someone find peace, clarity, and renewed strength through the counseling
              process.
            </Reveal>
          </div>
          <div>
            <Reveal><div className="kicker">Therapeutic techniques</div></Reveal>
            <Reveal as="h2" className="d2" delay={60}>Integrative, never one-size-fits-all</Reveal>
            <Reveal as="p">
              In addition to my Christian worldview, I practice as an integrative and holistic therapist.
              Rather than taking a &ldquo;one-size-fits-all&rdquo; approach, I draw from several methods —
              including Psychodynamic Therapy, Mindfulness-Based Cognitive Behavioral Therapy, and
              Dialectical Behavior Therapy.
            </Reveal>
            <Reveal as="p" delay={60}>
              I spend time getting to know each client and their unique story, then tailor therapy to
              meet those specific needs. My goal is to support lasting healing and transformation in a
              way that honors the whole person — mind, body, and spirit.
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal><div className="kicker">Who I work with</div></Reveal>
          <Reveal as="h2" className="d2" delay={60}>I work with clients who are experiencing…</Reveal>
          <Reveal delay={120}>
            <div style={{ marginTop: 10, maxWidth: 760 }}>
              {struggles.map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
              <Link className="pill more" to="/services/">See services →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
