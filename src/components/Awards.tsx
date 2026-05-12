import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Trophy, Award, Star } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const icons = [Trophy, Award, Star]

export default function Awards() {
  const { t } = useTranslation()
  const items = t('awards.items', { returnObjects: true }) as {
    year: string; title: string; desc: string
  }[]

  return (
    <SectionWrapper id="awards" className="bg-[#0a0a0f]">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-neon-green/50 font-mono text-xs tracking-[0.3em]">&gt; SECTION_04</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold mb-16 gradient-text text-center"
        >
          {t('awards.title')}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green md:-translate-x-px" />

          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-cyber-card border-2 border-neon-blue flex items-center justify-center z-10">
                  <Icon size={13} className="text-neon-blue" />
                </div>

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-cyber-card border border-cyber-border rounded-xl p-5 hover:border-neon-blue/30 transition-all duration-300">
                    <span className="font-mono text-[10px] text-neon-blue tracking-[0.2em]">
                      [{item.year}]
                    </span>
                    <h3 className="font-heading font-semibold text-white mt-2 mb-1 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono">{item.desc}</p>
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
