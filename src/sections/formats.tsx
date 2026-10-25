import { Frame, Proll, ProllRow, Section, Tile } from '../components/ui'
import { codecs, shot } from '../data/content'

function Mark({ on, kind }: { on: boolean; kind: 'd' | 'e' }) {
  if (!on) {
    return (
      <span className="no" aria-label="不支持">
        —
      </span>
    )
  }
  return (
    <span className={kind === 'd' ? 'yes-d' : 'yes-e'} aria-label="支持">
      ✓
    </span>
  )
}

export function Formats() {
  return (
    <Section
      id="formats"
      title="格式与编解码器"
      lead="内部没有 FFmpeg。视频编解码器、AAC、Opus 与容器都是我们自己的 Rust 代码，依据公开的 ITU-T、ISO 与 IETF 规范实现，并逐帧对照 ffmpeg 作为外部对照基准进行测试。"
      spec={[
        { label: '自研实现', value: 'H.264 · HEVC · ProRes · AAC · Opus' },
        { label: '解码速度', value: '1080p 下 500–600 fps' },
        { label: '容器', value: 'MP4 · MOV · MKV · WebM · AVI' },
      ]}
    >
      <div className="tbl-wrap">
        <table className="tbl">
          <caption className="sr-only">编解码器与容器的解码、编码支持情况</caption>
          <thead>
            <tr>
              <th scope="col" style={{ width: '21%' }}>
                编解码器 / 容器
              </th>
              <th scope="col" style={{ width: '6%', textAlign: 'center' }}>
                解码
              </th>
              <th scope="col" style={{ width: '6%', textAlign: 'center' }}>
                编码
              </th>
              <th scope="col">备注</th>
            </tr>
          </thead>
          <tbody>
            {codecs.map((codec) => (
              <tr key={codec.name}>
                <td className="name">{codec.name}</td>
                <td className="c">
                  <Mark on={codec.decode} kind="d" />
                </td>
                <td className="c">
                  <Mark on={codec.encode} kind="e" />
                </td>
                <td className="note">{codec.note ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tiles mt-2">
        <Tile title="还能导入" className="col-span-12 md:col-span-6">
          <p>
            MPEG-2 / MPEG-1 视频、AC-3、MP2、MXF（OP1a / OP-Atom）、MPEG 传输流与节目流（AVCHD、广播、DVD）、Ogg
            与图像序列。
          </p>
        </Tile>
        <Tile title="硬件解码与编码" className="col-span-12 md:col-span-6">
          <p>
            硬件解码在 macOS（VideoToolbox）、Windows（Media Foundation）上可用，对于 H.264 与 HEVC 在 Linux（VA-API）上也可用；H.264
            导出在 Windows 与 Linux 上可使用 NVIDIA 编码器（需开启），H.265（HEVC Main，8-bit）导出也通过它实现（Windows 用 NVENC，macOS 用
            VideoToolbox）。
          </p>
        </Tile>
      </div>

      <p className="mt-2 text-[12.2px] text-dim-2">暂不支持：AV1 导出、相机 RAW、E-AC-3。</p>
    </Section>
  )
}

export function Export() {
  return (
    <Section
      id="export"
      title="导出"
      lead="使用自研编码器的 H.264 MP4 与 AAC。一段 6 秒、960×540 的渲染耗时 1.3 秒，在 ffmpeg 中解码不产生任何警告，且开启了严格错误检测。"
      spec={[
        { label: '软件导出', value: 'H.264 / AAC MP4' },
        { label: '渲染', value: '6 s @ 960×540 → 1.3 s' },
        { label: '后台任务', value: '带进度与取消' },
      ]}
    >
      <div className="tiles">
        <div className="col-span-12 md:col-span-7">
          <Frame
            src={shot('export.png')}
            alt="导出模式：左侧是 Media File、YouTube、Vimeo、TikTok、Instagram 等目标，右侧是 H.264 设置"
            ratio="band"
            objectPosition="center 46%"
            caption="导出模式，已设为把预告片写成 H.264 MP4。"
            right="Media File → H.264"
          />
        </div>
        <div className="col-span-12 md:col-span-5">
          <Tile className="h-full">
            <Proll>
              <ProllRow title="还支持">
                QuickTime 中的 Apple ProRes 422 HQ 与 Motion JPEG、MXF OP1a 与标准 OP-Atom（DNxHR、ProRes 或 H.264
                搭配 PCM 与起始时码）、PNG 序列、动态 GIF 与 WAV。
              </ProllRow>
              <ProllRow title="后台任务">带进度与取消，让你在渲染的同时继续剪辑。</ProllRow>
              <ProllRow title="渲染预览">
                渲染条把区段标记为绿、黄或红；渲染预览按内容缓存，因此一次编辑只会让受影响的部分失效，而撤销能把绿色找回来。
              </ProllRow>
            </Proll>
          </Tile>
        </div>
      </div>
    </Section>
  )
}

const interchange = [
  {
    name: 'FCP 7 XML（xmeml）',
    body: '业界标准的时间轴交换格式。它承载嵌套序列、转场、生成器、运动、不透明度、时间重映射与带关键帧的音频电平。',
  },
  { name: 'FCPXML 1.9–1.11', body: '脊柱结构，连接剪辑作为轨道，含转场、重定时与复合剪辑。' },
  {
    name: 'OpenTimelineIO',
    body: '影视行业的开放交换格式，通过 metadata.filmcraft 往返保留每一个 FilmCraft 细节。',
  },
  { name: 'CMX 3600 EDL', body: '仍在使用的最古老格式，带丢帧时码、叠化、擦除、速度变化（M2），每条轨道一个 EDL。' },
  {
    name: 'AAF（Edit Protocol）',
    body: '标准的时间轴与音频交换格式。视频与音频轨道、叠化与渐变、带关键帧的剪辑音量、标记与源时码；音频以内嵌或独立 WAV / AIFF 文件形式存在，带手柄修剪，剪辑效果已渲染进去并拆为单声道，外加可选的视频混音。导入会读回 AAF，提取内嵌的音频。',
  },
  { name: 'OMF 2.0', body: '音频后期交接：带交叉淡化与增益、采样精确的音频轨道，音频封装在内或并列存放。' },
]

export function Interchange() {
  return (
    <Section
      id="interchange"
      title="互通"
      lead="在 FilmCraft 与任何其它编辑器之间交换时间轴。导入会把文档里的素材箱、媒体与序列作为一个可撤销的步骤合并进你的项目，并把它在磁盘上找到的每个媒体文件链接起来。"
      spec={[
        { label: '时间轴交换', value: '6 种格式' },
        { label: '导入行为', value: '单步可撤销' },
      ]}
    >
      <div className="tiles">
        {interchange.map((item) => (
          <Tile key={item.name} title={item.name} className="col-span-12 md:col-span-4">
            <p>{item.body}</p>
          </Tile>
        ))}
      </div>
    </Section>
  )
}
