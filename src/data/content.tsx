import type { ReactNode } from 'react'

export const GITHUB = 'https://github.com/storytold/filmcraft'

export const shot = (name: string) => `/shots/${name}`

export type Workspace = {
  id: string
  label: string
  image: string
  alt: string
}

export const workspaces: Workspace[] = [
  {
    id: 'assembly',
    label: '汇编',
    image: shot('assembly.png'),
    alt: '「汇编」工作区：素材箱、源监视器与节目录监视器，时间轴上是《活死人之夜》的镜头与肖邦配乐',
  },
  {
    id: 'edit',
    label: '剪辑',
    image: shot('timeline.png'),
    alt: '时间轴特写：V1 上的叠化、V2 上的插入镜头、A2 上的配乐波形与响度表',
  },
  {
    id: 'color',
    label: '调色',
    image: shot('hero.png'),
    alt: '「颜色」工作区，正在用 NASA 阿波罗 11 号素材剪辑，右侧是调色面板',
  },
  {
    id: 'effects',
    label: '特效',
    image: shot('effects.png'),
    alt: '特效工作区：效果控制面板、节目录监视器与特效浏览器',
  },
  {
    id: 'export',
    label: '导出',
    image: shot('export.png'),
    alt: '导出模式：目标列表、预览画面与 H.264 设置',
  },
]

export const navItems = [
  { id: 'editing', label: '剪辑' },
  { id: 'color', label: '调色' },
  { id: 'effects', label: '特效' },
  { id: 'audio', label: '音频' },
  { id: 'formats', label: '格式' },
  { id: 'agents', label: '智能体' },
  { id: 'docs', label: '文档' },
]

export type Codec = {
  name: string
  decode: boolean
  encode: boolean
  note?: ReactNode
}

export const codecs: Codec[] = [
  {
    name: 'H.264 / AVC',
    decode: true,
    encode: true,
    note: '解码器在 37+ 条码流上逐位精确，1080p 下 500–600 fps。编码器：High、Main 与 Baseline 档，CABAC、B 帧、CRF/CBR/VBR/2-pass',
  },
  {
    name: 'HEVC / H.265',
    decode: true,
    encode: false,
    note: 'Main 与 Main 10，在 41 条码流上逐位精确（tile、WPP、PCM、长期参考），1080p 下约 225 fps',
  },
  { name: 'Apple ProRes', decode: true, encode: true, note: '解码 422 Proxy 至 4444 XQ；导出写入 422 HQ' },
  { name: 'AAC-LC', decode: true, encode: true },
  {
    name: 'VP8',
    decode: true,
    encode: false,
    note: '全部编码工具，码流版本 0–3，隐藏的 altref 帧，透明 WebM 的 alpha 层；在已发布的 VP8 测试向量上与 libvpx 逐位精确；封装于 WebM/Matroska 与 MP4',
  },
  {
    name: 'VP9',
    decode: true,
    encode: false,
    note: '档位 0–3，8/10/12-bit，4:2:0 至 4:4:4，tile 与超级帧；在 50+ 条码流上逐位精确；封装于 WebM/Matroska 与 MP4',
  },
  {
    name: 'Opus',
    decode: true,
    encode: false,
    note: 'SILK、CELT、混合与多流环绕；在每一个 RFC 8251 一致性向量上范围精确；封装于 WebM/Matroska 与 MP4',
  },
  {
    name: 'AV1',
    decode: true,
    encode: false,
    note: 'Main 档，8/10-bit 4:2:0 与单色，含胶片颗粒、超分辨率与空间层在内的全部编码工具；在测试所用的 libaom 向量上与 libdav1d 逐位精确；封装于 MP4 与 WebM/Matroska',
  },
  {
    name: 'DNxHD / DNxHR',
    decode: true,
    encode: true,
    note: '全部 SMPTE ST 2019-1 CID（LB 至 444，8/10/12-bit）；导出在 MOV 中写入 DNxHR',
  },
  { name: 'MJPEG、PCM', decode: true, encode: true },
  {
    name: 'MP3、FLAC、ALAC、Vorbis',
    decode: true,
    encode: false,
    note: (
      <>
        目前通过{' '}
        <a href="https://github.com/pdeljanov/Symphonia" target="_blank" rel="noreferrer">
          symphonia
        </a>{' '}
        crate（MPL-2.0）实现，后续将替换为自研
      </>
    ),
  },
  { name: 'MP4 / MOV', decode: true, encode: true, note: '分片 MP4、编辑列表、时码轨' },
  { name: 'Matroska / WebM', decode: true, encode: false, note: '缝合、Cues、头部剥离、HDR 色彩元数据' },
  {
    name: 'AVI',
    decode: true,
    encode: false,
    note: 'AVI 1.0 与 OpenDML（大于 1 GB 的文件）；Motion JPEG、H.264、HEVC 与未压缩的 RGB / YUV，搭配 PCM、MP3、MP2 或 AC-3。暂不支持 DivX / Xvid 与 DV',
  },
  {
    name: '静帧',
    decode: true,
    encode: true,
    note: '导入 PNG、JPEG、GIF、WebP、TIFF 与 BMP（动态 GIF、APNG 与 WebP 作为带透明度的剪辑）；导出 PNG 序列与动态 GIF',
  },
]

