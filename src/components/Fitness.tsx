import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Dumbbell, TrendingUp, Timer, Target } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Fitness() {
  const { t } = useTranslation()
  const stats = t('fitness.stats', { returnObjects: true }) as Record<string, string>

  const cards = [
    { icon: Dumbbell, label: stats.bench, value: '100kg', color: '#7C3AED' },
    { icon: TrendingUp, label: stats.squat, value: '140kg', color: '#8B5CF6' },
    { icon: Target, label: stats.deadlift, value: '160kg', color: '#6366f1' },
    { icon: Timer, label: stats.years, value: '4+', color: '#a855f7' },
  ]

  return (
    <SectionWrapper id="fitness" className="bg-white dark:bg-[#12081e]">
      <div className="max-w-5xl w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase mb-4 block text-center"
        >
          {t('fitness.title')}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-16 gradient-text text-center"
        >
          {t('fitness.title')}
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="card p-6 text-center group"
            >
              <div
                className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${card.color}10` }}
              >
                <card.icon size={22} style={{ color: card.color }} />
              </div>
              <p className="text-3xl font-heading font-bold text-[#1e1b4b] dark:text-white mb-1 group-hover:gradient-text transition-all">
                {card.value}
              </p>
              <p className="text-xs text-[#94a3b8] font-medium">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="card p-6 text-center max-w-lg mx-auto"
        >
          <p className="text-xs font-medium text-[#94a3b8] mb-4 tracking-widest uppercase">Before & After</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-xl bg-[#f5f0ff] dark:bg-[#1a1025] border border-dashed border-[#e2d8f5] dark:border-[#2d1f40] flex items-center justify-center text-[#94a3b8] text-xs font-medium">
              健身前
            </div>
            <div className="aspect-[3/4] rounded-xl bg-[#f5f0ff] dark:bg-[#1a1025] border border-dashed border-[#e2d8f5] dark:border-[#2d1f40] flex items-center justify-center text-[#94a3b8] text-xs font-medium">
              健身后
            </div>
          </div>
          <p className="text-[11px] text-[#94a3b8] mt-4">替换为真实照片</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
