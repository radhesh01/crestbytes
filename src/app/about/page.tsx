import type { Metadata } from 'next'
import Link from 'next/link'
import { processSteps } from '../../data/process'

export const metadata: Metadata = {
  title: 'About — CrestBytes',
  description: 'CrestBytes is a digital agency focused on designing and developing premium web experiences for ambitious brands.',
}

export default function About() {
  return (
    <section className="page-section" aria-labelledby="about-heading">
      <div className="container page-section__inner">
        <p className="page-section__eyebrow">About</p>
        <h1 id="about-heading" className="page-section__title">
          CrestBytes
        </h1>
        <p className="page-section__lead">
          CrestBytes is a digital agency focused on designing and developing
          premium web experiences for ambitious brands — combining
          strategy, design, development, and performance.
        </p>

        <div className="about-block">
          <h2>Capabilities</h2>
          <p>
            We work across web design, front-end engineering, ecommerce,
            custom web applications, and digital strategy — applying the
            same level of care to every project regardless of size.
          </p>
        </div>

        <div className="about-block">
          <h2>How we work</h2>
          <ol className="about-process-list">
            {processSteps.map((step) => (
              <li key={step.step}>
                <span>{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="page-section__cta">
          <Link href="/contact" className="btn btn--primary">
            Start a Project
          </Link>
          <Link href="/schedule" className="btn btn--secondary">
            Book a Meeting
          </Link>
        </div>
      </div>
    </section>
  )
}
