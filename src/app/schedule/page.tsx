import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '../../data/site'

export const metadata: Metadata = {
  title: 'Schedule — CrestBytes',
  description: 'Choose a time that works for you and we\'ll walk through your goals, timeline, and how CrestBytes can help.',
}

export default function Schedule() {
  return (
    <section className="page-section" aria-labelledby="schedule-heading">
      <div className="container page-section__inner">
        <p className="page-section__eyebrow">Schedule</p>
        <h1 id="schedule-heading" className="page-section__title">
          Let&apos;s talk about your project.
        </h1>
        <p className="page-section__lead">
          Choose a time that works for you and we&apos;ll walk through your
          goals, timeline, and how CrestBytes can help.
        </p>

        {siteConfig.bookingUrl ? (
          <div className="schedule-embed">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--primary"
            >
              Open Scheduling Page
            </a>
          </div>
        ) : (
          <div className="schedule-unavailable">
            <p className="schedule-unavailable__title">
              Online scheduling is being set up.
            </p>
            <p className="schedule-unavailable__body">
              In the meantime, reach out directly and we&apos;ll arrange a
              time that works for you.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Contact Us Instead
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
