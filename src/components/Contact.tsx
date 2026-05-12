import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Globe, MessageCircle, MapPin } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  const { t } = useTranslation()

  const links = [
    { icon: Mail, label: t('contact.email'), value: 'your@email.com' },
    { icon: Globe, label: t('contact.github'), value: 'github.com/0921crmColdplay' },
    { icon: MessageCircle, label: t('contact.wechat'), value: '微信ID' },
    { icon: MapPin, label: t('contact.location'), value: t('contact.location') },
  ]

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-[#12081e]">
      <div className="max-w-2xl w-full text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-primary/60 uppercase mb-4 block"
        >
          {t('contact.title')}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-6 gradient-text"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#94a3b8] mb-12"
        >
          期待与你的交流 / Looking forward to connecting
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="card p-4 flex items-center gap-4 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <link.icon size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-[#94a3b8] tracking-wider uppercase">{link.label}</p>
                <p className="text-sm font-medium text-[#475569] dark:text-[#cbd5e1] truncate">{link.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
