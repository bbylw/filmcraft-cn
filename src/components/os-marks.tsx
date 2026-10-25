type MarkProps = { className?: string }

const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
} as const

/** 四个窗格：Windows 的通用造型，用几何块重画而非照搬官方标记 */
export function WindowsMark({ className }: MarkProps) {
  return (
    <svg {...base} className={className}>
      <rect x="6.5" y="8" width="15.5" height="15" rx="1.6" />
      <rect x="26" y="8" width="15.5" height="15" rx="1.6" />
      <rect x="6.5" y="25" width="15.5" height="15" rx="1.6" />
      <rect x="26" y="25" width="15.5" height="15" rx="1.6" />
    </svg>
  )
}

/** 命令键 ⌘：一条连续线，四角各扣一个 270° 圆弧 */
export function MacMark({ className }: MarkProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 17A5 5 0 1 1 17 12H31A5 5 0 1 1 36 17V31A5 5 0 1 1 31 36H17A5 5 0 1 1 12 31Z" />
    </svg>
  )
}

/** 企鹅：Linux 的吉祥物，只留轮廓、眼睛、喙与脚 */
export function LinuxMark({ className }: MarkProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 8.6c-4.1 0-7.2 3.6-7.2 8 0 2.6.6 3.9.6 5.7 0 1.6-1.5 2.7-1.5 5.6 0 3.4 2.9 6 6.5 6.5" />
      <path d="M24 8.6c4.1 0 7.2 3.6 7.2 8 0 2.6-.6 3.9-.6 5.7 0 1.6 1.5 2.7 1.5 5.6 0 3.4-2.9 6-6.5 6.5" />
      <path d="M24 34.4v1.4" />
      <circle cx="21.2" cy="16.4" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="26.8" cy="16.4" r="1.2" fill="currentColor" stroke="none" />
      <path d="M24 19.1l-2.6 3.2h5.2z" fill="currentColor" stroke="none" />
      <ellipse cx="20.3" cy="37.2" rx="3.4" ry="1.5" />
      <ellipse cx="27.7" cy="37.2" rx="3.4" ry="1.5" />
    </svg>
  )
}

/** 三叉戟：BSD 家族的传统符号 */
export function FreeBsdMark({ className }: MarkProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 41.5V9" />
      <path d="M24 26.5c-5 0-8.8-3.9-8.8-8.6V9.5" />
      <path d="M24 26.5c5 0 8.8-3.9 8.8-8.6V9.5" />
      <path d="M19.6 36.8h8.8" />
    </svg>
  )
}

/** 六边形 + 播放：WebAssembly 跑在浏览器里 */
export function WebMark({ className }: MarkProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 6.4 39.2 15.2v17.6L24 41.6 8.8 32.8V15.2z" />
      <path d="M20.6 18.4 29.8 24l-9.2 5.6z" />
    </svg>
  )
}
