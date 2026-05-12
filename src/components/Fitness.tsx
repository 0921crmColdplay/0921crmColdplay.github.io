import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Dumbbell, TrendingUp, Timer, Target } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Fitness() {
  const { t } = useTranslation()
  const stats = t('fitness.stats', { returnObjects: true }) as Record<string, string>

  const cards = [
    { icon: Dumbbell, label: stats.bench, value: '100kg', color: 'text-red-400' },
    { icon: TrendingUp, label: stats.squat, value: '140kg', color: 'text-blue-400' },
    { icon: Target, label: stats.deadlift, value: '160kg', color: 'text-emerald-400' },
    { icon: Timer, label: stats.years, value: '4+', color: 'text-purple-400' },
  ]

  return (
    <SectionWrapper id="fitness">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 gradient-text text-center"
        >
          {t('fitness.title')}
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <card.icon size={28} className={`mx-auto mb-3 ${card.color}`} />
              <p className="text-3xl font-bold text-white mb-1">{card.value}</p>
              <p className="text-sm text-gray-400">{card.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <p className="text-gray-500 mb-4">Before / After</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-600 text-sm border border-dashed border-gray-700">
              健身前照片
            </div>
            <div className="aspect-[3/4] rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-600 text-sm border border-dashed border-gray-700">
              健身后照片
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4">替换为你的真实照片</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
