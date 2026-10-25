import { Section, Tile } from '../components/ui'
import { crates } from '../data/content'

const bars = [
  { label: '功能广度', pct: 86, tone: 'violet' as const, note: '专业 NLE 中已存在的菜单项、特效、转场、面板与格式（菜单项 92%、特效 100%）。' },
  { label: '可用于真实工作', pct: 56, tone: 'warn' as const, note: '诚实估计：距离能处理真实项目的完整制作工作还有多远。' },
]

const SEGMENTS = 28

function ParityBar({ label, pct, tone, note }: (typeof bars)[number]) {
  const lit = Math.round((SEGMENTS * pct) / 100)

  return (
    <div>
      <div className="bar-lab">
        <b>{label}</b>
        <span style={{ color: tone === 'warn' ? 'var(--color-amber)' : 'var(--color-violet)' }}>{pct}%</span>
      </div>
      <div className="seg" data-tone={tone === 'warn' ? 'warn' : undefined} role="img" aria-label={`${label} ${pct}%`}>
        {Array.from({ length: SEGMENTS }, (_, index) => (
          <i key={index} data-on={index < lit ? 'true' : undefined} />
        ))}
      </div>
      <p className="mt-[7px] text-[11.8px] leading-[1.75] text-dim-2">{note}</p>
    </div>
  )
}

export function Status() {
  return (
    <Section
      id="status"
      title="状态"
      lead="FilmCraft 年轻且快速演进。剪辑、修剪、多机位、调色、关键帧、特效、字幕、唱词、混音、编解码器与导出，今天都已可用。它目前处于 alpha 阶段。"
      spec={[
        { label: '对等度测量', value: '2026-10-10' },
        { label: '许可', value: 'MIT | Apache-2.0' },
      ]}
    >
      <div className="tiles">
        <Tile className="col-span-12 md:col-span-7">
          <div className="bars">
            {bars.map((bar) => (
              <ParityBar key={bar.label} {...bar} />
            ))}
          </div>
        </Tile>

        <Tile title="目前最大的差距" className="col-span-12 md:col-span-5">
          <p>
            <span className="strong">大素材上的速度。</span>
            混合模式与常见特效在 GPU 上，但调色、抠像与导出渲染仍在 CPU。H.264 编码可在 macOS 上、以及 Windows 与 Linux 配合
            NVIDIA GPU 时使用硬件编码器。
          </p>
          <p>
            <span className="strong">原生 .prproj 导入。</span>尚无法打开；请用 FCP7 XML、AAF 或 OTIO 带过来。
          </p>
          <p>
            <span className="strong">无插件。</span>不托管 VST3 / Audio Units 或 OpenFX。
          </p>
        </Tile>

        <Tile title="交付编解码器" className="col-span-12 md:col-span-4">
          <p>
            H.264 是唯一用软件导出的交付编解码器；H.265 只能通过硬件编码器导出（Windows 上 NVIDIA：Main 8-bit SDR 与 Main 10
            HDR PQ / HLG；macOS 上 VideoToolbox：8-bit Main，SDR）；暂无 AV1 导出。
          </p>
        </Tile>
        <Tile title="真实素材与平台" className="col-span-12 md:col-span-4">
          <p>
            解码器在一致性码流上逐位精确，但现实中的相机与手机文件测试较少。Windows 与 Linux 得到的测试远少于 macOS。
          </p>
        </Tile>
        <Tile title="AI 功能" className="col-span-12 md:col-span-4">
          <p>目前很少；语音转文字为可选，且默认关闭。带真实素材的 bug 报告是你最能帮到我们的东西。</p>
        </Tile>
      </div>
    </Section>
  )
}

export function Architecture() {
  return (
    <Section
      id="architecture"
      title="架构"
      lead="一个分层的 Cargo 工作区。前端以下的部分都不依赖任何 UI 工具包或操作系统 API。"
      spec={[{ label: 'CI', value: 'cargo xtask ci' }]}
    >
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th scope="col" style={{ width: '19%' }}>
                层
              </th>
              <th scope="col">Crate</th>
            </tr>
          </thead>
          <tbody>
            {crates.map((row) => (
              <tr key={row.layer}>
                <td>{row.layer}</td>
                <td className="name" style={{ whiteSpace: 'normal' }}>
                  {row.list}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[12px] text-dim-2">
        <span className="font-mono text-dim">cargo xtask ci</span> 会检查格式化、lint、测试、分层规则、资源署名与 wasm 构建。
      </p>
    </Section>
  )
}
