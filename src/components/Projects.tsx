import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as {
    title: string; desc: string; tags: string[]
  }[]

  return (
    <SectionWrapper id="projects" className="bg-[#FAF5FF] dark:bg-[#0f0a1a]">
      <div className="max-w-6xl w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase mb-4 block text-center"
        >
          {t('projects.title')}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-16 gradient-text text-center"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="card p-6 flex flex-col group"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <ArrowUpRight size={18} className="text-primary" />
              </div>

              <h3 className="text-lg font-heading font-bold text-[#1e1b4b] dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#64748b] dark:text-[#94a3b8] leading-relaxed mb-6 flex-1">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag text-[11px] px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
