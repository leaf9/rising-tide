import { Link } from 'react-router-dom'
import { Reveal } from '@/components/Reveal'
import { usePageMeta } from '@/hooks/usePageMeta'
import CtaBand from '@/components/CtaBand'
import { HERO_VARIANT } from '@/config'

export default function Home() {
  usePageMeta(
    'Rising Tide Counseling · Online Christian Counseling in Florida & Maine',
    'Clinical counseling from a Biblical worldview with Jada Kouba, LCMHC · LCPC. Online individual, premarital, and Christian counseling, licensed in Florida and Maine. Request a free consult.',
  )
  return (
    <>
      {/* ============ HERO — dark cover style (HERO_VARIANT in config.ts flips back to light) ============ */}
      <section className={`hero ${HERO_VARIANT === 'dark' ? 'hero-dark' : ''}`}>
        <div className="hero-bg" aria-hidden="true">
          <img src="/img/wave-aerial.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero-solo">
          <div className="hero-copy">
            <Reveal><div className="kicker">Jada Kouba · LCMHC · LCPC · Licensed in Florida &amp; Maine</div></Reveal>
            <Reveal as="h1" className="d1" delay={90}>
              <span style={{ display: 'inline-block', maxWidth: '26ch' }}>
                Clinical counseling from a <em>Biblical worldview</em>
              </span>
            </Reveal>
            <Reveal as="p" className="sub" delay={180}>
              Faith-based counseling for people navigating life&rsquo;s hardest seasons. Professional
              therapy that weaves clinical expertise with God&rsquo;s truth and grace, in a safe,
              unhurried space to process, heal, and rise.
            </Reveal>
            <Reveal delay={270}>
              <div className="cta-row">
                <Link className="btn btn-fill" to="/contact/">Request a Free Consult</Link>
                <Link className="btn btn-ghost" to="/resources/">Pricing &amp; FAQs</Link>
              </div>
            </Reveal>
            <Reveal as="p" className="trust" delay={360}>
              <b>20+ years</b> in mental health &nbsp;·&nbsp; <b>Virtual</b> sessions &nbsp;·&nbsp; <b>Self-pay</b>, superbills provided
            </Reveal>
          </div>
          {/* Jada hero cutout — hidden for now per Ben (Aug 27); asset stays at /img/jada-hero.png.
          <Reveal soak className="hero-jada">
            <img src="/img/jada-hero.png" alt="Jada Kouba, licensed clinical mental health counselor" />
          </Reveal> */}
        </div>
      </section>

      {/* ============ SERVICES OVERVIEW ============ */}
      <section className="coolband coolband-fade">
        <div className="wrap">
          <Reveal><div className="kicker">Counseling services</div></Reveal>
          <Reveal as="h2" className="d2" delay={60}>Evidence-based approaches, grounded on <em>Biblical truth and with grace</em></Reveal>
          <div className="svc-grid">
            <Reveal className="svc"><h3 className="d3">Individual counseling</h3><p>One-on-one therapy in a safe, confidential space for exploring thoughts, feelings, and experiences, and building a way forward.</p></Reveal>
            <Reveal className="svc" delay={80}><h3 className="d3">Premarital counseling</h3><p>For couples preparing to marry: building a strong foundation in communication, expectations, and shared faith.</p></Reveal>
            <Reveal className="svc" delay={160}><h3 className="d3">Christian counseling &amp; discipleship</h3><p>Therapy grounded in Biblical truth, bringing faith and clinical care together.</p></Reveal>
            <Reveal className="svc" delay={240}><h3 className="d3">Parental support</h3><p>Practical tools and steady guidance for the hardest job there is.</p></Reveal>
          </div>
          <Reveal delay={120}>
            <div style={{ marginTop: 34 }}>
              <Link className="pill" to="/services/">Anxiety</Link>
              <Link className="pill" to="/services/">Depression</Link>
              <Link className="pill" to="/services/">Grief &amp; loss</Link>
              <Link className="pill" to="/services/">Narcissistic abuse recovery</Link>
              <Link className="pill" to="/services/">Adult ADHD</Link>
              <Link className="pill" to="/services/">Self-esteem</Link>
              <Link className="pill more" to="/services/">All 16 areas of expertise →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MEET JADA ============ */}
      <section className="meet">
        <div className="wrap meet-grid" data-collapse>
          <Reveal soak className="meet-photo">
            <img src="/img/jada-porch.jpg" alt="Jada Kouba seated in her office" fetchPriority="high" />
          </Reveal>
          <div className="meet-copy">
            <Reveal><div className="kicker">Meet Jada</div></Reveal>
            <Reveal as="h2" className="d2">Twenty years of walking alongside people, <em>so no one walks alone.</em></Reveal>
            <Reveal as="p" className="measure">
              I&rsquo;m Jada Kouba, a dually licensed counselor (LCMHC, LCPC) serving clients in Florida
              and Maine. My heart is to help you not only manage your mental health, but experience real
              transformation through <span className="painted">God&rsquo;s truth and grace</span>.
            </Reveal>
            <Reveal as="p" className="measure" delay={80}>
              Clients describe me as compassionate, supportive, and committed to creating a safe space
              for healing, whether that means walking through grief, wrestling with anxiety, or
              rebuilding after a difficult relationship.
            </Reveal>
            <Reveal delay={160}>
              <div style={{ marginTop: 24 }}>
                <Link className="btn btn-ghost" to="/about/">More about Jada</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ QUOTE — watercolor moment ============ */}
      <section className="wcband tintband">
        <img className="wc-art" src="/img/wc-sweep.jpg" alt="" aria-hidden="true" loading="lazy" />
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal as="blockquote" className="d2" >
            <span style={{ fontStyle: 'italic', fontWeight: 400, display: 'inline-block', maxWidth: '34ch', lineHeight: 1.45 }}>
              &ldquo;True healing begins when we give ourselves space to process, reflect, and{' '}
              <span className="painted">invite God into the journey</span>.&rdquo;
            </span>
          </Reveal>
          <Reveal delay={100}><div className="kicker" style={{ marginTop: 18 }}>The heart of this practice</div></Reveal>
        </div>
      </section>

      {/* ============ HOW COUNSELING WORKS ============ */}
      <section>
        <div className="wrap">
          <Reveal><div className="kicker">How counseling works</div></Reveal>
          <Reveal as="h2" className="d2" delay={60}>Every client is unique, <em>and so is the path forward.</em></Reveal>
          <Reveal as="p" className="measure" delay={120}>
            An integrative, holistic approach means therapy is shaped around each client&rsquo;s goals
            for healing and growth, then built into a plan that fits a real life.
          </Reveal>
          <div className="cards3">
            <Reveal className="vcard">
              <img className="mark" src="/img/squiggle.png" alt="" />
              <h3 className="d3">Client-centered</h3>
              <p>Anxiety, depression, relational struggles: therapy begins with each client&rsquo;s story, not a template.</p>
            </Reveal>
            <Reveal className="vcard" delay={90}>
              <img className="mark" src="/img/squiggle.png" alt="" />
              <h3 className="d3">Goal-focused</h3>
              <p>For people motivated to learn, grow, and heal through faith-based therapy, with progress they can actually name.</p>
            </Reveal>
            <Reveal className="vcard" delay={180}>
              <img className="mark" src="/img/squiggle.png" alt="" />
              <h3 className="d3">Education-based</h3>
              <p>Clients learn to understand themselves more deeply, building skills that outlast the sessions themselves.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WAVE PHOTO BREATH ============ */}
      <div className="photoband" style={{ height: 'clamp(320px, 46vw, 560px)' }}>
        <img src="/img/heart-sand.jpg" alt="" style={{ objectPosition: 'center 72%' }} loading="lazy" />
      </div>

      {/* ============ TESTIMONIALS ============ */}
      <section style={{ paddingTop: '2rem' }}>
        <div className="wrap">
          <Reveal><div className="kicker" style={{ textAlign: 'center' }}>Words from clients</div></Reveal>
          <Reveal as="h2" className="d2" delay={60}>
            <span style={{ display: 'block', textAlign: 'center' }}>What healing has looked like</span>
          </Reveal>
          <div className="tgrid">
            <Reveal className="tcard">
              <p className="tq">&ldquo;I came to counseling feeling broken after my divorce. Jada walked beside me with wisdom, empathy, and a Christ-centered perspective. Today, I&rsquo;m rediscovering joy and purpose.&rdquo;</p>
              <p className="ta">— M.C.</p>
            </Reveal>
            <Reveal className="tcard" delay={90}>
              <p className="tq">&ldquo;I came in overwhelmed with anxiety. Jada listened without judgment and gave me strategies that actually work.&rdquo;</p>
              <p className="ta">— B.I.</p>
            </Reveal>
            <Reveal className="tcard" delay={180}>
              <p className="tq">&ldquo;Jada gently helped me untangle lies I&rsquo;d believed for years and replace them with God&rsquo;s truth about who I am. I feel lighter and freer than ever.&rdquo;</p>
              <p className="ta">— E.N.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
