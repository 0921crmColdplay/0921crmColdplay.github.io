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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative py-24 px-6 flex flex-col items-center ${className}`}
    >
      {children}
    </motion.section>
  )
}
