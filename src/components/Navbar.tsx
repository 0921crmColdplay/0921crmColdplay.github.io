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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0f0a1a]/80 backdrop-blur-xl border-b border-[#ede4ff] dark:border-[#2d1f40] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" className="text-xl font-heading font-bold gradient-text tracking-tight">
          CRM
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="relative text-sm text-[#64748b] dark:text-[#94a3b8] hover:text-primary
                         dark:hover:text-[#a78bfa] transition-colors duration-200 font-medium"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-[#ede4ff] dark:border-[#2d1f40] flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#64748b]"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#0f0a1a]/95 backdrop-blur-xl border-b border-[#ede4ff] dark:border-[#2d1f40]"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navKeys.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-[#64748b] dark:text-[#94a3b8] hover:text-primary
                             rounded-lg hover:bg-[#f5f0ff] dark:hover:bg-[#1a1025] transition-colors font-medium"
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
