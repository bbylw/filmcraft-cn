import type { ReactElement, ReactNode } from 'react'
import { CodeBlock, Section, Tile } from '../components/ui'
import { FreeBsdMark, LinuxMark, MacMark, WebMark, WindowsMark } from '../components/os-marks'
import { craftApps } from '../data/content'

/** 统一指向最新发布：版本号更新频繁，不在页面里写死 */
const RELEASES = 'https://github.com/storytold/filmcraft/releases/latest'

type OsCard = {
  id: string
  name: string
  Mark: (props: { className?: string }) => ReactElement
  /** 主构建的格式与架构，与版本无关 */
  desc: string
  /** 同一归档里还有哪些构建 */
  variants: string[]
}

const cards: OsCard[] = [
  {
    id: 'windows',
    name: 'Windows',
    Mark: WindowsMark,
    desc: 'x64 · MSI 安装包',
    variants: ['便携版 zip', 'arm64', 'x86'],
  },
  {
    id: 'macos',
    name: 'macOS',
    Mark: MacMark,
    desc: '通用版 · DMG',
    variants: ['命令行工具 CLI'],
  },
  {
    id: 'linux',
    name: 'Linux',
    Mark: LinuxMark,
    desc: 'x86_64 · AppImage',
    variants: ['aarch64', 'flatpak', 'deb', 'rpm', 'tar.gz'],
  },
  {
    id: 'freebsd',
    name: 'FreeBSD',
    Mark: FreeBsdMark,
    desc: 'x86_64 · tar.gz',
    variants: ['仅 x86_64'],
  },
  {
    id: 'web',
    name: '网页端',
    Mark: WebMark,
    desc: '静态站点 · zip',
    variants: ['WebAssembly', '解压即用'],
  },
]

export function Download() {
  return (
    <Section
      id="download"
      title="下载"
      lead="选你的系统，点图标去 GitHub 上的最新发布。那里永远是最新的构建，不用管版本号；每个平台的安装包、便携版与校验清单都在同一页。"
      spec={[
        { label: '下载地址', value: 'releases/latest' },
        { label: '校验和', value: 'SHA256SUMS.txt' },
      ]}
    >
      <div className="osgrid">
        {cards.map((card) => (
          <a
            key={card.id}
            className="os"
            href={RELEASES}
            target="_blank"
            rel="noreferrer"
            aria-label={`前往 GitHub 最新发布，下载 ${card.name}`}
          >
            <span className="os-main">
              <span className="os-band">
                <card.Mark className="os-glyph" />
                <span className="os-hint" aria-hidden="true">
                  下载
                </span>
              </span>
              <span className="os-name">{card.name}</span>
              <span className="os-desc">{card.desc}</span>
            </span>
            <span className="os-alt">
              {card.variants.map((variant) => (
                <span key={variant}>{variant}</span>
              ))}
            </span>
          </a>
        ))}
      </div>

      <p className="os-foot">
        发布页上的文件名带当前版本号，所以这里不写死版本。要指定架构、取历史版本或核对{' '}
        <a href={RELEASES} target="_blank" rel="noreferrer">
          SHA256SUMS.txt
        </a>
        ，都在同一页。
      </p>

      <div className="os-notes">
        <Details summary="Windows：如果应用打不开">
          <p>
            桌面应用默认只初始化 Vulkan 与 DirectX 12，而非 OpenGL。让 wgpu 同时创建一个 OpenGL
            实例，可能在窗口出现前就让某些显卡驱动（AMD 的 <span className="font-mono">atio6axx.dll</span>
            ）崩溃，于是应用会在任务管理器里一闪而过然后退出。<span className="font-mono">WGPU_BACKEND</span>
            可覆盖默认设置用于排障。在 PowerShell 中，于包含可执行文件的目录下：
          </p>
          <div className="mt-2.5">
            <CodeBlock title="powershell" meta="troubleshooting">
              {'$env:WGPU_BACKEND = "vulkan"\n& .\\filmcraft.exe\nRemove-Item Env:WGPU_BACKEND  '}
              <span className="tk-cm"># 恢复默认设置</span>
            </CodeBlock>
          </div>
          <p className="mt-2.5">
            显式指定 <span className="font-mono">gl</span>{' '}
            会在受影响的系统上让驱动崩溃重现。一台装有同一厂商不同驱动包的 GPU
            的笔记本可能把同一块 GPU 列出两次，FilmCraft 会使用较新的那块绘制，并在{' '}
            <span className="font-mono">%APPDATA%\FilmCraft\Logs\filmcraft.log</span> 中说明。
          </p>
        </Details>

        <Details summary="Linux：安装位置、RISC-V 与 Gentoo">
          <p>
            压缩包安装程序把 FilmCraft、命令行工具与桌面集成放进 <span className="font-mono">~/.local</span>
            ，无需管理员权限；<span className="font-mono">sudo ./install.sh --prefix /usr/local</span>{' '}
            可为所有用户安装，再次运行会更新现有安装。RISC-V 另提供{' '}
            <span className="font-mono">linux-riscv64.tar.gz</span>（需要 glibc 2.39+，例如 Ubuntu 24.04 或
            Debian 13）。
          </p>
          <p>
            Gentoo 由社区维护：
            <a
              href="https://github.com/switch87/snakebyte-overlay"
              target="_blank"
              rel="noreferrer"
              className="text-[#b79bff]"
            >
              ::snakebyte overlay
            </a>{' '}
            把 Linux 发布版打包为 <span className="font-mono">media-video/filmcraft-bin</span>，打包问题请向该
            overlay 反馈。
          </p>
        </Details>
      </div>
    </Section>
  )
}

