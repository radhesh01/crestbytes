'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  threshold?: number
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  let transform = 'translateY(24px)'
  if (direction === 'down') transform = 'translateY(-24px)'
  if (direction === 'left') transform = 'translateX(24px)'
  if (direction === 'right') transform = 'translateX(-24px)'
  if (direction === 'none') transform = 'translate(0)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : transform,
        transition: `opacity 700ms var(--ease-reveal), transform 700ms var(--ease-reveal)`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
