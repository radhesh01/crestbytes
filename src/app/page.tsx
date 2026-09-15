import Hero from '../components/sections/Hero'
import Positioning from '../components/sections/Positioning'
import SelectedWork from '../components/sections/SelectedWork'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Process from '../components/sections/Process'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <div id="hero-end" />
      <Positioning />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <FinalCTA />
    </>
  )
}
