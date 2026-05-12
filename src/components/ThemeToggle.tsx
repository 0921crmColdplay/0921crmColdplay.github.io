import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setDark(!dark)}
      className="relative w-9 h-9 rounded-full flex items-center justify-center
                 bg-[#f5f0ff] dark:bg-[#1a1025] border border-[#ede4ff] dark:border-[#2d1f40]
                 hover:border-primary/30 transition-all duration-300"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: dark ? 180 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {dark
          ? <Sun size={15} className="text-amber-400" />
          : <Moon size={15} className="text-[#7C3AED]" />
        }
      </motion.div>
    </motion.button>
  )
}
