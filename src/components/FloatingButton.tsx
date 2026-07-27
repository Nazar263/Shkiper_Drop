import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const TELEGRAM_URL = 'https://t.me/ShkiperDrop'

export default function FloatingButton() {
  return (
    <motion.a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
      className="wow-float fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30 animate-pulse-glow md:hidden"
    >
      <Send size={22} className="text-bg-primary" />
    </motion.a>
  )
}
