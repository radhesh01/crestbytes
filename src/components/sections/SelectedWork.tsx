'use client'

import React, { useState } from 'react'
import { projects } from '../../data/projects'
import Reveal from '../ui/Reveal'

export default function SelectedWork() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="selected-work" aria-labelledby="selected-work-heading">
      <div className="container selected-work__container">
        {/* Section Header */}
        <header className="selected-work__header">
          <Reveal direction="none">
            <div className="selected-work__tag">
              <span className="selected-work__tag-dot" aria-hidden="true" />
              <span className="selected-work__tag-index">02</span>
              <span className="selected-work__tag-separator" aria-hidden="true">/</span>
              <span className="selected-work__tag-label">SELECTED WORK</span>
            </div>
          </Reveal>

          <div className="selected-work__title-row">
            <Reveal delay={100}>
              <h2 id="selected-work-heading" className="selected-work__title">
                Built for different problems.{' '}
                <span className="selected-work__title-accent">Designed for real people.</span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="selected-work__lead">
                Every project is an engineered balance of brand identity, high-conversion UX, and responsive front-end craft.
                Explore our recent digital agency and healthcare platform releases.
              </p>
            </Reveal>
          </div>
        </header>

        {/* Projects Showcase Stream */}
        <div className="selected-work__list">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1
            const desktopErrKey = `${project.id}-desktop`
            const mobileErrKey = `${project.id}-mobile`

            return (
              <article
                key={project.id}
                className={`project-feature ${isReversed ? 'project-feature--reversed' : ''}`}
                aria-labelledby={`project-${project.id}-title`}
              >
                {/* 1. Visual Presentation (Desktop + Layered Mobile Screenshot) */}
                <div className="project-feature__visual-wrap">
                  <Reveal delay={200} direction={isReversed ? 'left' : 'right'}>
                    <div className="project-feature__canvas">
                      {/* Desktop Browser Frame */}
                      <figure className="project-feature__desktop-frame">
                        <div className="project-feature__browser-chrome" aria-hidden="true">
                          <div className="project-feature__chrome-dots">
                            <span />
                            <span />
                            <span />
                          </div>
                          <div className="project-feature__chrome-url">
                            {project.url.replace('https://', '')}
                          </div>
                        </div>

                        <div className="project-feature__img-box">
                          {!imgErrors[desktopErrKey] ? (
                            <img
                              src={project.desktopScreenshot.src}
                              alt={project.desktopScreenshot.alt}
                              loading="lazy"
                              decoding="async"
                              className="project-feature__desktop-img"
                              onError={() => handleImageError(desktopErrKey)}
                            />
                          ) : (
                            /* Elegant Architectural Fallback */
                            <div className="project-feature__mock-fallback project-feature__mock-fallback--desktop">
                              <div className="mock-grid" aria-hidden="true" />
                              <div className="mock-badge">{project.category}</div>
                              <div className="mock-brand">{project.name}</div>
                              <div className="mock-tagline">Desktop Architecture Preview</div>
                              <div className="mock-indicator">
                                <span className="mock-pulse" />
                                <span>Awaiting local asset: {project.desktopScreenshot.src}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <figcaption className="visually-hidden">
                          {project.desktopScreenshot.alt}
                        </figcaption>
                      </figure>

                      {/* Layered Mobile Device Frame */}
                      <figure className="project-feature__mobile-frame">
                        <div className="project-feature__mobile-notch" aria-hidden="true">
                          <span />
                        </div>
                        <div className="project-feature__mobile-img-box">
                          {!imgErrors[mobileErrKey] ? (
                            <img
                              src={project.mobileScreenshot.src}
                              alt={project.mobileScreenshot.alt}
                              loading="lazy"
                              decoding="async"
                              className="project-feature__mobile-img"
                              onError={() => handleImageError(mobileErrKey)}
                            />
                          ) : (
                            /* Mobile Mock Fallback */
                            <div className="project-feature__mock-fallback project-feature__mock-fallback--mobile">
                              <div className="mock-mobile-header" />
                              <div className="mock-mobile-body">
                                <span>390px Viewport</span>
                                <strong>{project.name}</strong>
                              </div>
                            </div>
                          )}
                        </div>
                        <figcaption className="visually-hidden">
                          {project.mobileScreenshot.alt}
                        </figcaption>
                      </figure>
                    </div>
                  </Reveal>
                </div>

                {/* 2. Editorial Project Information */}
                <div className="project-feature__info">
                  <Reveal delay={260}>
                    <div className="project-feature__meta">
                      <span className="project-feature__index">0{index + 1}</span>
                      <span className="project-feature__meta-divider" aria-hidden="true">/</span>
                      <span className="project-feature__category">{project.category}</span>
                    </div>
                  </Reveal>

                  <Reveal delay={320}>
                    <h3 id={`project-${project.id}-title`} className="project-feature__title">
                      {project.name}
                    </h3>
                  </Reveal>

                  <Reveal delay={380}>
                    <p className="project-feature__description">{project.description}</p>
                  </Reveal>

                  <Reveal delay={440}>
                    <div className="project-feature__actions">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-feature__cta"
                        aria-label={`Visit live website for ${project.name} (opens in new tab)`}
                      >
                        <span className="project-feature__cta-text">Visit Live Project</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          className="project-feature__cta-icon"
                        >
                          <path
                            d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </Reveal>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
