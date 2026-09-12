import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '../../data/services'

export const metadata: Metadata = {
  title: 'Services — CrestBytes',
  description: 'CrestBytes offers a focused set of services spanning strategy, design, and engineering — each tailored to the specific needs of the project.',
}

export default function Services() {
  return (
    <section className="page-section" aria-labelledby="services-heading">
      <div className="container page-section__inner">
        <p className="page-section__eyebrow">Services</p>
        <h1 id="services-heading" className="page-section__title">
          Capabilities built for ambitious brands.
        </h1>
        <p className="page-section__lead">
          CrestBytes offers a focused set of services spanning strategy,
          design, and engineering — each tailored to the specific needs of
          the project.
        </p>

        <ul className="services-grid">
          {services.map((service) => (
            <li key={service.id} className="services-grid__item">
              <h2>{service.title}</h2>
              <p>{service.shortDescription}</p>
            </li>
          ))}
        </ul>

        <div className="page-section__cta">
          <Link href="/contact" className="btn btn--primary">
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  )
}
