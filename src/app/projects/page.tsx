import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '../../data/projects'

export const metadata: Metadata = {
  title: 'Projects — CrestBytes',
  description: 'A collection of digital experiences designed and built by CrestBytes.',
}

export default function Projects() {
  return (
    <section className="page-section" aria-labelledby="projects-heading">
      <div className="container page-section__inner">
        <p className="page-section__eyebrow">Selected Work</p>
        <h1 id="projects-heading" className="page-section__title">
          Projects
        </h1>
        <p className="page-section__lead">
          A collection of digital experiences designed and built by
          CrestBytes.
        </p>

        {projects.length === 0 ? (
          <div className="projects-empty">
            <p className="projects-empty__title">
              New work is currently in progress.
            </p>
            <p className="projects-empty__body">
              Selected projects will be published here as they launch. In
              the meantime, get in touch to discuss your own project.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Start a Project
            </Link>
          </div>
        ) : (
          <ul className="projects-grid">
            {projects.map((project) => (
              <li key={project.id} className="projects-grid__item">
                <h2>{project.name}</h2>
                <p>{project.shortDescription}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