export const docs: { file: string; desc: string }[] = [
  { file: 'CONTRIBUTING.md · docs/contributing.md', desc: '环境搭建、质量门禁、提交规范，以及如何添加命令、特效、编解码器、面板与资源' },
  { file: 'AGENTS.md', desc: '每位贡献者都必须遵守的规则：资源、净室、许可证' },
  { file: 'docs/architecture.md', desc: '分层、数据模型、时间基准、命令系统、渲染与导出管线' },
  { file: 'docs/testing.md', desc: '单元、属性与 ffmpeg 对照测试，精度标准，基准测试' },
  { file: 'docs/agents.md', desc: '通过 MCP 与控制通道驱动 FilmCraft；智能体如何参与开发' },
  { file: 'docs/control-protocol.md', desc: '控制通道与 MCP 参考' },
  { file: 'docs/project-files.md', desc: '.fcproj 格式、schema 迁移、自动保存与崩溃恢复' },
  { file: 'docs/graphics.md · docs/captions.md', desc: '文字引擎、图形剪辑与工具；唱词轨与格式' },
  { file: 'ROADMAP.md', desc: '阶段、对等度数字、语言、下一步与发展日志' },
  { file: 'docs/target-app-parity.md · gaps.md · roadmap.md', desc: '对等度评估、差距排序清单、里程碑与当前重点' },
  { file: 'codec / file-format / hardware / ui / localization parity', desc: '分维度的对等度检查清单' },
]

export const crates: { layer: string; list: string }[] = [
  { layer: '编解码器与容器', list: 'h264 · h264enc · hevc · vp9 · prores · aac · opus · isobmff · matroska · avi · bitstream' },
  { layer: '基础库', list: 'time · geom · color · frame · media · text · project · audio-dsp' },
  { layer: '编辑与互通', list: 'edit · codecs · captions · format · interchange' },
  { layer: '渲染与输出', list: 'render · gpu · export' },
  { layer: '引擎', list: 'engine — 命令注册表、会话、撤销、任务' },
  { layer: '前端', list: 'ui-egui · automation (MCP) · apps/filmcraft · apps/filmcraft-cli' },
  { layer: '测试支持', list: 'testkit（ffmpeg 对照基准、测试素材）· golden（黄金图像测试）' },
]

export type CraftApp = {
  name: string
  desc: string
  href: string
  icon: string
  here?: boolean
}

export const craftApps: CraftApp[] = [
  { name: 'PhotoCraft', desc: '图像编辑：图层、蒙版、文字与 PSD', href: 'https://github.com/storytold/photocraft', icon: shot('icon-photocraft.png') },
  { name: 'VectorCraft', desc: '矢量插画', href: 'https://github.com/storytold/vectorcraft', icon: shot('icon-vectorcraft.png') },
  { name: 'FilmCraft', desc: '视频剪辑、调色与声音 · 你在这里', href: GITHUB, icon: shot('icon-filmcraft.png'), here: true },
  { name: 'LightCraft', desc: '照片库与 RAW 显影', href: 'https://github.com/storytold/lightcraft', icon: shot('icon-lightcraft.png') },
  { name: 'PdfCraft', desc: '阅读、整理与保护 PDF', href: 'https://github.com/storytold/pdfcraft', icon: shot('icon-pdfcraft.png') },
  { name: 'EffectCraft', desc: '动态图形与视觉特效', href: 'https://github.com/storytold/effectcraft', icon: shot('icon-effectcraft.png') },
  { name: 'DesignCraft', desc: '页面排版与出版', href: 'https://github.com/storytold/designcraft', icon: shot('icon-designcraft.png') },
  { name: 'ArtCraft', desc: '面向艺术家的 AI 图像与视频工作室', href: 'https://getartcraft.com/', icon: shot('artcraft-mark.svg') },
]
