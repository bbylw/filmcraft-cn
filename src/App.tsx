import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer, SkipLink } from './components/Footer'
import { Color, Editing, Effects } from './sections/craft'
import { Audio, Captions } from './sections/sound'
import { Export, Formats, Interchange } from './sections/formats'
import { Agents, Everywhere, Start } from './sections/agents'
import { Architecture, Status } from './sections/status'
import { Crafting, Download, License } from './sections/download'
import { Docs } from './sections/docs'

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main>
        <Hero />
        <Editing />
        <Color />
        <Effects />
        <Audio />
        <Captions />
        <Formats />
        <Export />
        <Interchange />
        <Agents />
        <Everywhere />
        <Start />
        <Status />
        <Architecture />
        <Download />
        <Crafting />
        <Docs />
        <License />
      </main>
      <Footer />
    </>
  )
}
