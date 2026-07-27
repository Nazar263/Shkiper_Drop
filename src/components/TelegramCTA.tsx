import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const TELEGRAM_URL = 'https://t.me/ShkiperDrop'

export default function TelegramCTA() {
  return (
    <section className="py-28 md:py-36 bg-bg-secondary section-divider relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-blue/5 pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 md:p-16 text-center border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="w-20 h-20 rounded-2xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-8">
                <Send size={36} className="text-accent-blue" />
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-text-primary">Готові до </span>
                <span className="text-accent glow-text">покупки?</span>
              </h2>

              <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Напишіть нам в Telegram для оформлення замовлення, консультації або підбору розміру.
                Ми завжди на зв&apos;язку та готові допомогти!
              </p>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="wow-btn inline-flex items-center gap-3 bg-accent text-bg-primary px-10 py-5 rounded-full font-bold text-lg animate-pulse-glow"
              >
                <Send size={20} />
                @ShkiperDrop
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
