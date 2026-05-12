import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const tagColors: Record<string, string> = {
  FPGA: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Verilog: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'PCB设计': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'PCB Design': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  '电源设计': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Power Design': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  嵌入式: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Embedded: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  ARM: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  机器视觉: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'Machine Vision': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
}

const gradientBorders = [
  'from-purple-500 to-blue-500',
  'from-emerald-500 to-cyan-500',
  'from-amber-500 to-rose-500',
]

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as {
    title: string; desc: string; tags: string[]
  }[]

  return (
    <SectionWrapper id="projects" className="bg-gray-950/50">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 gradient-text text-center"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientBorders[i]} opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10`}
              />

              <div className="glass rounded-2xl p-6 h-full flex flex-col hover:border-white/10 transition-colors duration-300">
                {/* Project icon / placeholder image */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ExternalLink size={20} className="text-primary group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        tagColors[tag] || 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
