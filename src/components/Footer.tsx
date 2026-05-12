import { useTranslation } from 'react-i18next'
import { Globe, Mail } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#ede4ff] dark:border-[#2d1f40] py-8 px-6 bg-[#FAF5FF] dark:bg-[#0f0a1a]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#94a3b8]">
          &copy; {year} Cao Ruimeng &mdash; {t('footer.copyright')}
        </p>
        <div className="flex items-center gap-3">
          <a href="#" className="w-9 h-9 rounded-full bg-[#f5f0ff] dark:bg-[#1a1025] border border-[#ede4ff] dark:border-[#2d1f40] flex items-center justify-center text-[#94a3b8] hover:text-primary hover:border-primary/20 transition-all duration-200">
            <Globe size={15} />
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-[#f5f0ff] dark:bg-[#1a1025] border border-[#ede4ff] dark:border-[#2d1f40] flex items-center justify-center text-[#94a3b8] hover:text-primary hover:border-primary/20 transition-all duration-200">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
