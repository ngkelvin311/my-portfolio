'use client'
import { useEffect, useRef } from 'react'

interface LoadingScreenProps {
  onComplete?: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const barRef    = useRef<HTMLDivElement>(null)
  const pctRef    = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let alive = true
    const loader = loaderRef.current!
    const bar    = barRef.current!
    const pct    = pctRef.current!

    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const ids = ['kx-k', 'kx-n', 'kx-kg', 'kx-ng']
    ids.forEach(id => {
      const el = document.getElementById(id) as SVGPathElement | null
      if (!el) return
      const len = el.getTotalLength()
      el.style.strokeDasharray = `${len}`
      el.style.strokeDashoffset = `${len}`
      el.style.opacity = '1'
    })

    loader.style.transition = 'opacity 400ms linear'
    requestAnimationFrame(() => {
      if (alive) loader.style.opacity = '1'
    })

    setTimeout(() => {
      if (!alive) return
      ;['kx-k', 'kx-kg'].forEach(id => {
        const el = document.getElementById(id) as SVGPathElement | null
        if (!el) return
        el.style.transition = 'stroke-dashoffset 850ms cubic-bezier(0.37, 0, 0.63, 1)'
        el.style.strokeDashoffset = '0'
      })
    }, 300)

    setTimeout(() => {
      if (!alive) return
      ;['kx-n', 'kx-ng'].forEach(id => {
        const el = document.getElementById(id) as SVGPathElement | null
        if (!el) return
        el.style.transition = 'stroke-dashoffset 850ms cubic-bezier(0.37, 0, 0.63, 1)'
        el.style.strokeDashoffset = '0'
      })
    }, 620)

    setTimeout(() => {
      if (!alive) return
      ;['kx-k', 'kx-n'].forEach(id => {
        const el = document.getElementById(id) as SVGPathElement | null
        if (!el) return
        el.style.transition = 'fill-opacity 300ms ease-in-out'
        el.style.fillOpacity = '1'
      })
      const kg = document.getElementById('kx-kg') as SVGPathElement | null
      if (kg) {
        kg.style.transition = 'fill-opacity 300ms ease-in-out'
        kg.style.fillOpacity = '0.14'
      }
    }, 1470)

    const barDuration = 2200
    const barStart = performance.now() + 1820

    function tickBar(now: number) {
      if (!alive) return
      const elapsed = now - barStart
      if (elapsed < 0) {
        requestAnimationFrame(tickBar)
        return
      }
      const t = Math.min(elapsed / barDuration, 1)
      const val = Math.round(easeInOutCubic(t) * 100)
      bar.style.width = val + '%'
      pct.textContent = String(val).padStart(3, '0') + '%'

      if (t < 1) {
        requestAnimationFrame(tickBar)
      } else {
        setTimeout(() => {
          if (!alive) return
          loader.style.transition = 'opacity 680ms ease-in-out, transform 680ms ease-in-out'
          loader.style.opacity = '0'
          loader.style.transform = 'translateY(-14px)'
          setTimeout(() => {
            if (alive) onComplete?.()
          }, 680)
        }, 380)
      }
    }

    requestAnimationFrame(tickBar)

    return () => { alive = false }
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 112,
        zIndex: 9999,
        opacity: 0,
        fontFamily: "var(--font-mono), ui-monospace, monospace",
      }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <svg
          width="273"
          height="193"
          viewBox="0 0 312 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible', display: 'block' }}
        >
          <defs>
            <filter id="kx-blur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4.5" />
            </filter>
          </defs>

          <path
            id="kx-kg"
            opacity={0}
            d="M53.8348 220.352H0L80.2248 97.9169L2.26227 0H57.9059L113.852 72.4921L133.757 99.884V0H178.996V220.352H133.757V157.395L110.233 131.97L53.8348 220.353V220.352Z"
            fill="white"
            fillOpacity={0}
            stroke="rgba(255,255,255,0.13)"
            strokeWidth={9}
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#kx-blur)"
          />
          <path
            id="kx-ng"
            opacity={0}
            d="M311.408 220.352H266.169L178.102 75.3676V220.352H132.863V0H178.102L266.32 145.287V0H311.408V220.352Z"
            fill="none"
            stroke="rgba(255,255,255,0.13)"
            strokeWidth={9}
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#kx-blur)"
          />

          <path
            id="kx-k"
            opacity={0}
            d="M53.8348 220.352H0L80.2248 97.9169L2.26227 0H57.9059L113.852 72.4921L133.757 99.884V0H178.996V220.352H133.757V157.395L110.233 131.97L53.8348 220.353V220.352Z"
            fill="white"
            fillOpacity={0}
            stroke="rgba(255,255,255,0.92)"
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="kx-n"
            opacity={0}
            d="M311.408 220.352H266.169L178.102 75.3676V220.352H132.863V0H178.102L266.32 145.287V0H311.408V220.352Z"
            fill="white"
            fillOpacity={0}
            stroke="rgba(255,255,255,0.92)"
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        <svg
          viewBox="0 0 184 138"
          style={{
            position: 'absolute',
            top: -25,
            left: -25,
            width: 'calc(100% + 49px)',
            height: 'calc(100% + 49px)',
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          <path d="M10 30 L10 10 L30 10"       fill="none" stroke="rgba(255,255,255,0.17)" strokeWidth={1} strokeLinecap="square" />
          <path d="M154 10 L174 10 L174 30"    fill="none" stroke="rgba(255,255,255,0.17)" strokeWidth={1} strokeLinecap="square" />
          <path d="M10 108 L10 128 L30 128"    fill="none" stroke="rgba(255,255,255,0.17)" strokeWidth={1} strokeLinecap="square" />
          <path d="M154 128 L174 128 L174 108" fill="none" stroke="rgba(255,255,255,0.17)" strokeWidth={1} strokeLinecap="square" />
        </svg>
      </div>

      <div style={{ width: 420, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ position: 'relative', height: 1, background: 'rgba(255,255,255,0.15)' }}>
          <div
            ref={barRef}
            style={{
              position: 'absolute',
              top: 0, bottom: 0, left: 0,
              width: '0%',
              background: '#fff',
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase' as const,
          }}>
            Loading
          </span>
          <span
            ref={pctRef}
            style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}
          >
            000%
          </span>
        </div>
      </div>
    </div>
  )
}