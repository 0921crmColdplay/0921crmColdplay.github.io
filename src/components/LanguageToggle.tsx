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
      className="px-3 py-1.5 rounded-lg font-mono text-xs tracking-wider
                 bg-cyber-surface border border-cyber-border text-gray-400
                 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-200"
      aria-label="Toggle language"
    >
      {isZh ? 'EN' : '中'}
    </motion.button>
  )
}
