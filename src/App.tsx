import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Fitness from './components/Fitness'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const root = document.documentElement
    if (stored === 'dark') {
      root.classList.add('dark')
    } else if (stored === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.remove('dark') // default light
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF5FF] dark:bg-[#0f0a1a] text-[#1e1b4b] dark:text-[#e2e8f0] transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Fitness />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}
