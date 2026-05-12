import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function SectionWrapper({ children, id, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
