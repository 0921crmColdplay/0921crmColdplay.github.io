import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const navKeys = ['about', 'projects', 'fitness', 'awards', 'contact'] as const

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Active section detection
    const sections = navKeys.map(k => document.getElementById(k))
    const onScrollSpy = () => {
      for (const s of sections) {
        if (!s) continue
        const rect = s.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(s.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScrollSpy, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScrollSpy)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-cyber-border'
          : 'bg-transparent'
      }`}
    >
      {/* Top scanline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-lg text-neon-blue hover:neon-text transition-all duration-300">
          {'<CRM/>'}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={`relative px-4 py-2 text-xs font-mono tracking-wider transition-all duration-200 rounded
                ${activeSection === key
                  ? 'text-neon-blue'
                  : 'text-gray-500 hover:text-gray-300'
                }`}
            >
              <span className="text-neon-blue/50 mr-1">
                {activeSection === key ? '>_' : '#'}
              </span>
              {t(`nav.${key}`)}
              {activeSection === key && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-px bg-neon-blue"
                  transition={{ type: 'spring', bounce: 0.2 }}
                />
              )}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-cyber-border flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-neon-blue transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-b border-cyber-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navKeys.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-mono rounded transition-colors ${
                    activeSection === key
                      ? 'text-neon-blue bg-neon-blue/5'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}
                >
                  <span className="text-neon-blue/50 mr-2">{'>_'}</span>
                  {t(`nav.${key}`)}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3 mt-2 border-t border-cyber-border">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
