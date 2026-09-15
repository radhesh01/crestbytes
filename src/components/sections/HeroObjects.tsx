'use client'

import React from 'react'

/**
 * HeroConnectedBackdrop:
 * Invisible digital ecosystem connecting the peripheral nodes and central typography.
 * Uses delicate partial arcs, connection conduits, micro-coordinates, and a subtle travelling signal.
 */
export function HeroConnectedBackdrop({ className = '' }: { className?: string }) {
  return (
    <div className={`hero-backdrop-network ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="hero-backdrop-svg"
      >
        <defs>
          {/* Subtle gradient for conduit lines */}
          <linearGradient id="conduit-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
            <stop offset="70%" stopColor="var(--accent)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="signal-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. FAINT PARTIAL ORBITAL ARCS (Non-intrusive, discovered rather than noticed) */}
        <g className="hero-arcs" opacity="0.6">
          {/* Inner partial arc top-right */}
          <path
            d="M 620 220 A 340 340 0 0 1 1020 450"
            stroke="url(#arc-grad)"
            strokeWidth="1"
            strokeDasharray="4 8"
            fill="none"
          />
          {/* Outer partial arc bottom-left */}
          <path
            d="M 420 680 A 380 380 0 0 1 240 450"
            stroke="url(#conduit-grad-1)"
            strokeWidth="1"
            strokeDasharray="2 6"
            fill="none"
          />
          {/* Delicate faint tangent segment */}
          <path
            d="M 880 620 A 340 340 0 0 1 720 740"
            stroke="var(--accent)"
            strokeWidth="0.75"
            strokeDasharray="1 5"
            opacity="0.25"
            fill="none"
          />
        </g>

        {/* 2. CONDUIT PATHWAYS CONNECTING KEY OBJECTS */}
        <g className="hero-conduits">
          {/* Top-left node to central orbital arc */}
          <path
            id="path-telemetry-center"
            d="M 220 180 C 380 180, 480 240, 620 220"
            stroke="var(--accent)"
            strokeWidth="0.75"
            strokeDasharray="3 6"
            strokeOpacity="0.2"
            fill="none"
          />

          {/* Central orbit to bottom-right interface fragment */}
          <path
            id="path-center-interface"
            d="M 1020 450 C 1120 520, 1160 580, 1220 680"
            stroke="url(#conduit-grad-1)"
            strokeWidth="0.75"
            fill="none"
          />

          {/* Bottom-left telemetry to lower center bus */}
          <path
            id="path-diag-bus"
            d="M 260 700 C 400 700, 520 740, 720 740"
            stroke="var(--accent)"
            strokeWidth="0.75"
            strokeDasharray="2 4"
            strokeOpacity="0.18"
            fill="none"
          />

          {/* TRAVELLING SIGNAL PULSE along conduit path-center-interface */}
          <circle r="2.5" fill="var(--accent)">
            <animateMotion
              dur="9s"
              repeatCount="indefinite"
              path="M 620 220 C 780 200, 920 340, 1020 450 C 1120 520, 1160 580, 1220 680"
            />
            <animate
              attributeName="opacity"
              values="0;0.9;0.7;0.9;0"
              keyTimes="0;0.2;0.5;0.8;1"
              dur="9s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Secondary micro signal traveling top path */}
          <circle r="1.5" fill="var(--accent)">
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              path="M 220 180 C 380 180, 480 240, 620 220"
            />
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              keyTimes="0;0.5;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* 3. COORDINATES & ARCHITECTURAL GRID ANCHORS */}
        <g className="hero-anchors" opacity="0.35">
          {/* Top-left crosshair */}
          <g transform="translate(140, 120)">
            <line x1="-6" y1="0" x2="6" y2="0" stroke="var(--accent)" strokeWidth="1" />
            <line x1="0" y1="-6" x2="0" y2="6" stroke="var(--accent)" strokeWidth="1" />
            <text x="10" y="4" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.1em">
              SEC.01 // 40.71°N
            </text>
          </g>

          {/* Top-right coordinate marker */}
          <g transform="translate(1280, 140)">
            <circle cx="0" cy="0" r="2" fill="var(--accent)" />
            <circle cx="0" cy="0" r="7" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2 2" />
            <text x="-70" y="3" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="0.1em">
              SYS.SYNC
            </text>
          </g>

          {/* Bottom-right grid anchor */}
          <g transform="translate(1320, 780)">
            <line x1="-5" y1="0" x2="5" y2="0" stroke="var(--border-subtle)" strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="var(--border-subtle)" strokeWidth="1" />
          </g>

          {/* Bottom-left datum */}
          <g transform="translate(160, 800)">
            <rect x="0" y="0" width="3" height="3" fill="var(--accent)" opacity="0.6" />
            <text x="10" y="3" fill="var(--text-muted)" fontSize="8" fontFamily="var(--font-mono)">
              SYS_ENV // PROD
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

/**
 * HeroCodeFragment:
 * Replaces the literal <div> with an abstract, elegant editorial code token.
 * Positioned in the upper right peripheral space.
 */
export function HeroCodeFragment({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`hero-token hero-token--code floater ${className}`} style={style} aria-hidden="true">
      <div className="hero-token__inner">
        <div className="hero-token__header">
          <span className="hero-token__indicator" />
          <span className="hero-token__label">core.config.ts</span>
        </div>
        <div className="hero-token__code">
          <span className="code-kw">const</span> <span className="code-var">experience</span> = {'{'}
          <br />
          &nbsp;&nbsp;<span className="code-prop">precision</span>: <span className="code-str">"editorial"</span>,
          <br />
          &nbsp;&nbsp;<span className="code-prop">performance</span>: <span className="code-num">1.0</span>
          <br />
          {'}'}
        </div>
      </div>
    </div>
  )
}

/**
 * HeroInterfaceFragment:
 * Replaces heavy rectangular browser mockup with a delicate, open wireframe UI fragment.
 * Positioned in lower right space.
 */
export function HeroInterfaceFragment({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`hero-token hero-token--ui floater ${className}`} style={style} aria-hidden="true">
      <div className="hero-token__inner hero-ui-wireframe">
        {/* Subtle corner brackets rather than heavy box */}
        <div className="hero-ui-corners">
          <svg viewBox="0 0 160 90" fill="none" className="hero-ui-svg">
            {/* Corner brackets */}
            <path d="M 0 12 L 0 0 L 12 0" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.7" />
            <path d="M 148 0 L 160 0 L 160 12" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.7" />
            <path d="M 160 78 L 160 90 L 148 90" stroke="var(--border-subtle)" strokeWidth="1" />
            <path d="M 12 90 L 0 90 L 0 78" stroke="var(--border-subtle)" strokeWidth="1" />

            {/* Wireframe top bar */}
            <line x1="16" y1="12" x2="64" y2="12" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="146" cy="12" r="2" fill="var(--accent)" opacity="0.6" />

            {/* Abstract UI content lines */}
            <rect x="16" y="26" width="70" height="2" fill="var(--text-muted)" opacity="0.25" rx="1" />
            <rect x="16" y="34" width="110" height="2" fill="var(--text-muted)" opacity="0.15" rx="1" />
            <rect x="16" y="42" width="90" height="2" fill="var(--text-muted)" opacity="0.1" rx="1" />

            {/* Subtle interactive action node */}
            <g transform="translate(16, 58)">
              <rect x="0" y="0" width="46" height="16" rx="8" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(88,206,186,0.04)" />
              <line x1="12" y1="8" x2="34" y2="8" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.8" />
            </g>

            {/* Micro pointer icon targeting the button */}
            <path d="M 68 64 L 76 72 L 72 73 L 75 78 L 73 79 L 70 74 L 67 76 Z" fill="var(--accent)" opacity="0.85" />
          </svg>
        </div>
        <div className="hero-ui-meta">
          <span>VIEWPORT [1440]</span>
          <span className="hero-ui-dot" />
        </div>
      </div>
    </div>
  )
}

/**
 * HeroDataDiagnostic:
 * Refined telemetry/performance node.
 * Positioned in lower left space.
 */
export function HeroDataDiagnostic({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`hero-token hero-token--diag floater ${className}`} style={style} aria-hidden="true">
      <div className="hero-diag-card">
        <div className="hero-diag-header">
          <span className="hero-diag-pulse" />
          <span className="hero-diag-title">SYSTEM METRICS</span>
        </div>
        <svg viewBox="0 0 110 32" fill="none" className="hero-diag-graph">
          {/* Subtle grid lines */}
          <line x1="0" y1="8" x2="110" y2="8" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="1 3" />
          <line x1="0" y1="24" x2="110" y2="24" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="1 3" />

          {/* Waveform path */}
          <path
            d="M 0 20 Q 20 18 35 12 T 65 16 T 90 6 L 110 10"
            stroke="var(--accent)"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Metric target dot */}
          <circle cx="90" cy="6" r="2" fill="var(--accent)">
            <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
        <div className="hero-diag-footer">
          <span>LATENCY // 14ms</span>
          <span className="hero-diag-status">OPTIMAL</span>
        </div>
      </div>
    </div>
  )
}

/**
 * HeroOrbitNode:
 * A subtle, elegant orbital node segment.
 * Travels along a delicate arc path smoothly.
 */
export function HeroOrbitNode({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`hero-orbital-field floater ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 400 400" fill="none" className="hero-orbit-svg">
        {/* Very faint segmented orbit arc */}
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="var(--accent)"
          strokeWidth="0.75"
          strokeDasharray="2 12"
          strokeOpacity="0.25"
        />

        {/* Orbit node moving continuously along circle */}
        <g className="anim-orbit-continuous">
          <circle cx="360" cy="200" r="2.5" fill="var(--accent)">
            <animate attributeName="opacity" values="0.4;0.95;0.4" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="360" cy="200" r="6" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}

/**
 * HeroNodeNetwork:
 * Multi-node cluster with curved connections.
 * Positioned in upper left.
 */
export function HeroNodeNetwork({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`hero-node-cluster floater ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 140 100" fill="none">
        {/* Inter-node paths */}
        <path d="M 20 45 Q 60 15 110 30" stroke="var(--accent)" strokeWidth="0.75" strokeOpacity="0.35" strokeDasharray="3 3" />
        <path d="M 20 45 Q 50 85 100 75" stroke="var(--border-subtle)" strokeWidth="0.75" />
        <line x1="110" y1="30" x2="100" y2="75" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="2 4" />

        {/* Node A (primary) */}
        <circle cx="20" cy="45" r="3" fill="var(--accent)" />
        <circle cx="20" cy="45" r="7" stroke="var(--accent)" strokeWidth="0.75" strokeOpacity="0.4" />

        {/* Node B */}
        <circle cx="110" cy="30" r="2" fill="var(--text-muted)" />
        <text x="116" y="32" fill="var(--text-muted)" fontSize="7" fontFamily="var(--font-mono)">N.01</text>

        {/* Node C */}
        <circle cx="100" cy="75" r="2" fill="var(--text-muted)" />
        <text x="106" y="78" fill="var(--text-muted)" fontSize="7" fontFamily="var(--font-mono)">N.02</text>
      </svg>
    </div>
  )
}
