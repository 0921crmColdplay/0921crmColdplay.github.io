import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Cpu, CircuitBoard, Microscope, Terminal } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function About() {
  const { t } = useTranslation()

  const highlights = [
    { icon: Cpu, label: 'FPGA', color: 'text-neon-blue' },
    { icon: CircuitBoard, label: 'PCB Design', color: 'text-neon-purple' },
    { icon: Microscope, label: 'Analog', color: 'text-neon-green' },
  ]

  return (
    <SectionWrapper id="about" className="bg-[#0a0a0f]">
      {/* Decorative corner */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-cyber-border opacity-30" />

      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-neon-blue/50 font-mono text-xs tracking-[0.3em]">&gt; SECTION_01</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-16 gradient-text"
        >
          {t('about.title')}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <div className="relative">
              {/* HUD rings */}
              <div className="absolute -inset-6 border border-neon-blue/10 rounded-2xl rotate-6" />
              <div className="absolute -inset-3 border border-neon-purple/10 rounded-2xl -rotate-3" />
              {/* Card */}
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl bg-cyber-card border border-cyber-border overflow-hidden">
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-blue/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-neon-purple/5 to-transparent" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Cpu size={48} className="text-neon-blue mb-4 opacity-80" />
                  <span className="font-heading font-bold text-2xl gradient-text">CRM</span>
                  <span className="text-neon-blue/30 font-mono text-[10px] tracking-[0.3em] mt-2">BEIHANG UNIV.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={14} className="text-neon-green" />
              <span className="font-mono text-xs text-neon-green/60">about.txt</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed font-mono">
              {t('about.content')}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-2 px-4 py-2 rounded border border-cyber-border
                             bg-cyber-surface/50 hover:border-neon-blue/30 transition-all duration-300"
                >
                  <h.icon size={16} className={h.color} />
                  <span className="text-xs font-mono text-gray-300">{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
