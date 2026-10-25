<p align="center">
  <a href="https://getartcraft.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/brand/artcraft-logo-white.svg">
      <img alt="ArtCraft" src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/brand/artcraft-logo.svg" width="200">
    </picture>
  </a>
</p>


<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/assets/app-icon/hicolor/256x256/apps/ai.storyteller.filmcraft.png" width="128" height="128" alt="FilmCraft 图标：紫色方块上刻着一只猫头鹰">
</p>

<h1 align="center">FilmCraft</h1>

<p align="center">
  <b>视频剪辑、调色与声音；一款用纯 Rust 打造的开源专业非线性视频编辑器。</b>
</p>

<p align="center">
  一个开源、现代的非线性视频剪辑工作流：原生支持 macOS、Windows 与 Linux，并通过 WebAssembly 在浏览器中运行。<br>
  由 ArtCraft 团队出品。
</p>

<p align="center">
  <a href="#license-and-credits"><img alt="许可：MIT 或 Apache-2.0" src="https://img.shields.io/badge/license-MIT%20%7C%20Apache--2.0-8b5cf6?style=flat-square"></a>
  <img alt="纯 Rust 编写" src="https://img.shields.io/badge/pure-Rust-6a3fd6?style=flat-square&logo=rust&logoColor=white">
  <img alt="运行于 macOS、Windows 与 Linux" src="https://img.shields.io/badge/runs%20on-macOS%20%7C%20Windows%20%7C%20Linux-8b5cf6?style=flat-square">
  <a href="#status"><img alt="状态：年轻且快速演进" src="https://img.shields.io/badge/status-young%20and%20moving%20fast-6a3fd6?style=flat-square"></a>
  <br>
  <a href="https://sonarcloud.io/project/overview?id=storytold_filmcraft"><img alt="由 SonarCloud 扫描" src="https://img.shields.io/badge/Scanned_by-SonarCloud-4b9fd5?style=flat-square&logo=sonarqubecloud&logoColor=white"></a>
  <a href="https://coderabbit.ai"><img alt="由 CodeRabbit 审查" src="https://img.shields.io/coderabbit/prs/github/storytold/filmcraft?style=flat-square&label=Reviewed%20by%20CodeRabbit&logo=coderabbit"></a>
</p>

<p align="center">
  <a href="https://discord.gg/artcraft"><img alt="加入 ArtCraft 社区（Discord）" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>
</p>

<p align="center">
  <a href="https://getartcraft.com/apps/filmcraft"><b>getartcraft.com 上的 FilmCraft</b></a> ·
  <a href="https://getartcraft.com/">ArtCraft</a> ·
  <a href="https://getartcraft.com/apps">全部 Crafting 系列应用</a>
</p>

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-hero.png" alt="FilmCraft 的「颜色」工作区，正用 NASA 素材剪辑一部阿波罗 11 号纪录片的过半部分：土星五号火箭在发射塔旁升空的节目录监视器上，叠加着 39A 发射台的唱词条和空地语音字幕；效果控制面板里对镜头做了调色与缩放关键帧；右侧是调色面板、NASA 精选素材的素材箱，以及一条含 49 个画面剪辑、B 卷、字幕、唱词轨、任务音频、压低音量的配乐、具名标记、已渲染区段和实时响度表的时间轴" width="100%">
</p>

<p align="center"><sub><i>阿波罗 11 号 - 静海</i>：一段三分钟的纪录片剪辑，素材取自 NASA 1969 年的发射、着陆与月面行走影片，字幕来自任务记录稿。这些截图中的每一帧都来自公有领域素材，由 FilmCraft 自研代码完成解码、合成与调色。</sub></p>

