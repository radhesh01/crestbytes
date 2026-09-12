import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container not-found__inner">
        <p className="not-found__eyebrow">404 Error</p>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__lead">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found__actions">
          <Link href="/" className="btn btn--primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
