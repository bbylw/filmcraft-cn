import { FeatureRow, Frame, Proll, ProllRow, Section, Tile } from '../components/ui'
import { shot } from '../data/content'

const trimKeys = (
  <>
    在源监视器中标记入点与出点，然后插入（<kbd>,</kbd>）或覆盖（<kbd>.</kbd>）到已打补丁的轨道上。提升（
    <kbd>;</kbd>）与抽取（<kbd>&apos;</kbd>）把选段取出。
  </>
)

export function Editing() {
  return (
    <Section
      id="editing"
      title="剪辑"
      lead="熟悉的面板、工作区、工具与快捷键，让你的双手天然知道每样东西放在哪里。而在表层之下，它是从比特流开始全新打造的。"
      spec={[
        { label: '时间基准', value: '254,016,000,000 ticks/s' },
        { label: '修剪工具', value: '6 种，含动态修剪' },
        { label: '撤销', value: '无限 + 历史面板' },
      ]}
    >
      <FeatureRow title="三点编辑">{trimKeys}</FeatureRow>

      <FeatureRow title="全类型修剪">
        波纹、滚动、滑动、滑行、速率拉伸与剃刀工具。修剪模式把编辑点选为波纹、滚动或修剪，逐帧微调（
        <kbd>⌥←</kbd> <kbd>⌥→</kbd>，配合 <kbd>⇧</kbd> 可 ×5），用 <kbd>⌃T</kbd> 切换修剪类型，用 <kbd>E</kbd>{' '}
        延伸到播放头。<kbd>Q</kbd> 与 <kbd>W</kbd> 做指向播放头的波纹修剪。<strong>修剪监视器</strong>
        显示编辑点两侧画面，而<strong>动态修剪</strong>在播放时实时修剪：<kbd>L</kbd> 前进、<kbd>J</kbd>{' '}
        后退、<kbd>K</kbd> 停止并作为一步撤销提交。
      </FeatureRow>

      <FeatureRow title="精确时间">
        每一次编辑都基于整数 tick 计算：<strong>每秒 254,016,000,000 个 tick</strong>
        ，可被所有常见帧率与采样率整除。23.976、29.97 丢帧与 59.94 都是精确值，而非近似值。
      </FeatureRow>

      <FeatureRow title="专业人士依赖的细节">
        带颜色、名称与持续时长的标记；用<strong>标记 ▸ 将标记导出为 CSV…</strong>
        导出序列审阅笔记；在一条或所有轨道上添加编辑（<kbd>⌘K</kbd>）；嵌套；复制、粘贴与粘贴插入；波纹删除与闭合间隙；吸附；带历史面板的无限撤销。
      </FeatureRow>

      <FeatureRow title="你的按键">
        键盘快捷键编辑器（<kbd>⌥⌘K</kbd>
        ）带一张手绘键盘图、面板专属快捷键、冲突警告，以及 FilmCraft 与标准 NLE 键位预设。
      </FeatureRow>

      <FeatureRow title="永不丢失工作">
        保存是原子操作，自动保存保留一组滚动的版本历史，每次编辑约一秒后写入的崩溃恢复日志，能在崩溃或断电后找回未保存的改动。
      </FeatureRow>

      <div className="mt-6">
        <Frame
          src={shot('timeline.png')}
          alt="时间轴特写：《活死人之夜》的镜头，V1 上有叠化，V2 上有插入镜头，A2 上是肖邦夜曲的波形，右侧是响度表"
          ratio="band"
          caption="近距离：叠化、V2 上的插入镜头、A2 上的配乐、彩色标记，以及右侧的响度表。"
          right="《活死人之夜》· 1968"
        />
      </div>
    </Section>
  )
}

const pipeline = [
  { title: '基础校正', body: '色温与色调、曝光、对比度、高光、阴影、白色、黑色、饱和度。' },
  {
    title: '创意',
    body: '八个内置风格带强度调节，外加褪色胶片、锐化与鲜活度。这些风格是用代码写的色彩变换，而非 LUT 文件。',
  },
  {
    title: '曲线',
    body: 'RGB 曲线编辑器，采用单调三次插值（无过冲），以及色相 vs 饱和度、色相 vs 色相、色相 vs 亮度、亮度 vs 饱和度、饱和度 vs 饱和度。',
  },
  { title: '色轮', body: '阴影、中间调与高光三个色轮，各自带独立的亮度控制。' },
  { title: 'HSL 二级', body: '按色相、饱和度与亮度抠出某个颜色，把抠像结果以蒙版形式查看，只校正你选中的部分。' },
  { title: '暗角', body: '强度、中点、圆度与羽化。' },
]

