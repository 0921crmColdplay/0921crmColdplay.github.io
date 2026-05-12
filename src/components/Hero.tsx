import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown, Cpu } from 'lucide-react'
import Particles from '@tsparticles/react'

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Particles */}
      <div className="absolute inset-0">
        <Particles
          id="hero-particles"
          options={{
            fullScreen: false,
            fpsLimit: 60,
            particles: {
              number: { value: 80, density: { enable: true } },
              color: { value: ['#00d4ff', '#a855f7', '#39ff14'] },
              shape: { type: 'circle' },
              opacity: { value: { min: 0.1, max: 0.4 } },
              size: { value: { min: 1, max: 3 } },
              links: {
                enable: true,
                distance: 150,
                color: '#00d4ff',
                opacity: 0.08,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none' as const,
                random: true,
                straight: false,
                outModes: { default: 'bounce' as const },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' },
              },
              modes: {
                grab: { distance: 200, links: { opacity: 0.2 } },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/40 to-[#0a0a0f] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Avatar with HUD ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 relative inline-block"
        >
          <div className="absolute inset-0 rounded-full border border-neon-blue/30 pulse-glow" />
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 p-0.5 backdrop-blur">
            <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
              <Cpu size={36} className="text-neon-blue neon-text" />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-neon-blue/60 text-sm tracking-[0.3em] mb-6 font-mono"
        >
          &gt; {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl md:text-7xl font-heading font-black mb-8 gradient-text glitch-hover cursor-default"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="h-12 flex items-center justify-center gap-2"
        >
          <span className="text-neon-green/50 font-mono">&gt;_</span>
          <span className="text-xl md:text-2xl text-neon-green font-mono">
            {text}
          </span>
          <span
            className={`inline-block w-2.5 h-5 ml-0.5 bg-neon-green transition-opacity ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.div>

        {/* Tech specs bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-cyber-border"
        >
          {['BEIHANG UNIVERSITY', 'HARDWARE ENGINEER', 'FPGA · PCB · EMBEDDED'].map((spec) => (
            <span key={spec} className="px-3 py-1 border border-cyber-border rounded">
              {spec}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={18} className="text-neon-blue" />
        </motion.div>
      </motion.div>
    </section>
  )
}
