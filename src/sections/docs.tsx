import { Section } from '../components/ui'
import { docGroups } from '../data/content'

const REPO = 'https://github.com/storytold/filmcraft'
const blob = (path: string) => `${REPO}/blob/main/${path}`

export function Docs() {
  const total = docGroups.reduce((sum, group) => sum + group.docs.length, 0)

  return (
    <Section
      id="docs"
      title="文档"
      lead="仓库里的全部文档，点开就是原文。分成上手与贡献、架构与数据、智能体与协议、测试与对等度、路线与进度、设备与交互六组。"
      spec={[
        { label: '文档数量', value: `${total} 篇` },
        { label: '源码分支', value: 'main' },
      ]}
    >
      <div className="docs-groups">
        {docGroups.map((group) => (
          <div className="docs-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="docs-grid">
              {group.docs.map((doc) => (
                <a
                  key={doc.path}
                  className="doc"
                  href={blob(doc.path)}
                  target="_blank"
                  rel="noreferrer"
                  title={doc.path}
                  aria-label={`${doc.desc}（${doc.path}）`}
                >
                  <span className="doc-desc">{doc.desc}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="os-foot">
        其它文件也都在仓库里：
        <a href={`${REPO}/tree/main/docs`} target="_blank" rel="noreferrer">
          浏览 docs 目录
        </a>
        ，或
        <a href={`${REPO}/tree/main`} target="_blank" rel="noreferrer">
          查看整个仓库
        </a>
        。
      </p>
    </Section>
  )
}
