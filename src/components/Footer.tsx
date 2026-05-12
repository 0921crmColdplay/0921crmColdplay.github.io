import { useTranslation } from 'react-i18next'
import { Globe, Mail } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {year} Cao Ruimeng. {t('footer.copyright')}.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-primary transition-colors">
            <Globe size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-accent transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
