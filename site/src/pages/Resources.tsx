import { Reveal } from '@/components/Reveal'
import { usePageMeta } from '@/hooks/usePageMeta'
import CtaBand from '@/components/CtaBand'

const faqs = [
  {
    q: 'How long is a typical counseling session?',
    a: 'Counseling sessions last 55 minutes, which also accounts for scheduling at the end of the session.',
  },
  {
    q: 'What should I expect during my first counseling session?',
    a: 'The first session is an opportunity to build rapport: exploring your background, family history, what brings you in, and your goals for therapy. The best predictor of success in counseling is a strong, collaborative relationship, so the early focus is on building trust, understanding your story more deeply, and identifying the strategies that fit your goals. It can feel intimidating to open up at first. That&rsquo;s normal, and the pace is always yours.',
  },
  {
    q: 'Will the things I say in session remain private?',
    a: 'Everything discussed in session remains private and confidential. The only limits to confidentiality are if a client is a danger to themselves or others, or if abuse is suspected.',
  },
  {
    q: 'How often will I need counseling?',
    a: 'Session frequency is personalized and decided together, considering symptoms, goals, and progress over time. Sessions may be more frequent at first and become less so as progress builds. There is never an obligation to commit to a specific frequency.',
  },
  {
    q: 'How do I know if counseling will work for me?',
    a: 'Counseling isn&rsquo;t about a &ldquo;quick fix.&rdquo; It&rsquo;s about creating a safe space to explore what&rsquo;s weighing on you, gain clarity, and develop tools that actually fit your life. For many people, simply having someone truly listen without judgment is the first step toward healing.',
  },
  {
    q: 'How much does counseling cost?',
    a: 'Individual counseling sessions are $135.00 and premarital counseling sessions are $165.00. Fees are due at the time of service. Session invoices (superbills) can be submitted to your insurance company for reimbursement, though coverage varies by plan and can&rsquo;t be guaranteed.',
  },
  {
    q: 'Is it normal to feel nervous about starting counseling?',
    a: 'Yes, completely normal. Many people feel a mix of anticipation and anxiety when reaching out for help. You might wonder what to expect, whether you&rsquo;ll open up easily, or if counseling will really help. These feelings don&rsquo;t mean you&rsquo;re not ready; they&rsquo;re a sign you&rsquo;re stepping into something new and meaningful.',
  },
  {
    q: 'What do I talk about in counseling?',
    a: 'Anything that feels important to you. Some people start with a specific struggle; others just know they want life to feel better but aren&rsquo;t sure where to begin. There&rsquo;s no wrong topic in counseling. If it matters to you, it matters here.',
  },
  {
    q: 'How should I prepare for my first session?',
    a: 'Nothing special is needed to prepare; simply showing up is already a big step. If it helps, you can spend a little time reflecting beforehand, or bring a notebook to jot down insights and tools you find helpful along the way.',
  },
  {
    q: 'Do I need to be a Christian to work with Jada?',
    a: 'Absolutely not. Christian counseling is available for those who desire it, but it is never a requirement to become a client; clients come from many different backgrounds. The only request is a willingness to heal, learn, and grow. Therapy should leave you with the tools and confidence to move forward and reach your own goals.',
  },
]

export default function Resources() {
  usePageMeta(
    'Pricing & FAQs · Rising Tide Counseling',
    'Transparent counseling fees ($135 individual, $165 premarital) with superbills provided, plus answers to common questions about starting online therapy with Jada Kouba.',
  )
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><img className="squig" src="/img/squiggle.png" alt="" /></Reveal>
          <Reveal><div className="kicker">Resources</div></Reveal>
          <Reveal as="h1" className="d1" delay={80}>Pricing &amp; <em>FAQs</em></Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,6vw,90px)', alignItems: 'start' }} data-collapse>
          <div>
            <Reveal><div className="kicker">Simple, transparent fees</div></Reveal>
            <Reveal as="h2" className="d2" delay={60}>Self-pay, stated plainly, <em>with superbills provided.</em></Reveal>
            <Reveal as="p" className="measure">
              Time here is spent where it matters most: directly with clients. For that reason, Rising
              Tide doesn&rsquo;t bill insurance companies, since the billing process takes valuable time
              away from client care.
            </Reveal>
            <Reveal as="p" className="measure" delay={60}>
              Clients who wish to use their insurance benefits receive a superbill, an itemized receipt
              of services, to submit to their provider for potential reimbursement. Reimbursement
              isn&rsquo;t guaranteed and depends on the plan, though many clients successfully receive it.
            </Reveal>
            <Reveal as="p" className="measure fine" delay={120}>
              Payment is due at the time of service. Clients may keep a card securely on file for
              automatic payment, or log in to pay online anytime.
            </Reveal>
          </div>
          <Reveal soak>
            <div className="fee-table">
              <div className="fee-row">
                <div className="what">Individual counseling<small>60-minute virtual session</small></div>
                <div className="amt">$135</div>
              </div>
              <div className="fee-row">
                <div className="what">Premarital counseling<small>60-minute virtual session</small></div>
                <div className="amt">$165</div>
              </div>
              <div className="fee-row">
                <div className="what">First consult<small>See whether we&rsquo;re the right fit</small></div>
                <div className="amt free">Free</div>
              </div>
            </div>
            <p className="fine" style={{ marginTop: 14 }}>
              Sessions run 55 minutes, with time reserved for scheduling at the end.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="tintband wcband wc-top" id="faqs">
        <img className="wc-art" src="/img/wc-sweep.jpg" alt="" aria-hidden="true" loading="lazy" />
        <div className="wrap">
          <Reveal><div className="kicker" style={{ textAlign: 'center' }}>Commonly asked questions</div></Reveal>
          <Reveal as="h2" className="d2" delay={60}>
            <span style={{ display: 'block', textAlign: 'center' }}>It&rsquo;s normal to wonder <em>how this works</em></span>
          </Reveal>
          <Reveal delay={120}>
            <div className="faq" style={{ maxWidth: 760, margin: '30px auto 0' }}>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="a" dangerouslySetInnerHTML={{ __html: f.a }} />
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
