import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []
  )
  return (
    <main className='bg-[#0a192f]'>
      <Intro />
      <About />
      <Skills />
      <Projects />

    </main>
  )
}

export default App
