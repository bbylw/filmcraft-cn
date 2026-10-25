import type { CSSProperties, ReactNode } from 'react'

type SpecRow = { label: string; value: string }

export function SpecList({ rows }: { rows: SpecRow[] }) {
  return (
    <dl className="spec">
      {rows.map((row) => (
        <div className="spec-row" key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Section({
  id,
  title,
  lead,
  spec,
  children,
}: {
  id: string
  title: string
  lead: string
  spec?: SpecRow[]
  children: ReactNode
}) {
  return (
    <section id={id} className="sec">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2>{title}</h2>
            <p className="sec-lead">{lead}</p>
          </div>
          {spec ? <SpecList rows={spec} /> : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Tile({
  title,
  children,
  className = '',
  style,
}: {
  title?: string
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div className={`tile ${className}`} style={style}>
      {title ? <h3>{title}</h3> : null}
      {children}
    </div>
  )
}

export function FeatureRow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="frow">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}

export function Frame({
  src,
  alt,
  ratio = '16-10',
  height,
  objectPosition,
  caption,
  right,
  className = '',
}: {
  src: string
  alt: string
  ratio?: '16-10' | '16-9' | 'band'
  height?: number
  objectPosition?: string
  caption?: ReactNode
  right?: string
  className?: string
}) {
  return (
    <div className={className}>
      <div className="frame" data-ratio={height ? undefined : ratio} style={height ? { height } : undefined}>
        <img
          src={src}
          alt={alt}
          style={objectPosition ? { objectPosition } : undefined}
          loading="lazy"
          decoding="async"
        />
      </div>
      {caption ? (
        <p className="cap">
          <span>{caption}</span>
          {right ? <span className="r">{right}</span> : null}
        </p>
      ) : null}
    </div>
  )
}

export function CodeBlock({
  title,
  meta,
  children,
  fontSize,
}: {
  title: string
  meta: string
  children: ReactNode
  fontSize?: number
}) {
  return (
    <div className="code">
      <div className="code-top">
        <span>{title}</span>
        <span>{meta}</span>
      </div>
      <pre style={fontSize ? { fontSize } : undefined}>{children}</pre>
    </div>
  )
}

export function Proll({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`proll ${className}`}>{children}</div>
}

export function ProllRow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}

export function Mono({ children }: { children: ReactNode }) {
  return <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px' }}>{children}</span>
}
