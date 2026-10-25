import { CodeBlock, Proll, ProllRow, Section, Tile } from '../components/ui'

function Tokens({ code, lang }: { code: string; lang: 'json' | 'sh' }) {
  const splitter = lang === 'json' ? /("(?:[^"\\]|\\.)*"|\/\/[^\n]*)/g : /(#[^\n]*|"[^"]*")/g

  return (
    <>
      {code.split(splitter).map((part, index) => {
        if (!part) return null
        if (part.startsWith('"')) {
          return (
            <span key={index} className="tk-s">
              {part}
            </span>
          )
        }
        if (part.startsWith('//') || part.startsWith('#')) {
          return (
            <span key={index} className="tk-cm">
              {part}
            </span>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

const controlCode = `{"method": "engine.execute", "params": {"command": "timeline.place",
  "params": {"item": 1, "track": "V1", "seconds": 0,
    "sourceIn": 284298240000000, "duration": 1270080000000}}}

// 三条命令：放置剪辑、改调色曲线、截一帧

{"method": "engine.execute", "params": {"command": "effects.setParam",
  "params": {"clip": 87, "effect": "lumetri", "param": "curve_luma",
    "value": [[0,0],[0.25,0.21],[0.75,0.82],[1,1]]}}}

{"method": "ui.screenshot", "params": {"path": "frame.png"}}`

const buildCode = `# 桌面应用，附带一个演示项目
cargo run --release -p filmcraft

# 再加上 JSON 行控制服务器
cargo run --release -p filmcraft -- --control 9876

# 列出每一个引擎命令
cargo run --release -p filmcraft-cli -- commands

# MCP 服务器（无界面）
cargo run --release -p filmcraft-cli -- mcp`

const fontCode = `git clone https://github.com/storytold/craft-fonts \\
  ../craft-fonts
CRAFT_FONTS_DIR="$PWD/../craft-fonts" \\
  cargo run --release -p filmcraft`

export function Agents() {
  return (
    <Section
      id="agents"
      title="为智能体而生"
      lead="每一个菜单项、按钮、滑块与拖拽动作，都是一个带 id、类型化参数与启用状态的命令。UI、CLI、JSON 控制通道与一个 MCP 服务器都派发相同的命令。"
      spec={[
        { label: '引擎命令', value: '650+ 且持续增加' },
        { label: '控制通道', value: 'TCP 上的 JSON 行' },
        { label: 'MCP', value: '无界面服务器' },
      ]}
    >
      <div className="tiles">
        <div className="col-span-12 md:col-span-7">
          <CodeBlock title="control · jsonl" meta="engine.execute">
            <Tokens code={controlCode} lang="json" />
          </CodeBlock>
        </div>

        <div className="col-span-12 md:col-span-5">
          <Tile className="h-full">
            <Proll>
              <ProllRow title="UI 也能被驱动">
                每个小部件都有 automation
                id，智能体可以点击、拖拽、输入并截屏。这些截图里的预告片与调色，正是一位智能体驱动运行中的程序、以完全相同的方式完成的。
              </ProllRow>
              <ProllRow title="同一套命令">
                UI、CLI、JSON 控制通道与 MCP
                服务器派发相同的命令，因此 Claude 或任何智能体都能像人一样精准地剪辑、修剪、调色、混音与导出。
              </ProllRow>
              <ProllRow title="无界面也能跑">
                <span className="font-mono text-[11.5px]">filmcraft-cli mcp</span> 启动 MCP 服务器；
                <span className="font-mono text-[11.5px]">filmcraft-cli commands</span> 列出每一个引擎命令。
              </ProllRow>
            </Proll>
          </Tile>
        </div>
      </div>
    </Section>
  )
}

export function Everywhere() {
  return (
    <Section
      id="everywhere"
      title="无处不在"
      lead="同一个引擎，桌面原生、浏览器 WebAssembly，以及一层可替换的界面。"
      spec={[
        { label: '原生', value: 'macOS · Windows · Linux' },
        { label: '网页端', value: 'WebAssembly' },
      ]}
    >
      <div className="tiles">
        <Tile title="原生" className="col-span-12 md:col-span-4">
          <p>支持 macOS、Windows 与 Linux，并带有原生 macOS 菜单栏。</p>
        </Tile>
        <Tile title="网页端" className="col-span-12 md:col-span-4">
          <p>
            相同的引擎与 UI 通过 WebAssembly 在浏览器中运行（
            <span className="font-mono text-[11.5px]">apps/filmcraft-web</span>
            ）；每个发布版本都会把它打包为{' '}
            <span className="font-mono text-[11.5px]">filmcraft-web-&lt;version&gt;.zip</span>。
          </p>
        </Tile>
        <Tile title="可替换的 UI" className="col-span-12 md:col-span-4">
          <p>
            界面是引擎之上的一层 crate（<span className="font-mono text-[11.5px]">ui-egui</span>
            ），因此不同的前端可以在不触碰编辑逻辑的情况下替换它。
          </p>
        </Tile>
      </div>
    </Section>
  )
}

export function Start() {
  return (
    <Section
      id="start"
      title="快速上手"
      lead="从源码构建。需要 Rust 工具链；界面与字幕里使用的日语文字来自 craft-fonts，它是一个可选的构建输入（发布构建始终包含它）。"
      spec={[
        { label: '桌面包', value: '-p filmcraft' },
        { label: 'CLI', value: '-p filmcraft-cli' },
        { label: '字体内嵌', value: 'CRAFT_FONTS_DIR' },
      ]}
    >
      <div className="tiles">
        <div className="col-span-12 md:col-span-7">
          <CodeBlock title="sh · 从源码运行" meta="cargo">
            <Tokens code={buildCode} lang="sh" />
          </CodeBlock>
        </div>

        <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
          <CodeBlock title="sh · 可选字体" meta="OFL-1.1" fontSize={11.4}>
            <Tokens code={fontCode} lang="sh" />
          </CodeBlock>
          <Tile title="遇到问题？">
            <p>
              控制协议记录在 <span className="font-mono text-[11.5px]">docs/control-protocol.md</span>。想展示你的作品，来{' '}
              <a href="https://discord.gg/artcraft" className="text-[#b79bff]" target="_blank" rel="noreferrer">
                Discord
              </a>{' '}
              告诉我们。
            </p>
          </Tile>
          <p className="text-[11.8px] text-dim-2 leading-[1.7]">
            没有 craft-fonts 时，FilmCraft 使用自身字体与系统字体；发布构建始终包含它。
          </p>
        </div>
      </div>
    </Section>
  )
}
