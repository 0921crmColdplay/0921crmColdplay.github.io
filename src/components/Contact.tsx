import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Globe, MessageCircle, MapPin } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  const { t } = useTranslation()

  const links = [
    { icon: Mail, label: t('contact.email'), href: '#', value: 'your@email.com' },
    { icon: Globe, label: t('contact.github'), href: '#', value: 'github.com/0921crmColdplay' },
    { icon: MessageCircle, label: t('contact.wechat'), href: '#', value: '微信ID' },
    { icon: MapPin, label: t('contact.location'), href: null, value: t('contact.location') },
  ]

  return (
    <SectionWrapper id="contact" className="bg-[#0a0a0f]">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-neon-cyan/50 font-mono text-xs tracking-[0.3em]">&gt; SECTION_05</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6 gradient-text"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 font-mono text-sm mb-12"
        >
          &gt; ping me<span className="text-neon-blue animate-pulse">_</span>
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  className="bg-cyber-card border border-cyber-border rounded-xl p-5 flex items-center gap-4
                             hover:border-neon-blue/40 transition-all duration-300 group"
                >
                  <link.icon size={20} className="text-neon-blue group-hover:text-neon-cyan transition-colors" />
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-gray-600 tracking-wider">{link.label}</p>
                    <p className="text-sm font-mono text-gray-300 group-hover:text-neon-blue transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="bg-cyber-card border border-cyber-border rounded-xl p-5 flex items-center gap-4">
                  <link.icon size={20} className="text-neon-blue" />
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-gray-600 tracking-wider">{link.label}</p>
                    <p className="text-sm font-mono text-gray-300">{link.value}</p>
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
