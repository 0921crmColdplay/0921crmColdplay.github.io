import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const roles_zh = ['硬件工程师', 'PCB 设计师', '嵌入式开发者', '健身爱好者']
const roles_en = ['Hardware Engineer', 'PCB Designer', 'Embedded Developer', 'Fitness Enthusiast']

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((c) => !c), 530)
    return () => clearInterval(cursor)
  }, [])

  useEffect(() => {
    const word = words[wordIndex]
    if (!word) return
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < word.length) {
          setText(word.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        if (charIndex > 0) {
          setText(word.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return { text, showCursor }
}

export default function Hero() {
  const { t, i18n } = useTranslation()
  const words = i18n.language.startsWith('zh') ? roles_zh : roles_en
  const { text, showCursor } = useTypewriter(words)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAF5FF] dark:bg-[#0f0a1a]">
      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-purple-300 dark:bg-purple-700 -top-20 -right-20" />
      <div className="blob w-64 h-64 bg-cyan-300 dark:bg-cyan-700 bottom-20 -left-20" />
      <div className="blob w-48 h-48 bg-purple-400 dark:bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 dark:opacity-20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10"
        >
          <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-primary via-primary-light to-primary-lighter p-0.5 shadow-lg shadow-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full rounded-3xl bg-white dark:bg-[#1a1025] flex items-center justify-center">
              <Sparkles size={36} className="text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-primary/70 font-medium">{t('hero.greeting')}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6 gradient-text leading-tight"
        >
          {t('hero.name')}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-10 flex items-center justify-center mb-10"
        >
          <span className="text-xl md:text-2xl text-[#64748b] dark:text-[#94a3b8] font-medium">
            {text}
          </span>
          <span className={`inline-block w-0.5 h-6 ml-1 bg-primary transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary pulse-soft">
            {t('nav.projects')}
            <ChevronDown size={16} className="rotate-[-90deg]" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl font-semibold text-sm text-[#64748b] dark:text-[#94a3b8]
                       border border-[#ede4ff] dark:border-[#2d1f40] hover:border-primary/30 hover:text-primary
                       dark:hover:text-[#a78bfa] transition-all duration-200 bg-white/50 dark:bg-[#1a1025]/50"
          >
            {t('nav.contact')}
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={18} className="text-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
