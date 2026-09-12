import Link from 'next/link'
import Hero from '../components/sections/Hero'
import { services } from '../data/services'
import { processSteps } from '../data/process'

export default function Home() {
  return (
    <>
      <Hero />
      <div id="hero-end" />

      <section className="home-section" aria-labelledby="home-work-heading">
        <div className="container home-section__inner">
          <div className="home-section__head">
            <p className="home-section__eyebrow">Selected Work</p>
            <h2 id="home-work-heading" className="home-section__title">
              Projects built with intent.
            </h2>
          </div>
          <p className="home-section__lead">
            Every CrestBytes project is designed and engineered around a
            specific brand and business outcome — not a template.
          </p>
          <Link href="/projects" className="home-section__link">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="home-section home-section--alt" aria-labelledby="home-services-heading">
        <div className="container home-section__inner">
          <div className="home-section__head">
            <p className="home-section__eyebrow">Services</p>
            <h2 id="home-services-heading" className="home-section__title">
              End-to-end digital craftsmanship.
            </h2>
          </div>
          <ul className="home-services-list">
            {services.map((service) => (
              <li key={service.id} className="home-services-list__item">
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
              </li>
            ))}
          </ul>
          <Link href="/services" className="home-section__link">
            Explore Services
          </Link>
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-about-heading">
        <div className="container home-section__inner">
          <div className="home-section__head">
            <p className="home-section__eyebrow">About</p>
            <h2 id="home-about-heading" className="home-section__title">
              A studio built around strategy, design, and engineering.
            </h2>
          </div>
          <p className="home-section__lead">
            CrestBytes combines premium design sensibility with disciplined
            front-end engineering to build digital experiences that hold up
            under real use.
          </p>
          <Link href="/about" className="home-section__link">
            More About CrestBytes
          </Link>
        </div>
      </section>

      <section className="home-section home-section--alt" aria-labelledby="home-process-heading">
        <div className="container home-section__inner">
          <div className="home-section__head">
            <p className="home-section__eyebrow">Process</p>
            <h2 id="home-process-heading" className="home-section__title">
              A clear, considered process.
            </h2>
          </div>
          <ol className="home-process-list">
            {processSteps.map((step) => (
              <li key={step.step} className="home-process-list__item">
                <span className="home-process-list__step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-cta" aria-labelledby="home-cta-heading">
        <div className="container home-cta__inner">
          <h2 id="home-cta-heading" className="home-cta__title">
            Ready to build something worth remembering?
          </h2>
          <p className="home-cta__lead">
            Tell us about your project, or find a time that works for a
            conversation.
          </p>
          <div className="home-cta__actions">
            <Link href="/contact" className="btn btn--primary">
              Start a Project
            </Link>
            <Link href="/schedule" className="btn btn--secondary">
              Book a Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
