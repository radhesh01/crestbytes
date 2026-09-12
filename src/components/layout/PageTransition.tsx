'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: ReactNode
}

function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [displayKey, setDisplayKey] = useState(pathname)

  useEffect(() => {
    setDisplayKey(pathname)
  }, [pathname])

  return (
    <div key={displayKey} className="page-transition">
      {children}
    </div>
  )
}

export default PageTransition