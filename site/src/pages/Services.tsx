import { Reveal, usePageMeta } from '../lib'
import CtaBand from '../components/CtaBand'

const expertise = [
  'Anxiety', 'Depression', 'Stress management and coping', 'ADHD/ADD', 'Grief and loss',
  'Attachment/parenting support and guidance', 'Emotional regulation',
  'Obsessive-compulsive disorder (OCD)', 'Christian counseling and discipleship',
  'Self-esteem and confidence', 'Co-dependency', 'Life transitions', 'Career challenges',
  'Illness or chronic pain', 'Relationship issues', 'Healing from narcissistic abuse',
]

const services = [
  {
    name: 'Individual counseling',
    copy: 'Individual therapy — one-on-one counseling — is a therapeutic process in which you work directly with me to address personal challenges and emotional struggles. It provides a safe, confidential environment to explore your thoughts, feelings, behaviors, and experiences, and to build a way forward.',
  },
  {
    name: 'Couples counseling',
    copy: 'Couples counseling — also known as marriage counseling or relationship therapy — helps partners improve their relationship and resolve conflict. It provides a structured, supportive environment where couples can work through their issues with the guidance of a trained therapist.',
  },
  {
    name: 'Christian counseling',
    copy: 'Christian counseling incorporates Biblical principles into the counseling process. It provides guidance and support for emotional, mental, or spiritual challenges — grounded in Biblical truth, woven together with evidence-based clinical care.',
  },
  {
    name: 'Parental support counseling',
    copy: 'Parental support counseling empowers parents with the tools they need for effective parenting — enhancing family bonds while promoting healthy child development.',
  },
]

export default function Services() {
  usePageMeta(
    'Counseling Services — Rising Tide Counseling',
    'Individual, couples, Christian, and parental support counseling — online across Florida and Maine. Evidence-based approaches integrated with Biblical truth and grace.',
  )
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Reveal><img className="squig" src="/img/squiggle.png" alt="" /></Reveal>
          <Reveal><div className="kicker">Counseling services</div></Reveal>
          <Reveal as="h1" className="d1" delay={80}>
            Counseling that integrates evidence-based approaches with <em>Biblical truth and grace</em>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="svc-grid" style={{ marginTop: 0 }}>
            {services.map((s, i) => (
              <Reveal key={s.name} className="svc" delay={i * 80}>
                <h3 className="d3">{s.name}</h3>
                <p>{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="photoband">
        <img src="/img/heart-sand.jpg" alt="" style={{ objectPosition: 'center 62%' }} loading="lazy" />
      </div>

      <section style={{ paddingTop: '3rem' }}>
        <div className="wrap">
          <Reveal><div className="kicker">Areas of expertise</div></Reveal>
          <Reveal as="h2" className="d2" delay={60}>Where I can help</Reveal>
          <Reveal delay={120}>
            <div style={{ marginTop: 10, maxWidth: 820 }}>
              {expertise.map((e) => (
                <span key={e} className="pill">{e}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
