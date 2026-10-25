import { GITHUB } from '../data/content'

const columns = [
  {
    title: '产品',
    links: [
      { label: '剪辑', href: '#editing' },
      { label: '调色', href: '#color' },
      { label: '特效', href: '#effects' },
      { label: '音频', href: '#audio' },
    ],
  },
  {
    title: '能力',
    links: [
      { label: '格式与编解码器', href: '#formats' },
      { label: '互通', href: '#interchange' },
      { label: '智能体', href: '#agents' },
      { label: '状态', href: '#status' },
    ],
  },
  {
    title: '开始',
    links: [
      { label: '下载', href: '#download' },
      { label: '快速上手', href: '#start' },
      { label: '文档', href: '#docs' },
      { label: '架构', href: '#architecture' },
    ],
  },
  {
    title: '社区',
    links: [
      { label: 'Discord', href: 'https://discord.gg/artcraft' },
      { label: 'getartcraft.com', href: 'https://getartcraft.com/' },
      { label: 'GitHub', href: GITHUB },
      { label: 'Star 历史', href: 'https://www.star-history.com/?repos=storytold%2Ffilmcraft&type=date' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="join">
          <div>
            <h3>来和我们一起创作</h3>
            <p>
              我们的 Discord 是所有类型艺术家相聚的地方：画画、拍摄、绘图、剪辑电影、排版的人，以及仍在摸索自己喜欢创作什么的人。分享你正在做的，寻求帮助，告诉我们哪里坏了，或者告诉我们你希望这些工具能做什么。
            </p>
          </div>
          <div className="join-cta">
            <a className="btn btn-solid" href="https://discord.gg/artcraft" target="_blank" rel="noreferrer">
              discord.gg/artcraft
            </a>
            <a className="btn btn-ghost" href="https://getartcraft.com/" target="_blank" rel="noreferrer">
              getartcraft.com
            </a>
          </div>
        </div>

        <div className="ft-in">
          <div>
            <a className="brand" href="#top">
              <img src="/shots/app-icon.png" alt="" width={22} height={22} />
              <b>FilmCraft</b>
              <i>alpha</i>
            </a>
            <p className="mt-2 max-w-[30ch] text-[12.2px] leading-[1.8] text-dim-2">
              视频剪辑、调色与声音。一款用纯 Rust 打造的开源专业非线性视频编辑器，由 ArtCraft 团队出品。
            </p>
          </div>

          <div className="ft-links">
            {columns.map((column) => (
              <div className="ft-col" key={column.title}>
                <h4>{column.title}</h4>
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="ft-bottom">
          <span>MIT | Apache-2.0 · 版权所有 (c) 2026 ArtCraft Team 与 FilmCraft 贡献者</span>
        </div>
      </div>
    </footer>
  )
}

export function SkipLink() {
  return (
    <a
      href="#editing"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded focus:bg-violet focus:px-3 focus:py-2 focus:text-[13px] focus:text-white"
    >
      跳到正文
    </a>
  )
}
