import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Dumbbell, TrendingUp, Timer, Target } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Fitness() {
  const { t } = useTranslation()
  const stats = t('fitness.stats', { returnObjects: true }) as Record<string, string>

  const cards = [
    { icon: Dumbbell, label: stats.bench, value: '100kg', color: 'text-red-400', glow: '#ff4d4d' },
    { icon: TrendingUp, label: stats.squat, value: '140kg', color: 'text-neon-blue', glow: '#00d4ff' },
    { icon: Target, label: stats.deadlift, value: '160kg', color: 'text-neon-green', glow: '#39ff14' },
    { icon: Timer, label: stats.years, value: '4+', color: 'text-neon-purple', glow: '#a855f7' },
  ]

  return (
    <SectionWrapper id="fitness" className="bg-[#06060b]">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-neon-pink/50 font-mono text-xs tracking-[0.3em]">&gt; SECTION_03</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold mb-16 gradient-text text-center"
        >
          {t('fitness.title')}
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="relative bg-cyber-card border border-cyber-border rounded-2xl p-6 text-center
                         hover:border-neon-blue/30 transition-all duration-300 group"
            >
              <card.icon size={26} className={`mx-auto mb-3 ${card.color} group-hover:scale-110 transition-transform`} />
              <p className="text-3xl font-heading font-bold text-white mb-1 group-hover:gradient-text transition-all">
                {card.value}
              </p>
              <p className="text-[10px] font-mono text-gray-500 tracking-wider">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-cyber-card border border-cyber-border rounded-2xl p-6 text-center"
        >
          <p className="font-mono text-xs text-gray-600 mb-4 tracking-widest">BEFORE_AFTER</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-xl bg-cyber-surface border border-dashed border-cyber-border flex items-center justify-center text-gray-600 font-mono text-xs">
              {'< BEFORE />'}
            </div>
            <div className="aspect-[3/4] rounded-xl bg-cyber-surface border border-dashed border-cyber-border flex items-center justify-center text-gray-600 font-mono text-xs">
              {'< AFTER />'}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
