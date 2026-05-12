import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Trophy, Medal, Star } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const icons = [Trophy, Medal, Star]
const colors = ['#7C3AED', '#8B5CF6', '#6366f1']

export default function Awards() {
  const { t } = useTranslation()
  const items = t('awards.items', { returnObjects: true }) as {
    year: string; title: string; desc: string
  }[]

  return (
    <SectionWrapper id="awards" className="bg-[#FAF5FF] dark:bg-[#0f0a1a]">
      <div className="max-w-3xl w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase mb-4 block text-center"
        >
          {t('awards.title')}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-16 gradient-text text-center"
        >
          {t('awards.title')}
        </motion.h2>

        <div className="relative space-y-4">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#ede4ff] dark:bg-[#2d1f40]" />

          {items.map((item, i) => {
            const Icon = icons[i]
            const color = colors[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 w-5 h-5 -translate-x-1/2 rounded-full border-2 border-white dark:border-[#0f0a1a] flex items-center justify-center"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={11} style={{ color }} />
                </div>

                <div className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full w-fit"
                    style={{ backgroundColor: `${color}10`, color }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-[#1e1b4b] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
