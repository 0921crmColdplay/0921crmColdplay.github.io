import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isZh = i18n.language.startsWith('zh')

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => i18n.changeLanguage(isZh ? 'en' : 'zh')}
      className="relative px-3 py-1.5 rounded-full text-sm font-medium
                 bg-white/5 hover:bg-white/10 border border-white/10
                 transition-colors overflow-hidden"
      aria-label="Toggle language"
    >
      <span className="relative z-10">{isZh ? 'EN' : '中'}</span>
    </motion.button>
  )
}
