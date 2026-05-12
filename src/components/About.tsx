import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Cpu, CircuitBoard, Microscope } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function About() {
  const { t } = useTranslation()

  const highlights = [
    { icon: Cpu, label: 'FPGA', color: 'text-primary' },
    { icon: CircuitBoard, label: 'PCB Design', color: 'text-accent' },
    { icon: Microscope, label: 'Analog', color: 'text-purple-400' },
  ]

  return (
    <SectionWrapper id="about">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
        >
          {t('about.title')}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-primary to-accent p-0.5 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl md:text-7xl font-bold gradient-text">CRM</span>
                  <p className="text-gray-500 text-sm mt-2 tracking-widest">BEIHANG</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.content')}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                >
                  <h.icon size={18} className={h.color} />
                  <span className="text-sm text-gray-300">{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