function Details({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <details className="rounded border border-line bg-panel px-3.5 py-2.5">
      <summary className="cursor-pointer text-[12.8px] text-paper">{summary}</summary>
      <div className="mt-2.5 space-y-2 text-[12.4px] leading-[1.8] text-dim">{children}</div>
    </details>
  )
}

export function Crafting() {
  return (
    <Section
      id="crafting"
      title="Crafting 系列应用"
      lead="FilmCraft 是 Crafting 系列应用之一：由 ArtCraft 团队出品的免费、开源创意工具，每一个都用 Rust 从零编写，且都能独立运行。"
    >
      <div className="appgrid">
        {craftApps.map((app) => (
          <a
            key={app.name}
            className="app"
            href={app.href}
            target="_blank"
            rel="noreferrer"
            data-here={app.here ? 'true' : undefined}
            style={app.name === 'ArtCraft' ? { borderStyle: 'dashed' } : undefined}
          >
            <img src={app.icon} alt="" width={24} height={24} style={app.name === 'ArtCraft' ? { borderRadius: 0 } : undefined} />
            <div>
              <b>{app.name}</b>
              <span>{app.desc}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}

export function License() {
  return (
    <Section
      id="license"
      title="许可与致谢"
      lead="FilmCraft 采用双重许可：你可在 MIT 或 Apache-2.0 之间任选其一。版权所有 (c) 2026 ArtCraft Team 与 FilmCraft 贡献者。"
      spec={[
        { label: '许可', value: 'MIT | Apache-2.0' },
        { label: '声明', value: 'NOTICE' },
      ]}
    >
      <div className="tiles">
        <Tile title="独立实现" className="col-span-12 md:col-span-6">
          <p>
            它不含任何专有代码、图标、图像、预设或 LUT，也不含 GPL 或 LGPL 代码；每个图标都用代码绘制，每个资源都是开放许可并具名署名（见
            AGENTS.md）。ffmpeg 仅作为外部测试对照基准使用。
          </p>
        </Tile>
        <Tile title="截图中的素材与音乐" className="col-span-12 md:col-span-6">
          <p>
            NASA 的阿波罗 11 号素材与空地语音来自 images.nasa.gov（美国政府公有领域，《活死人之夜》《魂魄出窍》《谜中谜》均为美国公有领域作品）；肖邦的《夜曲》Op.
            48 No. 1 与《叙事曲》No. 1 由 Musopen 演奏并以 CC0 发布。媒体本身不在仓库中。
          </p>
        </Tile>
        <Tile title="商标" className="col-span-12">
          <p>
            docs/brand/ 中的 ArtCraft 名称、字标与徽标是 ArtCraft Team
            的商标，不受本许可证覆盖。它们只能原样、且只能作为本仓库与 FilmCraft
            的一部分使用。分支与修改版本必须移除它们。打包的字体、图标、图像及其它资源保留各自的开放许可证，每一样都在 ATTRIBUTION.md
            中按其作者、来源与许可证列出。
          </p>
        </Tile>
      </div>
    </Section>
  )
}
