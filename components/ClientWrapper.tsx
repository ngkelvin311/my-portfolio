'use client'
import { useState, useEffect } from 'react'
import LoadingScreen from './LoadingScreen'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const navType = navEntry?.type
    const isReload = navType === 'reload'
    const isBackForward = navType === 'back_forward'
    const hasSeenIt = !!sessionStorage.getItem('kn-loaded')

    if (!isBackForward && (isReload || !hasSeenIt)) {
      sessionStorage.setItem('kn-loaded', '1')
      setShouldAnimate(true)
    } else {
      setLoaded(true)
    }
  }, [])

  const handleComplete = () => {
    setLoaded(true)
  }

  return (
    <>
      {shouldAnimate && !loaded && <LoadingScreen onComplete={handleComplete} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        {children}
      </div>
    </>
  )
}