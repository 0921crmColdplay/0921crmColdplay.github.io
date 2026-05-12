import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Trophy, Medal } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Awards() {
  const { t } = useTranslation()
  const items = t('awards.items', { returnObjects: true }) as {
    year: string; title: string; desc: string
  }[]

  return (
    <SectionWrapper id="awards" className="bg-gray-950/50">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 gradient-text text-center"
        >
          {t('awards.title')}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple-500 md:-translate-x-px" />

          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-gray-900 border-2 border-primary flex items-center justify-center z-10">
                {i === 0 ? <Trophy size={14} className="text-yellow-400" /> : <Medal size={14} className="text-primary" />}
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <div className="glass rounded-xl p-6 hover:border-white/10 transition-colors">
                  <span className="text-xs font-bold text-primary tracking-widest">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
