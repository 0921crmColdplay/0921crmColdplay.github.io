import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return !document.documentElement.classList.contains('light')
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setDark(!dark)}
      className="p-2 rounded-lg bg-cyber-surface border border-cyber-border
                 hover:border-neon-blue/30 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={15} className="text-[#ffd700]" /> : <Moon size={15} className="text-[#6366f1]" />}
    </motion.button>
  )
}
