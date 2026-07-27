import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Send } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const navItems = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Переваги', href: '#advantages' },
  { label: 'Відгуки', href: '#reviews' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'FAQ', href: '#faq' },
]

const TELEGRAM_URL = 'https://t.me/ShkiperDrop'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black tracking-tight">
              <span className="text-accent">Shkiper</span>
              <span className="text-text-primary">_Drop</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex wow-btn items-center gap-2 bg-accent text-bg-primary px-5 py-2.5 rounded-full font-semibold text-sm"
            >
              <Send size={16} />
              Написати
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-text-primary p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium transition-colors py-2.5 px-3 rounded-lg ${
                      isActive ? 'text-accent bg-accent/10' : 'text-text-secondary hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-accent text-bg-primary px-5 py-3 rounded-full font-semibold text-sm mt-2"
              >
                <Send size={16} />
                Написати в Telegram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
