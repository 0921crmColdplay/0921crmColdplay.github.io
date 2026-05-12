import { useTranslation } from 'react-i18next'
import { Globe, Mail } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cyber-border py-8 px-6 bg-[#06060b]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-gray-600">
          <span className="text-neon-blue/50">&copy; {year}</span> CAO RUIMENG <span className="text-neon-purple/50">{t('footer.copyright')}</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-neon-blue transition-colors duration-200">
            <Globe size={16} />
          </a>
          <a href="#" className="text-gray-600 hover:text-neon-purple transition-colors duration-200">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
