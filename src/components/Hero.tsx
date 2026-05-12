import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Particles background */}
      <div className="absolute inset-0">
        <Particles
          options={{
            fullScreen: false,
            fpsLimit: 60,
            particles: {
              number: { value: 60, density: { enable: true } },
              color: { value: ['#6366f1', '#06b6d4', '#8b5cf6'] },
              shape: { type: 'circle' },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
              links: {
                enable: true,
                distance: 150,
                color: '#6366f1',
                opacity: 0.1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.2,
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
                grab: { distance: 180, links: { opacity: 0.3 } },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          {/* Avatar placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl">
              CRM
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-lg mb-4"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="h-10 flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl text-accent font-light">
            {text}
          </span>
          <span
            className={`inline-block w-0.5 h-6 ml-1 bg-accent transition-opacity ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
