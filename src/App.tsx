import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Fitness from './components/Fitness'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200">
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
