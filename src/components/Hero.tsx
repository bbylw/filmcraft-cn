import { useMemo, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { workspaces } from '../data/content'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-in">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              开源 · 纯 Rust · MIT / Apache-2.0
            </p>

            <h1>
              熟悉的时间轴，
              <span>全新的底层。</span>
            </h1>

            <p className="hero-sub">
              FilmCraft 是一款专业非线性视频编辑器：剪辑、调色与声音。原生支持 macOS、Windows 与
              Linux，也能通过 WebAssembly 在浏览器里跑。
            </p>
            <p className="hero-note">由 ArtCraft 团队出品。当前处于 alpha，功能广度约为专业 NLE 的 86%。</p>

            <div className="cta-row">
              <a className="btn btn-solid" href="#download">
                下载 FilmCraft
              </a>
              <a className="btn btn-ghost" href="#start">
                快速上手
              </a>
              <a className="btn btn-ghost" href="https://github.com/storytold/filmcraft" target="_blank" rel="noreferrer">
                查看源码
              </a>
            </div>

            <div className="hero-facts">
              <Fact value="650" unit="+" label="引擎命令" />
              <Fact value="254,016,000,000" label="每秒 tick 数" />
              <Fact value="90" unit="+ / 30" label="特效 / 转场" />
              <Fact value="0" label="FFmpeg 依赖" />
              <Fact value="500–600" unit="fps" label="H.264 解码 · 1080p" />
              <Fact value="MIT | Apache" label="双重许可" />
            </div>
          </div>

          <div>
            <Workbench />
            <p className="bench-cap">
              「汇编」工作区，正在用《活死人之夜》（1968）与《魂魄出窍》（1962）的插入镜头剪一条预告片。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Fact({ value, unit, label }: { value: string; unit?: string; label: string }) {
  return (
    <div>
      <div className="fact-v">
        {value}
        {unit ? <small>{unit}</small> : null}
      </div>
      <div className="fact-k">{label}</div>
    </div>
  )
}

function Workbench() {
  const [active, setActive] = useState(0)
  const current = workspaces[active]

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = workspaces.length - 1
    let next = active

    if (event.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (event.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return

    event.preventDefault()
    setActive(next)
    const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    buttons[next]?.focus()
  }

  return (
    <div className="bench">
      <div className="bench-top">
        <div className="ws" role="tablist" aria-label="工作区" onKeyDown={onKeyDown}>
          {workspaces.map((workspace, index) => (
            <button
              key={workspace.id}
              type="button"
              role="tab"
              id={`ws-tab-${workspace.id}`}
              aria-selected={index === active}
              aria-controls="ws-panel"
              tabIndex={index === active ? 0 : -1}
              onClick={() => setActive(index)}
            >
              {workspace.label}
            </button>
          ))}
        </div>
        <div className="bench-meta">1920×1080 · 23.976 fps · 48 kHz</div>
      </div>

      <div className="bench-screen" id="ws-panel" role="tabpanel" aria-labelledby={`ws-tab-${current.id}`}>
        <img src={current.image} alt={current.alt} width={2400} height={1500} />
        <div className="bench-tc">00:01:17:12</div>
        <div className="bench-res">Full</div>
      </div>

      <TimelineStrip />
    </div>
  )
}

type Track = {
  tag: string
  on?: boolean
  tall?: boolean
  clips: { kind: 'v' | 't' | 'a'; left: number; width: number; label?: string; wave?: number; opacity?: number }[]
}

const tracks: Track[] = [
  {
    tag: 'V2',
    clips: [
      { kind: 't', left: 6, width: 19, label: 'LAUNCH 39A' },
      { kind: 't', left: 63, width: 14, label: 'TITLE' },
    ],
  },
  {
    tag: 'V1',
    on: true,
    clips: [
      { kind: 'v', left: 0, width: 17 },
      { kind: 'v', left: 17.6, width: 15 },
      { kind: 'v', left: 33.2, width: 12 },
      { kind: 'v', left: 45.8, width: 21 },
      { kind: 'v', left: 67.4, width: 32 },
    ],
  },
  {
    tag: 'A2',
    tall: true,
    clips: [{ kind: 'a', left: 0, width: 99.6, wave: 7 }],
  },
  {
    tag: 'A1',
    clips: [{ kind: 'a', left: 12, width: 52, wave: 11, opacity: 0.75 }],
  },
]

const marks = ['#8B5CF6', '#4FD1A5', '#E0A64A', '#D9679B', '#4C8DE0']
const scale = ['00:00:00:00', '00:00:20:00', '00:00:40:00', '00:01:00:00', '00:01:17:12']

export function TimelineStrip() {
  return (
    <div className="tl" aria-hidden="true">
      <div className="tl-ruler">
        <div className="tl-marks">
          {marks.map((color) => (
            <i key={color} style={{ background: color }} />
          ))}
        </div>
        <div className="tl-scale">
          {scale.map((time) => (
            <span key={time}>{time}</span>
          ))}
        </div>
      </div>

      {tracks.map((track) => (
        <div className="tl-row" key={track.tag}>
          <div className="tl-tag" data-on={track.on ? 'true' : undefined}>
            {track.tag}
          </div>
          <div className="tl-lane" data-tall={track.tall ? 'true' : undefined}>
            {track.clips.map((clip, index) => (
              <div
                key={`${track.tag}-${index}`}
                className="clip"
                data-kind={clip.kind}
                style={{
                  left: `${clip.left}%`,
                  width: `${clip.width}%`,
                  opacity: clip.opacity,
                }}
              >
                {clip.wave ? <Wave seed={clip.wave} /> : null}
                {clip.label ? <span>{clip.label}</span> : null}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="playhead" style={{ left: 'calc(30px + 6px + (100% - 36px) * 0.471)' }} />
    </div>
  )
}

function Wave({ seed }: { seed: number }) {
  const bars = useMemo(() => {
    let state = seed * 977 + 13
    const next = () => {
      state = (state * 1103515245 + 12345) % 2147483648
      return state / 2147483648
    }

    return Array.from({ length: 96 }, (_, index) => {
      const envelope = Math.sin((index / 96) * Math.PI) * 0.75 + 0.25
      const height = Math.max(8, Math.round((0.25 + next() * 0.75) * envelope * 100))
      return height
    })
  }, [seed])

  return (
    <div className="wave">
      {bars.map((height, index) => (
        <i key={index} style={{ height: `${height}%` }} />
      ))}
    </div>
  )
}
