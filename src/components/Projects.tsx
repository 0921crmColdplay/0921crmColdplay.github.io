import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Cpu, Zap, Eye } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const icons = [Cpu, Zap, Eye]

const tagColors: Record<string, string> = {
  FPGA: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5',
  Verilog: 'text-neon-blue border-neon-blue/30 bg-neon-blue/5',
  'PCB设计': 'text-neon-purple border-neon-purple/30 bg-neon-purple/5',
  'PCB Design': 'text-neon-purple border-neon-purple/30 bg-neon-purple/5',
  '电源设计': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  'Power Design': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  嵌入式: 'text-neon-green border-neon-green/30 bg-neon-green/5',
  Embedded: 'text-neon-green border-neon-green/30 bg-neon-green/5',
  ARM: 'text-orange-400 border-orange-400/30 bg-orange-400/5',
  机器视觉: 'text-pink-400 border-pink-400/30 bg-pink-400/5',
  'Machine Vision': 'text-pink-400 border-pink-400/30 bg-pink-400/5',
}

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as {
    title: string; desc: string; tags: string[]
  }[]

  return (
    <SectionWrapper id="projects" className="bg-[#06060b]">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-neon-purple/50 font-mono text-xs tracking-[0.3em]">&gt; SECTION_02</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-16 gradient-text text-center"
        >
          {t('projects.title')}
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`
                  group relative rounded-2xl bg-cyber-card border border-cyber-border
                  hover:border-neon-blue/40 transition-all duration-300
                  flex flex-col p-6 cursor-default
                  ${i === 0 ? 'md:col-span-2 md:row-span-1' : ''}
                  ${i === 1 ? 'md:row-span-1' : ''}
                  ${i === 2 ? 'md:col-span-3 md:row-span-1 md:h-[200px]' : ''}
                `}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent line */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-neon-blue/20 rounded-tl-2xl group-hover:border-neon-blue/50 transition-colors duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center group-hover:border-neon-blue/30 transition-colors duration-300">
                      <Icon size={18} className="text-neon-blue" />
                    </div>
                    <h3 className="font-heading font-semibold text-white group-hover:text-neon-blue transition-colors duration-300 text-sm">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-xs font-mono leading-relaxed mb-auto">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono px-2.5 py-1 rounded border ${tagColors[tag] || 'text-gray-400 border-cyber-border bg-cyber-surface/50'}`}
                      >
                        {tag}
                      </span>
                    ))}
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
