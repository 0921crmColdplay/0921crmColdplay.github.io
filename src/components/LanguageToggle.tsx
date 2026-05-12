import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isZh = i18n.language.startsWith('zh')

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => i18n.changeLanguage(isZh ? 'en' : 'zh')}
      className="text-xs font-semibold tracking-wider px-2 py-1 rounded-lg
                 bg-[#f5f0ff] dark:bg-[#1a1025] border border-[#ede4ff] dark:border-[#2d1f40]
                 text-primary hover:bg-primary/10 transition-all duration-200"
      aria-label="Toggle language"
    >
      {isZh ? 'EN' : '中'}
    </motion.button>
  )
}
