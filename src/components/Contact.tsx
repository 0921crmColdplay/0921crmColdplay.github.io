import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Globe, MessageCircle, MapPin } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  const { t } = useTranslation()

  const links = [
    { icon: Mail, label: t('contact.email'), href: '#', value: 'your@email.com' },
    { icon: Globe, label: t('contact.github'), href: '#', value: 'github.com/yourname' },
    { icon: MessageCircle, label: t('contact.wechat'), href: '#', value: '微信ID' },
    { icon: MapPin, label: t('contact.location'), href: null, value: t('contact.location') },
  ]

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-8 gradient-text"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 mb-12"
        >
          期待与你的交流 / Looking forward to connecting with you
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
                >
                  <link.icon size={22} className="text-primary group-hover:text-accent transition-colors" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500">{link.label}</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="glass rounded-xl p-5 flex items-center gap-4">
                  <link.icon size={22} className="text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500">{link.label}</p>
                    <p className="text-sm text-gray-300">{link.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
