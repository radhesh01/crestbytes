import Button from '../ui/Button'

function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">Digital Experiences / Web Development</p>
          <h1 className="hero__headline">
            Websites built to make brands <span>impossible to ignore.</span>
          </h1>
          <p className="hero__subtext">
            CrestBytes designs and develops premium digital experiences for
            ambitious brands — combining strategy, design, development, and
            performance.
          </p>
          <div className="hero__actions">
            <Button href="#contact" variant="primary">
              Start a Project
            </Button>
            <Button href="#work" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <svg
            className="hero__graphic"
            viewBox="0 0 480 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="479" height="479" rx="2" stroke="#2A2A2A" />
            <line x1="0" y1="160" x2="480" y2="160" stroke="#2A2A2A" />
            <line x1="0" y1="320" x2="480" y2="320" stroke="#2A2A2A" />
            <line x1="160" y1="0" x2="160" y2="480" stroke="#2A2A2A" />
            <line x1="320" y1="0" x2="320" y2="480" stroke="#2A2A2A" />

            <g className="hero__graphic-frame">
              <rect x="60" y="60" width="200" height="140" rx="2" stroke="#3CBFA6" strokeWidth="1.5" />
              <line x1="60" y1="92" x2="260" y2="92" stroke="#3CBFA6" strokeWidth="1" />
              <circle cx="76" cy="76" r="4" fill="#58CEBA" />
              <circle cx="92" cy="76" r="4" fill="#2A2A2A" />
              <circle cx="108" cy="76" r="4" fill="#2A2A2A" />
            </g>

            <g className="hero__graphic-frame hero__graphic-frame--delay">
              <rect x="220" y="220" width="200" height="160" rx="2" stroke="#6BD8C7" strokeWidth="1.5" />
              <line x1="220" y1="252" x2="420" y2="252" stroke="#6BD8C7" strokeWidth="1" />
              <rect x="236" y="268" width="140" height="10" fill="#2A2A2A" />
              <rect x="236" y="288" width="100" height="10" fill="#2A2A2A" />
            </g>

            <g className="hero__graphic-pulse">
              <circle cx="240" cy="240" r="6" fill="#58CEBA" />
              <circle cx="240" cy="240" r="18" stroke="#58CEBA" strokeWidth="1" />
            </g>

            <path
              className="hero__graphic-path"
              d="M100 380 C 160 380, 180 300, 240 300 S 320 180, 380 100"
              stroke="#3CBFA6"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero