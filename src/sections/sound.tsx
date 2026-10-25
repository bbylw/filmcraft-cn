import { Section, Tile } from '../components/ui'

const meters = [
  { label: 'M', value: '-14.2', lit: 12 },
  { label: 'S', value: '-18.6', lit: 10 },
  { label: 'I', value: '-21.4', lit: 8 },
  { label: 'TP', value: '-1.2', lit: 17 },
]

const SEGMENTS = 18
const scale = ['0', '-6', '-12', '-18', '-24', '-30']

function Meter({ label, value, lit }: { label: string; value: string; lit: number }) {
  return (
    <div className="meter-col">
      <div className="meter" role="img" aria-label={`${label} 读数 ${value} LUFS`}>
        {Array.from({ length: SEGMENTS }, (_, index) => {
          const zone = index >= 15 ? 'peak' : index >= 12 ? 'warn' : 'ok'
          return <i key={index} data-on={index < lit ? 'true' : undefined} data-zone={zone} />
        })}
      </div>
      <div className="meter-lab">{label}</div>
      <div className="meter-val">{value}</div>
    </div>
  )
}

export function Audio() {
  return (
    <Section
      id="audio"
      title="音频"
      lead="符合广播标准的响度表，自研 DSP 库上的剪辑效果，以及像调音台一样的自动化。声卡作主时钟，画面跟随声音。"
      spec={[
        { label: '响度标准', value: 'ITU-R BS.1770 / EBU R128' },
        { label: '混音性能', value: '24 轨 × 3 效果 ≈ 6× 实时' },
        { label: '整体读数', value: '与 ffmpeg ebur128 差 ≤ 0.1 LU' },
      ]}
    >
      <div className="tiles">
        <Tile className="col-span-12 md:col-span-4" style={{ minHeight: 210 }}>
          <div className="meter-panel" style={{ border: 0, background: 'none', padding: 0 }}>
            <div className="meter-h">
              <span>LUFS</span>
              <span>整体 -21.4</span>
            </div>
            <div className="meter-body">
              <div className="meter-row">
                {meters.map((meter) => (
                  <Meter key={meter.label} {...meter} />
                ))}
              </div>
              <div className="meter-scale" aria-hidden="true">
                {scale.map((tick) => (
                  <span key={tick}>{tick}</span>
                ))}
              </div>
            </div>
          </div>
        </Tile>

        <Tile className="col-span-12 md:col-span-8">
          <h3>响度表与 DSP</h3>
          <p>
            瞬时、短期与整体响度及真峰，与峰值表并列。剪辑效果包括参数均衡、高通、低通与带通滤波器、动态处理、真峰限制器、延迟、混响、降噪、去嗡声、反相与变调。参数可打关键帧，效果在擦洗、播放与导出之间保持连续，并做延迟补偿。
          </p>
          <h3 className="mt-3">两个混音器</h3>
          <p>
            音频轨道混音器与音频剪辑混音器：推子、声相、静音、独奏，每条轨道五个插入槽（推子前或推子后）、发送、子混音与混音轨，全部采样精确并做延迟补偿。
          </p>
        </Tile>

        <Tile title="像调音台一样的自动化" className="col-span-12 md:col-span-6">
          <p>
            读取、闩锁、触控与写入模式，在播放时从混音器实时录制，并以轨道关键帧的形式在时间轴上显示与编辑。外加音频增益对话框（设定、调整、归一化）与等功率交叉淡化。
          </p>
        </Tile>

        <Tile title="音频时钟播放" className="col-span-12 md:col-span-6">
          <p>
            声卡作主时钟，画面跟随声音，而非相反。参数均衡器、真峰限制器与混响都在自研 DSP
            库上运行，延迟补偿贯穿擦洗、播放与导出。
          </p>
        </Tile>
      </div>
    </Section>
  )
}

export function Captions() {
  return (
    <Section
      id="captions"
      title="字幕与唱词"
      lead="真正的文字引擎，节目录监视器上的文字、形状与钢笔工具，以及帧精确的唱词轨。"
      spec={[
        { label: '文字', value: 'OpenType 塑形 · 双向文本' },
        { label: '唱词轨', value: 'Subtitle / CEA-608 / 708' },
        { label: '交换', value: 'SRT · WebVTT · SCC' },
      ]}
    >
      <div className="tiles">
        <Tile title="文字引擎" className="col-span-12 md:col-span-4">
          <p>
            OpenType 塑形，支持字距与连字、双向文本、换行、字距调整与行距，在线性光中绘制，任意缩放或旋转都保持清晰。
          </p>
        </Tile>
        <Tile title="图形与形状" className="col-span-12 md:col-span-4">
          <p>
            点击即输入，用光标与选区编辑，拖出矩形、椭圆与路径。图形剪辑容纳文字与形状图层，带填充、描边、背景与阴影，全部可打关键帧，并在属性面板中编辑。
          </p>
        </Tile>
        <Tile title="唱词" className="col-span-12 md:col-span-4">
          <p>
            唱词轨支持 Subtitle、CEA-608、CEA-708 与图文电视（Teletext）格式；以帧精确的时间导入导出
            SRT、WebVTT 与 SCC；在文字面板中编辑唱词，并将其烧录进导出文件。
          </p>
        </Tile>
      </div>
    </Section>
  )
}
