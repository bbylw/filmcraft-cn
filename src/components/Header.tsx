import { useEffect, useState } from 'react'
import { GITHUB, navItems } from '../data/content'

const navIds = new Set(navItems.map((item) => item.id))

type ScrollState = { progress: number; active: string }

export function Header() {
  const { progress, active } = useScrollState()

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a className="brand" href="#top" aria-label="FilmCraft 首页">
          <img src="/shots/app-icon.png" alt="" width={22} height={22} />
          <b>FilmCraft</b>
          <i>alpha</i>
        </a>

        <nav className="nav" aria-label="页内导航">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hdr-right">
          <a className="btn btn-ghost" href={GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-solid" href="#download">
            下载
          </a>
        </div>
      </div>
      <div className="progress" style={{ width: `${(progress * 100).toFixed(2)}%` }} aria-hidden="true" />
    </header>
  )
}

function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>({ progress: 0, active: '' })

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0

      let active = ''
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 140 && navIds.has(section.id)) active = section.id
        if (section.getBoundingClientRect().top > 140) break
      }

      setState((prev) => (prev.progress === progress && prev.active === active ? prev : { progress, active }))
    }

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return state
}