> [!NOTE]
> **ArtCraft 是一个汇聚各行各业艺术家的社区。** 数字艺术、生成艺术、音乐、
> 游戏等等 —— 只要你在创作，你就是其中一员。** [来 Discord 跟我们打个招呼吧](https://discord.gg/artcraft)。**

<p align="center">
  <a href="#剪辑">剪辑</a> ·
  <a href="#调色">调色</a> ·
  <a href="#特效与动效">特效</a> ·
  <a href="#音频">音频</a> ·
  <a href="#字幕与唱词">字幕与唱词</a> ·
  <a href="#格式与编解码器">格式与编解码器</a> ·
  <a href="#导出">导出</a> ·
  <a href="#互通">互通</a> ·
  <a href="#为智能体而生">智能体</a> ·
  <a href="#快速上手">快速上手</a> ·
  <a href="#下载">下载</a> ·
  <a href="#文档">文档</a> ·
  <a href="#状态">状态</a>
</p>

<br>

<a id="剪辑"></a>

FilmCraft 是一款专业非线性编辑器：熟悉的面板、工作区、工具与快捷键，让你的双手天然知道每样东西放在哪里。而在表层之下，它是从比特流开始全新打造的。H.264、HEVC、ProRes 与 AAC 编解码器都是我们自己的实现，依据公开规范用 Rust 编写。GPU 合成器在线性光中工作。帧运算采用精确的整数时间，因此剪辑永远不会漂移。应用中的每一次操作都是一个命令，AI 智能体可以像你一样精准地驱动它。

<br>

## 剪辑

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-assembly.png" alt="「汇编」工作区：素材箱里是影片缩略图，源监视器中是《魂魄出窍》，节目录监视器中是《活死人之夜》的墓园镜头，三段式时间轴上是一条预告片，A2 轨上是肖邦的配乐，并带有响度表" width="100%">
</p>

<p align="center"><sub>「汇编」工作区，正在用《活死人之夜》（1968）和一段取自《魂魄出窍》（1962）的插入镜头剪辑预告片。</sub></p>

**一套你早已熟悉的时间轴。** 源监视器与节目录监视器、带缩略图的素材箱、带补丁与目标按钮的多轨时间轴、同步锁与联动选择。剪辑、汇编、调色、特效与音频工作区一应俱全，每个面板都能停靠到你想要的位置。

- **三点编辑。** 在源监视器中标记入点与出点，然后插入（`,`）或覆盖（`.`）到已打补丁的轨道上。提升（`;`）与抽取（`'`）把选段取出。
- **全类型修剪。** 波纹、滚动、滑动、滑行、速率拉伸与剃刀工具。修剪模式把编辑点选为波纹、滚动或修剪，逐帧微调（`` ⌥← `` `` ⌥→ ``，配合 `` ⇧ `` 可 ×5），用 `` ⌃T `` 切换修剪类型，用 `` E `` 延伸到播放头。`` Q `` 与 `` W `` 做指向播放头的波纹修剪。**修剪监视器**显示编辑点两侧画面，而**动态修剪**在播放时实时修剪：`` L `` 前进、`` J `` 后退、`` K `` 停止并作为一步撤销提交。
- **精确时间。** 每一次编辑都基于整数 tick 计算：每秒 254,016,000,000 个 tick，可被所有常见帧率与采样率整除。23.976、29.97 丢帧与 59.94 都是精确值，而非近似值。
- **专业人士依赖的细节。** 带颜色、名称与持续时长的标记；用 **Markers ▸ Export Markers as CSV…（标记 ▸ 将标记导出为 CSV…）** 导出序列审阅笔记；在一条或所有轨道上添加编辑（`` ⌘K ``）；嵌套；复制、粘贴与粘贴插入；波纹删除与闭合间隙；吸附；带历史面板的无限撤销。
- **你的按键。** 键盘快捷键编辑器（`` ⌥⌘K ``）带一张手绘键盘图、面板专属快捷键、冲突警告，以及 FilmCraft 与标准 NLE 键位预设。
- **永不丢失工作。** 保存是原子操作，自动保存保留一组滚动的版本历史，每次编辑约一秒后写入的崩溃恢复日志，能在崩溃或断电后找回未保存的改动。

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-timeline.png" alt="时间轴特写：《活死人之夜》的镜头，V1 上有叠化，V2 上有一段取自《魂魄出窍》的插入镜头，A2 上是绿色波形的肖邦夜曲，标尺旁有彩色标记，响度表显示瞬时、短期、整体与真峰数值" width="100%">
</p>

<p align="center"><sub>近距离：叠化、V2 上的插入镜头、A2 上的配乐、彩色标记，以及右侧的响度表。</sub></p>

<br>

<a id="调色"></a>

## 调色

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-color.png" alt="《谜中谜》（1963）的调色工作区：加里·格兰特与奥黛丽·赫本在节目录监视器中，左侧是波形示波器与矢量示波器，下方是预告片素材箱与时间轴" width="100%">
</p>

<p align="center"><sub>《谜中谜》（1963）的调色工作区，节目录监视器旁是实时示波器。</sub></p>

**一套完整的调色面板**，按调色师的工作顺序排列：

- **基础校正：** 色温与色调、曝光、对比度、高光、阴影、白色、黑色、饱和度。
- **创意：** 八个内置风格（look）带强度调节，外加褪色胶片、锐化与鲜活度。这些风格是用代码写的色彩变换，而非 LUT 文件。
- **曲线：** 一个 RGB 曲线编辑器，采用单调三次插值（无过冲），以及色相 vs 饱和度、色相 vs 色相、色相 vs 亮度、亮度 vs 饱和度、饱和度 vs 饱和度。
- **色轮：** 阴影、中间调与高光三个色轮，各自带独立的亮度控制。
- **HSL 二级：** 按色相、饱和度与亮度抠出某个颜色，把抠像结果以蒙版形式查看，只校正你选中的部分。
- **暗角：** 强度、中点、圆度与羽化。

<table>
  <tr>
    <td width="34%" valign="top" align="center">
      <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-color-panel.png" alt="《谜中谜》（1963）的调色面板：基础校正滑块带有彩色色温与色调轨道，折叠的创意与曲线分区，阴影、中间调与高光色轮，以及 HSL 二级与暗角开关"><br>
      <sub><b>调色面板。</b> 基础校正、色轮以及其它每个分区，都各自带有开关。</sub>
    </td>
    <td width="66%" valign="top" align="center">
      <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-scopes.png" alt="视频示波器：一段《谜中谜》（1963）画面的绿色亮度波形与矢量示波器"><br>
      <sub><b>如实呈现的示波器。</b> 波形与矢量示波器都由已调色的帧计算得出。所有调色都在线性光、32 位浮点下进行。</sub>
    </td>
  </tr>
</table>

<br>

<a id="特效与动效"></a>

## 特效与动效

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-effects.png" alt="特效工作区：效果控制面板里有运动、不透明度、时间重映射与一处调色，节目录监视器是 NASA 的《国际空间站地球俯瞰》，特效浏览器正打开在叠化转场分类" width="100%">
</p>

<p align="center"><sub>NASA 的《国际空间站地球俯瞰》套用了一种风格，特效浏览器正打开在叠化转场上。</sub></p>

- **一套全面的视频特效库**（16 个分类、90 多种特效）、传统特效，以及约 30 种转场。模糊（散景、对焦、复合）、抠像（Ultra Key、轨道遮罩）、扭曲（四角定位、湍流置换、防抖稳定）、灯光与辉光、针对等距柱状投影素材的沉浸式视频（VR）特效、时间海报化、回声等等。交叉叠化、渐黑/渐白、胶片叠化、擦除、光圈、推移、滑动、缩放、翻页、立方体翻转等等。
- **每个剪辑都带运动与不透明度：** 位置、缩放、旋转、锚点与防闪烁，外加 26 种混合模式。
- **进阶关键帧：** 线性、贝塞尔、自动与连续贝塞尔、定格、缓入与缓出。效果控制面板在每个参数下方显示一条关键帧轨道，位于带播放头手柄的时间标尺之下；每个被动画化的参数都能展开成**数值与速度曲线**，并带有可拖拽的影响手柄。效果控制面板与属性面板共享同一个关键帧导航器（◀ ◆ ▶）：在播放头处添加或删除关键帧，前进到上一帧或下一帧。
- **GPU 合成器**基于 wgpu（Metal、Vulkan、DirectX 12、WebGPU）构建。它直接从解码器中以 YUV 采样，采用足迹超采样，并在线性光中混合。一条 CPU 渲染路径会渲染相同的帧，两者互为对照测试。

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-keyframes.png" alt="效果控制面板中某段《活死人之夜》标题卡上缓动缩放推入的数值曲线与速度曲线，节目录监视器显示标题位于乡间公路之上，属性面板里有变换与裁剪" width="100%">
</p>

<p align="center"><sub>标题卡上的一次缓动推入：数值曲线、速度曲线与贝塞尔影响手柄。</sub></p>

<br>

<a id="音频"></a>

## 音频

- **符合广播标准的响度表。** 瞬时、短期与整体响度及真峰，符合 ITU-R BS.1770 与 EBU R128，与峰值表并列。我们的整体读数与 ffmpeg 的 `ebur128` 滤波器一致到 0.1 LU。
- **基于自研 DSP 库的剪辑效果：** 参数均衡、高通、低通与带通滤波器、动态处理、真峰限制器、延迟、混响、降噪、去嗡声、反相与变调。参数可打关键帧。效果在擦洗、播放与导出之间保持连续，并做延迟补偿。
- **音频轨道混音器与音频剪辑混音器：** 推子、声相、静音、独奏，每条轨道五个插入槽（推子前或推子后）、发送、子混音与混音轨，全部采样精确并做延迟补偿。24 条轨道、每条三个效果，在单核上混音约为实时速度的六倍。
- **像调音台一样的自动化：** 读取、闩锁、触控与写入模式，在播放时从混音器实时录制，并以轨道关键帧的形式在时间轴上显示与编辑。外加音频增益对话框（设定、调整、归一化）与等功率交叉淡化。
- **音频时钟播放。** 声卡作主时钟，画面跟随声音，而非相反。

<br>

<a id="字幕与唱词"></a>

## 字幕与唱词

- **真正的文字引擎：** OpenType 塑形，支持字距与连字、双向文本、换行、字距调整与行距，在线性光中绘制，任意缩放或旋转都保持清晰。
- **节目录监视器上的文字、形状与钢笔工具：** 点击即输入，用光标与选区编辑，拖出矩形、椭圆与路径。图形剪辑容纳文字与形状图层，带填充、描边、背景与阴影，全部可打关键帧，并在属性面板中编辑。
- **唱词：** 唱词轨支持 Subtitle、CEA-608、CEA-708 与图文电视（Teletext）格式；以帧精确的时间导入导出 SRT、WebVTT 与 SCC；在文字面板中编辑唱词，并将其烧录进导出文件。

<br>

<a id="格式与编解码器"></a>

## 格式与编解码器

内部没有 FFmpeg。视频编解码器、AAC、Opus 与容器都是我们自己的 Rust 代码，依据公开的 ITU-T、ISO 与 IETF 规范实现，并逐帧对照 ffmpeg 作为外部对照基准进行测试。

| | 解码 | 编码 | 备注 |
|---|:---:|:---:|---|
| **H.264 / AVC** | ✓ | ✓ | 解码器在 37+ 条码流上逐位精确，1080p 下 500–600 fps。编码器：High、Main 与 Baseline 档，CABAC、B 帧、CRF/CBR/VBR/2-pass |
| **HEVC / H.265** | ✓ | | Main 与 Main 10，在 41 条码流上逐位精确（tile、WPP、PCM、长期参考），1080p 下约 225 fps |
| **Apple ProRes** | ✓ | ✓ | 解码 422 Proxy 至 4444 XQ；导出写入 422 HQ |
| **AAC-LC** | ✓ | ✓ | |
| **VP8** | ✓ | | 全部编码工具，码流版本 0–3，隐藏的 altref 帧，透明 WebM 的 alpha 层；在已发布的 VP8 测试向量上与 libvpx 逐位精确；封装于 WebM/Matroska 与 MP4 |
| **VP9** | ✓ | | 档位 0–3，8/10/12-bit，4:2:0 至 4:4:4，tile 与超级帧；在 50+ 条码流上逐位精确；封装于 WebM/Matroska 与 MP4 |
| **Opus** | ✓ | | SILK、CELT、混合与多流环绕；在每一个 RFC 8251 一致性向量上范围精确；封装于 WebM/Matroska 与 MP4 |
| **AV1** | ✓ | | Main 档，8/10-bit 4:2:0 与单色，含胶片颗粒、超分辨率与空间层在内的全部编码工具；在测试所用的 libaom 向量上与 libdav1d 逐位精确；封装于 MP4 与 WebM/Matroska |
| **DNxHD / DNxHR** | ✓ | ✓ | 全部 SMPTE ST 2019-1 CID（LB 至 444，8/10/12-bit）；导出在 MOV 中写入 DNxHR |
| **MJPEG、PCM** | ✓ | ✓ | |
| **MP3、FLAC、ALAC、Vorbis** | ✓ | | 目前通过 [symphonia](https://github.com/pdeljanov/Symphonia) crate（MPL-2.0）实现，后续将替换为自研 |
| **MP4 / MOV** | ✓ | ✓ | 分片 MP4、编辑列表、时码轨 |
| **Matroska / WebM** | ✓ | | 缝合、Cues、头部剥离、HDR 色彩元数据 |
| **AVI** | ✓ | | AVI 1.0 与 OpenDML（大于 1 GB 的文件）；Motion JPEG、H.264、HEVC 与未压缩的 RGB / YUV，搭配 PCM、MP3、MP2 或 AC-3。暂不支持 DivX / Xvid 与 DV |
| **静帧** | ✓ | ✓ | 导入 PNG、JPEG、GIF、WebP、TIFF 与 BMP（动态 GIF、APNG 与 WebP 作为带透明度的剪辑）；导出 PNG 序列与动态 GIF |

此外还支持导入：MPEG-2 / MPEG-1 视频、AC-3、MP2、MXF（OP1a / OP-Atom）、MPEG 传输流与节目流（AVCHD、广播、DVD）、Ogg 与图像序列。暂不支持：AV1 导出、相机 RAW、E-AC-3。硬件解码在 macOS（VideoToolbox）、Windows（Media Foundation）上可用，对于 H.264 与 HEVC 在 Linux（VA-API）上也可用；H.264 导出在 Windows 与 Linux 上可使用 NVIDIA 编码器（需开启），H.265（HEVC Main，8-bit）导出也通过它实现（Windows 用 NVENC，macOS 用 VideoToolbox）（[#30](https://github.com/storytold/filmcraft/issues/30)）。

<br>

<a id="导出"></a>

## 导出

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/images/filmcraft-export.png" alt="导出模式：左侧是 Media File、YouTube、Vimeo、TikTok、Instagram 与 FTP 等目标，预览中是《活死人之夜》的一个画面，右侧是 H.264 设置（1440x1080、23.976 fps、48000 Hz 立体声、整段序列）" width="100%">
</p>

<p align="center"><sub>导出模式，已设为把预告片写成 H.264 MP4。</sub></p>

- **使用自研编码器的 H.264 MP4 与 AAC。** 一段 6 秒、960×540 的渲染耗时 1.3 秒，在 ffmpeg 中解码不产生任何警告，且开启了严格错误检测。
- **还支持：** QuickTime 中的 Apple ProRes 422 HQ 与 Motion JPEG、MXF OP1a 与标准 OP-Atom（DNxHR、ProRes 或 H.264 搭配 PCM 与起始时码）、PNG 序列、动态 GIF 与 WAV。
- **后台任务**带进度与取消，让你在渲染的同时继续剪辑。
- **渲染预览：** 渲染条把区段标记为绿、黄或红；渲染预览按内容缓存，因此一次编辑只会让受影响的部分失效，而撤销能把绿色找回来。

<br>

<a id="互通"></a>

## 互通

在 FilmCraft 与任何其它编辑器之间交换时间轴：

- **FCP 7 XML（xmeml）：** 业界标准的时间轴交换格式。它承载嵌套序列、转场、生成器、运动、不透明度、时间重映射与带关键帧的音频电平。
- **FCPXML 1.9–1.11：** 脊柱结构，连接剪辑作为轨道，含转场、重定时与复合剪辑。
- **OpenTimelineIO：** 影视行业的开放交换格式，通过 `metadata.filmcraft` 往返保留每一个 FilmCraft 细节。
- **CMX 3600 EDL：** 仍在使用的最古老格式，带丢帧时码、叠化、擦除、速度变化（`M2`），每条轨道一个 EDL。
- **AAF（Edit Protocol）：** 标准的时间轴与音频交换格式。视频与音频轨道、叠化与渐变、带关键帧的剪辑音量、标记与源时码；音频以内嵌或独立 WAV / AIFF 文件形式存在，带手柄修剪，剪辑效果已渲染进去并拆为单声道，外加可选的视频混音。导入会读回 AAF，提取内嵌的音频。
- **OMF 2.0：** 音频后期交接：带交叉淡化与增益、采样精确的音频轨道，音频封装在内或并列存放。

导入会把文档里的素材箱、媒体与序列作为一个可撤销的步骤合并进你的项目，并把它在磁盘上找到的每个媒体文件链接起来。

<br>

<a id="为智能体而生"></a>

## 为智能体而生

FilmCraft 中的每一个菜单项、按钮、滑块与拖拽动作，都是一个带 id、类型化参数与启用状态的**命令**。引擎命令超过 650 个（`filmcraft-cli commands` 会列出它们），并且还在持续增加。UI、CLI、JSON 控制通道与一个 **MCP 服务器** 都派发相同的命令，因此 Claude 或任何智能体都能像人一样精准地剪辑、修剪、调色、混音与导出。UI 也可以在鼠标与键盘层面被驱动：每个小部件都有 automation id，智能体可以点击、拖拽、输入并截屏。

```jsonc
// 通过控制通道（TCP 上的 JSON 行）或作为 MCP 工具调用来发送
{"method": "engine.execute", "params": {"command": "timeline.place",
  "params": {"item": 1, "track": "V1", "seconds": 0, "sourceIn": 284298240000000, "duration": 1270080000000}}}
{"method": "engine.execute", "params": {"command": "effects.setParam",
  "params": {"clip": 87, "effect": "lumetri", "param": "curve_luma", "value": [[0,0],[0.25,0.21],[0.75,0.82],[1,1]]}}}
{"method": "ui.screenshot", "params": {"path": "frame.png"}}
```

这些截图里的预告片与调色，正是一位智能体驱动运行中的程序、以完全相同的方式完成的。

<br>

<a id="无处不在"></a>

## 无处不在

- **原生**支持 macOS、Windows 与 Linux，并带有原生 macOS 菜单栏。
- **网页端：** 相同的引擎与 UI 通过 WebAssembly 在浏览器中运行（`apps/filmcraft-web`，参见 [docs/web.md](https://github.com/storytold/filmcraft/blob/main/docs/web.md)）；每个发布版本都会把它打包为 `filmcraft-web-<version>.zip`。
- **可替换的 UI。** 界面是引擎之上的一层 crate（`ui-egui`），因此不同的前端可以在不触碰编辑逻辑的情况下替换它。

<br>

<a id="快速上手"></a>

## 快速上手

```sh
cargo run --release -p filmcraft                           # 桌面应用，附带一个演示项目
cargo run --release -p filmcraft -- --control 9876         # 再加上 JSON 行控制服务器
cargo run --release -p filmcraft-cli -- commands           # 列出每一个引擎命令
cargo run --release -p filmcraft-cli -- mcp                # MCP 服务器（无界面）
```

界面与字幕里使用的日语文字来自 [craft-fonts](https://github.com/storytold/craft-fonts)，它是一个可选的构建输入（发布构建始终包含它；没有它时，FilmCraft 使用自身字体与系统字体）：

```sh
git clone https://github.com/storytold/craft-fonts ../craft-fonts
CRAFT_FONTS_DIR="$PWD/../craft-fonts" cargo run --release -p filmcraft
```

控制协议记录在 [docs/control-protocol.md](https://github.com/storytold/filmcraft/blob/main/docs/control-protocol.md)。遇到问题，或想展示你的作品？来 [Discord](https://discord.gg/artcraft) 告诉我们。

<a id="文档"></a>

## 文档

| | |
|---|---|
| [CONTRIBUTING.md](https://github.com/storytold/filmcraft/blob/main/CONTRIBUTING.md) · [docs/contributing.md](https://github.com/storytold/filmcraft/blob/main/docs/contributing.md) | 环境搭建、质量门禁、提交规范，以及如何添加命令、特效、编解码器、面板与资源 |
| [AGENTS.md](https://github.com/storytold/filmcraft/blob/main/AGENTS.md) | 每位贡献者都必须遵守的规则：资源、净室、许可证 |
| [docs/architecture.md](https://github.com/storytold/filmcraft/blob/main/docs/architecture.md) | 分层、数据模型、时间基准、命令系统、渲染与导出管线 |
| [docs/testing.md](https://github.com/storytold/filmcraft/blob/main/docs/testing.md) | 单元、属性与 ffmpeg 对照测试，精度标准，基准测试 |
| [docs/agents.md](https://github.com/storytold/filmcraft/blob/main/docs/agents.md) | 通过 MCP 与控制通道驱动 FilmCraft；智能体如何参与开发 |
| [docs/control-protocol.md](https://github.com/storytold/filmcraft/blob/main/docs/control-protocol.md) | 控制通道与 MCP 参考 |
| [docs/project-files.md](https://github.com/storytold/filmcraft/blob/main/docs/project-files.md) | `.fcproj` 格式、schema 迁移、自动保存与崩溃恢复 |
| [docs/graphics.md](https://github.com/storytold/filmcraft/blob/main/docs/graphics.md) · [docs/captions.md](https://github.com/storytold/filmcraft/blob/main/docs/captions.md) | 文字引擎、图形剪辑与工具；唱词轨与格式 |
| [ROADMAP.md](https://github.com/storytold/filmcraft/blob/main/ROADMAP.md) | 阶段、对等度数字、语言、下一步与发展日志 |
| [docs/target-app-parity.md](https://github.com/storytold/filmcraft/blob/main/docs/target-app-parity.md) · [docs/gaps.md](https://github.com/storytold/filmcraft/blob/main/docs/gaps.md) · [docs/roadmap.md](https://github.com/storytold/filmcraft/blob/main/docs/roadmap.md) | 对等度评估、差距排序清单、里程碑与当前重点 |
| [docs/codec-parity.md](https://github.com/storytold/filmcraft/blob/main/docs/codec-parity.md) · [docs/file-format-parity.md](https://github.com/storytold/filmcraft/blob/main/docs/file-format-parity.md) · [docs/hardware-parity.md](https://github.com/storytold/filmcraft/blob/main/docs/hardware-parity.md) · [docs/ui-parity.md](https://github.com/storytold/filmcraft/blob/main/docs/ui-parity.md) · [docs/localization-parity.md](https://github.com/storytold/filmcraft/blob/main/docs/localization-parity.md) | 分维度的对等度检查清单 |

<a id="状态"></a>

## 状态

FilmCraft 年轻且快速演进。剪辑、修剪、多机位、调色、关键帧、特效、字幕、唱词、混音、编解码器与导出，今天都已可用。

FilmCraft 目前处于 **alpha** 阶段。我们跟踪两个数字（[docs/target-app-parity.md](https://github.com/storytold/filmcraft/blob/main/docs/target-app-parity.md)，2026-10-10 重新测量）：

- **功能广度：约 86%。** FilmCraft 中已存在的专业 NLE 菜单项、特效、转场、面板与格式（菜单项测得 92%、特效 100%）。
- **可用于真实工作：约 56%。** 我们诚实估计，FilmCraft 距离能处理真实项目的完整制作工作还有多远。

目前最大的差距：

- **大素材上的速度。** 硬件解码在 macOS 与 Windows 上可用，对于 H.264 与 HEVC 在 Linux（VA-API，或使用 NVIDIA 驱动的 NVDEC；VP9 与 AV1 在那里为软件解码）上也可用。混合模式与最常见的特效运行在 GPU 上，但调色、抠像与导出渲染仍运行在 CPU 上；H.264 编码可在 macOS 上，以及在 Windows 与 Linux 配合 NVIDIA GPU 时使用硬件编码器（需开启，Export ▸ Hardware encoding 导出 ▸ 硬件编码）；H.265 导出在两边都只能走硬件编码（HDR 序列通过 NVENC 导出 Main 10 PQ / HLG；VideoToolbox 写出 8-bit SDR）（[#30](https://github.com/storytold/filmcraft/issues/30)）。
- **原生 `.prproj` 项目导入。** 尚无法打开 `.prproj` 文件；请用 FCP7 XML、AAF 或 OTIO 把序列带过来。
- **无插件。** 不托管 VST3 / Audio Units 或 OpenFX。
- **交付编解码器。** H.264 是我们唯一用软件导出的交付编解码器；H.265 只能通过硬件编码器导出（Windows 上 NVIDIA：Main 8-bit SDR 与 Main 10 HDR PQ / HLG；macOS 上 VideoToolbox：8-bit Main，SDR）；暂无 AV1 导出。
- **真实素材与平台。** 我们的解码器在一致性码流上逐位精确，但现实中的相机与手机文件测试较少。Windows 与 Linux 得到的测试远少于 macOS。
- **AI 功能。** 目前很少；语音转文字为可选，且默认关闭。

带有真实素材的 bug 报告是你最能帮到我们的东西： [提交 issue](https://github.com/storytold/filmcraft/issues) 或来 [Discord](https://discord.gg/artcraft) 告诉我们。

## 架构

一个分层的 Cargo 工作区：

| 层 | Crate |
|---|---|
| 编解码器与容器 | `h264`、`h264enc`、`hevc`、`vp9`、`prores`、`aac`、`opus`、`isobmff`、`matroska`、`avi`、`bitstream` |
| 基础库 | `time`、`geom`、`color`、`frame`、`media`、`text`、`project`、`audio-dsp` |
| 编辑与互通 | `edit`、`codecs`、`captions`、`format`（项目文件）、`interchange` |
| 渲染与输出 | `render`、`gpu`、`export` |
| 引擎 | `engine`：命令注册表、会话、撤销、任务 |
| 前端 | `ui-egui`、`automation`（MCP）、`apps/filmcraft`、`apps/filmcraft-cli` |
| 测试支持 | `testkit`（ffmpeg 对照基准、测试素材）、`golden`（黄金图像测试） |

前端以下的部分都不依赖任何 UI 工具包或操作系统 API。`cargo xtask ci` 会检查格式化、lint、测试、分层规则、资源署名与 wasm 构建。

<a id="下载"></a>

## 下载

**刚开始用 FilmCraft？** 从 [getartcraft.com 上的 FilmCraft 页面](https://getartcraft.com/apps/filmcraft) 下载。那是最简单的安装方式。

**想要某个特定构建或格式？** 在 GitHub 上，[最新发布](https://github.com/storytold/filmcraft/releases/latest) 包含下方列出的每个构建，[全部发布](https://github.com/storytold/filmcraft/releases) 则包含更早的版本及其说明。文件名中的 `<ver>` 是版本号，`SHA256SUMS.txt` 列出了每个文件的校验和。

### Windows

| 构建 | 安装程序 | 便携版 |
|---|---|---|
| x64（64 位 Intel/AMD） | `filmcraft-<ver>-windows-x64.msi` | `filmcraft-<ver>-windows-x64-portable.zip` |
| arm64（骁龙及其它 ARM PC） | `filmcraft-<ver>-windows-arm64.msi` | `filmcraft-<ver>-windows-arm64-portable.zip` |
| x86（32 位） | `filmcraft-<ver>-windows-x86.msi` | `filmcraft-<ver>-windows-x86-portable.zip` |

安装程序与可执行文件均经过代码签名。

**如果应用在 Windows 上打不开：** 桌面应用默认只初始化 Vulkan 与 DirectX 12，而非 OpenGL。让 wgpu 同时创建一个 OpenGL 实例，可能在窗口出现前就让某些显卡驱动（AMD 的
`atio6axx.dll`）崩溃，于是应用会在任务管理器里一闪而过然后退出。`WGPU_BACKEND` 可覆盖默认设置用于排障（例如 `dx12` 或 `vulkan`）。在
PowerShell 中，于包含可执行文件的目录下：

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\filmcraft.exe
Remove-Item Env:WGPU_BACKEND                     # 恢复默认设置，供后续启动使用
```

显式指定 `gl` 会在受影响的系统上让驱动崩溃重现。macOS、Linux 与网页端的后端默认值保持不变。

一台装有同一厂商不同驱动包的 GPU 的 PC（例如一台带有集成与独立两块 AMD GPU 的笔记本），可能把同一块 GPU 列出两次，各自经由安装的某个 Vulkan 驱动版本。通过陈旧那份驱动的窗口会在驱动内部崩溃
（`amdvlk64.dll`，退出码 `0xc0000005`）。FilmCraft 会使用较新的那块绘制，并在
`%APPDATA%\FilmCraft\Logs\filmcraft.log` 中说明；为每块 GPU 只安装一个驱动包即可移除
重复项。每块 GPU 各一个驱动时，适配器仍是 wgpu 所选的那块，与之前一致。

### macOS

| 构建 | 文件 | 备注 |
|---|---|---|
| 应用，通用版（Apple 芯片 + Intel） | `filmcraft-<ver>-macos-universal.dmg` | 已签名并公证 |
| 命令行工具，通用版 | `filmcraft-cli-<ver>-macos-universal.zip` | 已签名并公证 |

### Linux

| 格式 | x86_64 | aarch64（ARM64） | 备注 |
|---|---|---|---|
| AppImage | `filmcraft-<ver>-linux-x86_64.AppImage` | `filmcraft-<ver>-linux-aarch64.AppImage` | 随处可运行；通过 [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)（`.zsync` 文件）自我更新 |
| Flatpak | `filmcraft-<ver>-linux-x86_64.flatpak` | `filmcraft-<ver>-linux-aarch64.flatpak` | 沙箱化；`flatpak install --user <file>` |
| Debian/Ubuntu | `filmcraft-<ver>-linux-x86_64.deb` | `filmcraft-<ver>-linux-aarch64.deb` | |
| Fedora/RHEL/openSUSE | `filmcraft-<ver>-linux-x86_64.rpm` | `filmcraft-<ver>-linux-aarch64.rpm` | |
| 压缩包 | `filmcraft-<ver>-linux-x86_64.tar.gz` | `filmcraft-<ver>-linux-aarch64.tar.gz` | 解压后运行 `./install.sh` |

RISC-V（riscv64）：`filmcraft-<ver>-linux-riscv64.tar.gz`（仅压缩包；需要 glibc 2.39+，例如 Ubuntu 24.04
或 Debian 13）。

压缩包安装程序会把 FilmCraft、其命令行工具与桌面集成放进
`~/.local`，无需管理员权限。要为所有用户安装，请改用
`sudo ./install.sh --prefix /usr/local`。再次运行安装程序会更新现有安装。

**Gentoo（社区维护）：** [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay)
把 Linux 发布版打包为 `media-video/filmcraft-bin`。它由社区维护，而非
FilmCraft 团队，因此打包问题请向该 overlay 反馈：

```sh
eselect repository add snakebyte git https://github.com/switch87/snakebyte-overlay.git
emaint sync -r snakebyte
echo 'media-video/filmcraft-bin ~amd64' >> /etc/portage/package.accept_keywords/filmcraft
emerge --ask media-video/filmcraft-bin
```

### FreeBSD

| 构建 | 文件 |
|---|---|
| x86_64 | `filmcraft-<ver>-freebsd-x86_64.tar.gz` |

### 网页端（WebAssembly）

| 构建 | 文件 | 备注 |
|---|---|---|
| 静态站点 | `filmcraft-web-<ver>.zip` | 运行于现代浏览器；托管到任意静态服务器 |

## Crafting 系列应用

FilmCraft 是 **Crafting 系列应用** 之一：由
[ArtCraft](https://getartcraft.com/) 团队出品的免费、开源创意工具，每一个都用 Rust 从零编写，且都能独立运行。

| | 应用 | 用途 | 代码 | 了解更多 |
|:-:|---|---|---|---|
| <img src="https://raw.githubusercontent.com/storytold/photocraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.photocraft.png" alt="" width="32" height="32"> | **PhotoCraft** | 图像编辑：图层、蒙版、文字与真实的 PSD 文件 | [GitHub](https://github.com/storytold/photocraft) | [官网](https://getartcraft.com/apps/photocraft) |
| <img src="https://raw.githubusercontent.com/storytold/vectorcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.vectorcraft.png" alt="" width="32" height="32"> | **VectorCraft** | 矢量插画 | [GitHub](https://github.com/storytold/vectorcraft) | [官网](https://getartcraft.com/apps/vectorcraft) |
| <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.filmcraft.png" alt="" width="32" height="32"> | **FilmCraft** | **视频剪辑、调色与声音 · 你在这里** | [GitHub](https://github.com/storytold/filmcraft) | [官网](https://getartcraft.com/apps/filmcraft) |
| <img src="https://raw.githubusercontent.com/storytold/lightcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.lightcraft.png" alt="" width="32" height="32"> | **LightCraft** | 照片库与 RAW 显影 | [GitHub](https://github.com/storytold/lightcraft) | [官网](https://getartcraft.com/apps/lightcraft) |
| <img src="https://raw.githubusercontent.com/storytold/pdfcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.pdfcraft.png" alt="" width="32" height="32"> | **PdfCraft** | 阅读、整理与保护 PDF | [GitHub](https://github.com/storytold/pdfcraft) | [官网](https://getartcraft.com/apps/pdfcraft) |
| <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.effectcraft.png" alt="" width="32" height="32"> | **EffectCraft** | 动态图形与视觉特效 | [GitHub](https://github.com/storytold/effectcraft) | [官网](https://getartcraft.com/apps/effectcraft) |
| <img src="https://raw.githubusercontent.com/storytold/designcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.designcraft.png" alt="" width="32" height="32"> | **DesignCraft** | 页面排版与出版 | [GitHub](https://github.com/storytold/designcraft) | [官网](https://getartcraft.com/apps/designcraft) |

以及 [**ArtCraft**](https://getartcraft.com/) 本身 —— 我们面向想要真正掌控的艺术家打造的 AI 图像与视频工作室。

<br>

<p align="center">
  <a href="https://discord.gg/artcraft"><img alt="加入 ArtCraft 社区（Discord）" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>
</p>

<h3 align="center">来和我们一起创作</h3>

<p align="center">
  我们的 Discord 是所有类型艺术家相聚的地方：画画、拍摄、绘图、剪辑电影、
  排版的人，以及仍在摸索自己喜欢创作什么的人。分享你正在做的，
  寻求帮助，告诉我们哪里坏了，或者告诉我们你希望这些工具能做什么。
  无论你用什么媒介、做了多久，这里都欢迎你。
</p>

<p align="center">
  <a href="https://discord.gg/artcraft"><b>discord.gg/artcraft</b></a> ·
  <a href="https://getartcraft.com/">getartcraft.com</a> ·
  <a href="https://getartcraft.com/apps">Crafting 系列应用</a> ·
  <a href="https://getartcraft.com/apps/filmcraft">FilmCraft</a>
</p>

<br>

<a id="许可与致谢"></a>

## 许可与致谢

FilmCraft 采用双重许可：你可在 [MIT](https://github.com/storytold/filmcraft/blob/main/LICENSE-MIT) 或 [Apache-2.0](https://github.com/storytold/filmcraft/blob/main/LICENSE-APACHE) 之间任选其一。版权所有 (c) 2026 ArtCraft Team 与 FilmCraft 贡献者。必要的声明见 [NOTICE](https://github.com/storytold/filmcraft/blob/main/NOTICE)。

打包的字体、图标、图像及其它资源保留各自的开放许可证；每一样都在 [ATTRIBUTION.md](https://github.com/storytold/filmcraft/blob/main/ATTRIBUTION.md) 中按其作者、来源与许可证列出。使用
[craft-fonts](https://github.com/storytold/craft-fonts)（所有官方发布版）构建出的版本还会内嵌其字体
（OFL-1.1），列在其 [ATTRIBUTION.md](https://github.com/storytold/craft-fonts/blob/main/ATTRIBUTION.md) 中。

**截图中的素材与音乐：** NASA 的阿波罗 11 号电影与电视素材来自 [images.nasa.gov](https://images.nasa.gov)（发射、发射控制中心、月面与回收），以及阿波罗 11 号的空地语音记录稿，均为美国政府公有领域作品（NASA 不背书本项目）；《活死人之夜》（1968）、《魂魄出窍》（1962）与《谜中谜》（1963）均为美国公有领域作品；NASA 的《国际空间站地球俯瞰》；肖邦的《夜曲》Op. 48 No. 1 与《叙事曲》No. 1，由 Musopen 演奏并以 CC0 发布。媒体本身不在本仓库中。每个资源的来源与细节都在 [ATTRIBUTION.md](https://github.com/storytold/filmcraft/blob/main/ATTRIBUTION.md) 中。

FilmCraft 是一个独立实现。它不含任何专有代码、图标、图像、预设或 LUT，也不含 GPL 或 LGPL 代码；每个图标都用代码绘制，每个资源都是开放许可并具名署名（[AGENTS.md](https://github.com/storytold/filmcraft/blob/main/AGENTS.md)），ArtCraft 名称与徽标除外 —— 它们是 ArtCraft Team 的商标，依 [`docs/brand/LICENSE-brand.txt`](https://github.com/storytold/filmcraft/blob/main/docs/brand/LICENSE-brand.txt) 使用。ffmpeg 仅作为外部测试对照基准使用。

[`docs/brand/`](https://github.com/storytold/filmcraft/tree/main/docs/brand/) 中的 ArtCraft 名称、字标与徽标是
ArtCraft Team 的商标，不受本许可证覆盖。它们只能原样、且只能作为
本仓库与 FilmCraft 的一部分，依据 [`docs/brand/LICENSE-brand.txt`](https://github.com/storytold/filmcraft/blob/main/docs/brand/LICENSE-brand.txt) 使用。
分支与修改版本必须移除它们。

<br>

<p align="center">
  <a href="https://getartcraft.com/"><img alt="ArtCraft" src="https://raw.githubusercontent.com/storytold/filmcraft/main/docs/brand/artcraft-mark.svg" width="28"></a><br>
  <sub>由 <a href="https://getartcraft.com/">ArtCraft</a> 团队与社区打造。</sub>
</p>

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=storytold/filmcraft&type=Date&legend=top-left)](https://www.star-history.com/?repos=storytold%2Ffilmcraft&type=date&legend=top-left)
