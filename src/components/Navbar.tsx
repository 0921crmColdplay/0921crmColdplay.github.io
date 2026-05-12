import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const navKeys = ['about', 'projects', 'fitness', 'awards', 'contact'] as const

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" className="text-lg font-bold gradient-text">
          CRM
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg
                         hover:bg-white/5 transition-all duration-200"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/5"
        >
          <div className="flex flex-col px-6 py-4 gap-2">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-gray-300 hover:text-white rounded-lg
                           hover:bg-white/5 transition-colors"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