export function Color() {
  return (
    <Section
      id="color"
      title="调色"
      lead="一套完整的调色面板，按调色师的工作顺序排列。所有调色都在线性光、32 位浮点下进行，示波器由已调色的帧计算得出。"
      spec={[
        { label: '处理精度', value: '32-bit float · 线性光' },
        { label: '内置风格', value: '8 种 + 强度调节' },
        { label: '曲线', value: '单调三次插值，无过冲' },
      ]}
    >
      <div className="tiles">
        <div className="col-span-12 md:col-span-6">
          <Frame
            src={shot('color.png')}
            alt="《谜中谜》的调色工作区：节目录监视器旁是波形示波器与矢量示波器"
            caption="《谜中谜》（1963）的调色工作区，节目录监视器旁是实时示波器。"
            right="Color workspace"
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <ol className="pipe">
            {pipeline.map((item) => (
              <li key={item.title}>
                <div>
                  <b>{item.title}</b>
                  <span>{item.body}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="col-span-12 md:col-span-4">
          <Frame
            src={shot('scopes.png')}
            alt="视频示波器：一段《谜中谜》画面的绿色亮度波形与矢量示波器"
            height={340}
            objectPosition="center 34%"
            caption={
              <>
                <b>如实呈现的示波器。</b>波形与矢量示波器都由已调色的帧计算得出。
              </>
            }
          />
        </div>

        <div className="col-span-12 md:col-span-8">
          <Tile className="h-full">
            <Proll>
              <ProllRow title="在线性光、32 位浮点下调色">
                基础校正、风格、曲线、色轮与暗角层层叠加时不会互相污染，示波器读数从已调色的帧反算，而不是从原始信号估算。
              </ProllRow>
              <ProllRow title="每个分区各自带开关">
                调色面板按调色师的工作顺序排列：基础校正、创意、曲线、色轮与匹配、HSL 二级、暗角。任何一段都可以单独关掉比对。
              </ProllRow>
              <ProllRow title="HSL 二级当蒙版看">
                按色相、饱和度与亮度抠出某个颜色，把抠像结果以蒙版形式查看，只校正你选中的那一部分画面。
              </ProllRow>
            </Proll>
          </Tile>
        </div>
      </div>
    </Section>
  )
}

const effectTags = [
  '模糊',
  '散景',
  '对焦',
  '复合',
  '抠像',
  'Ultra Key',
  '轨道遮罩',
  '四角定位',
  '湍流置换',
  '防抖稳定',
  '灯光与辉光',
  '沉浸式视频 VR',
  '时间海报化',
  '回声',
]

export function Effects() {
  return (
    <Section
      id="effects"
      title="特效与动效"
      lead="16 个分类、90 多种特效，约 30 种转场。效果控制面板在每个参数下方显示关键帧轨道，每个被动画化的参数都能展开成数值与速度曲线。"
      spec={[
        { label: '特效库', value: '16 分类 / 90+' },
        { label: '转场', value: '约 30 种' },
        { label: '混合模式', value: '26 种' },
      ]}
    >
      <div className="tiles">
        <Tile className="col-span-12 md:col-span-4">
          <div className="num-big">
            90<small>+</small>
          </div>
          <div className="num-unit">视频特效，横跨 16 个分类</div>
        </Tile>
        <Tile className="col-span-12 md:col-span-4">
          <div className="num-big">30</div>
          <div className="num-unit">转场：交叉叠化、渐黑/渐白、胶片叠化、擦除、光圈、推移、滑动、缩放、翻页、立方体翻转</div>
        </Tile>
        <Tile className="col-span-12 md:col-span-4">
          <div className="num-big">26</div>
          <div className="num-unit">混合模式，每个剪辑都带运动与不透明度</div>
        </Tile>

        <Tile title="一套全面的视频特效库" className="col-span-12 md:col-span-7">
          <p>传统特效，以及约 30 种转场。每个剪辑都带运动与不透明度：位置、缩放、旋转、锚点与防闪烁。</p>
          <div className="taglist">
            {effectTags.map((tag) => (
              <b key={tag}>{tag}</b>
            ))}
          </div>
        </Tile>

        <Tile title="进阶关键帧" className="col-span-12 md:col-span-5">
          <p>
            线性、贝塞尔、自动与连续贝塞尔、定格、缓入与缓出。效果控制面板在每个参数下方显示一条关键帧轨道，位于带播放头手柄的时间标尺之下；每个被动画化的参数都能展开成
            <span className="strong">数值与速度曲线</span>，并带有可拖拽的影响手柄。
          </p>
          <p>效果控制面板与属性面板共享同一个关键帧导航器 ◀ ◆ ▶：在播放头处添加或删除关键帧，前进到上一帧或下一帧。</p>
        </Tile>

        <div className="col-span-12 md:col-span-7">
          <Frame
            src={shot('keyframes.png')}
            alt="效果控制面板中某段《活死人之夜》标题卡上缓动缩放推入的数值曲线与速度曲线"
            height={240}
            caption="标题卡上的一次缓动推入：数值曲线、速度曲线与贝塞尔影响手柄。"
            right="Keyframe editor"
          />
        </div>

        <Tile className="col-span-12 md:col-span-5 flex flex-col justify-center" title="GPU 合成器">
          <p>
            基于 wgpu（Metal、Vulkan、DirectX 12、WebGPU）构建。它直接从解码器中以 YUV
            采样，采用足迹超采样，并在线性光中混合。一条 CPU 渲染路径会渲染相同的帧，两者互为对照测试。
          </p>
        </Tile>
      </div>
    </Section>
  )
}
