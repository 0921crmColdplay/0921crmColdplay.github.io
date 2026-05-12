import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Cpu, CircuitBoard, Microscope } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function About() {
  const { t } = useTranslation()

  const highlights = [
    { icon: Cpu, label: 'FPGA', color: 'text-primary' },
    { icon: CircuitBoard, label: 'PCB Design', color: 'text-primary-light' },
    { icon: Microscope, label: 'Analog', color: 'text-primary-lighter' },
  ]

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-[#12081e]">
      <div className="max-w-5xl w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase mb-4 block"
        >
          {t('about.title')}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-12 gradient-text"
        >
          {t('about.title')}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-primary via-primary-light to-primary-lighter p-[3px] shadow-lg shadow-primary/20">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-[#1a1025] flex flex-col items-center justify-center">
                <span className="text-5xl md:text-6xl font-heading font-extrabold gradient-text">CRM</span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#94a3b8] mt-2">BEIHANG</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex-1"
          >
            <p className="text-[#475569] dark:text-[#cbd5e1] text-base leading-relaxed">
              {t('about.content')}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {highlights.map((h) => (
                <span key={h.label} className="tag">
                  <h.icon size={14} className={h.color} />
                  <span className="ml-1.5">{h.label}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
