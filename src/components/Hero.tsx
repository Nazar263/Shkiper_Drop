import { motion } from 'framer-motion'
import { Send, ChevronDown, Zap, Truck, Shield } from 'lucide-react'

const TELEGRAM_URL = 'https://t.me/ShkiperDrop'

function HeroBackground() {
  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />

      {/* Complex animated gradient orbs */}
      <div className="absolute inset-0 animated-gradient-bg opacity-25" />

      {/* Hero grid pattern */}
      <div className="hero-grid absolute inset-0 opacity-[0.06]" />

      {/* Large floating gradient orbs with different animations */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] pointer-events-none animate-[float1_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-accent-blue/5 rounded-full blur-[200px] pointer-events-none animate-[float2_14s_ease-in-out_infinite]" />
      <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-accent/4 rounded-full blur-[150px] pointer-events-none animate-[float3_10s_ease-in-out_infinite]" />
      <div className="absolute top-[70%] left-[20%] w-[350px] h-[350px] bg-accent-blue/3 rounded-full blur-[130px] pointer-events-none animate-[float1_16s_ease-in-out_infinite_reverse]" />

      {/* Additional accent orbs */}
      <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-accent/3 rounded-full blur-[100px] pointer-events-none animate-[float2_18s_ease-in-out_infinite]" />
      <div className="absolute bottom-[30%] left-[40%] w-[300px] h-[300px] bg-accent-blue/2 rounded-full blur-[120px] pointer-events-none animate-[float3_15s_ease-in-out_infinite_reverse]" />

      {/* Desktop-only extra floating orbs with new animations */}
      <div className="desktop-floating absolute top-[5%] right-[25%] w-[180px] h-[180px] bg-accent/4 rounded-full blur-[100px] pointer-events-none animate-[float4_16s_ease-in-out_infinite]" />
      <div className="desktop-floating absolute bottom-[10%] left-[15%] w-[220px] h-[220px] bg-accent-blue/3 rounded-full blur-[120px] pointer-events-none animate-[float5_18s_ease-in-out_infinite]" />
      <div className="desktop-floating absolute top-[55%] right-[40%] w-[150px] h-[150px] bg-accent/3 rounded-full blur-[90px] pointer-events-none animate-[float6_20s_ease-in-out_infinite]" />

      {/* Twinkling stars */}
      {/* Twinkling stars */}
      <div className="desktop-floating absolute top-[15%] right-[20%] w-2 h-2 bg-accent/20 rounded-full animate-[twinkle_3s_ease-in-out_infinite]" />
      <div className="desktop-floating absolute top-[35%] left-[20%] w-1.5 h-1.5 bg-accent-blue/25 rounded-full animate-[twinkle_4s_ease-in-out_infinite_0.5s]" />
      <div className="desktop-floating absolute top-[60%] right-[35%] w-1 h-1 bg-accent/18 rounded-full animate-[twinkle_3.5s_ease-in-out_infinite_1s]" />
      <div className="desktop-floating absolute top-[25%] left-[55%] w-2.5 h-2.5 bg-accent-blue/15 rounded-full animate-[twinkle_5s_ease-in-out_infinite_0.3s]" />
      <div className="desktop-floating absolute top-[75%] left-[35%] w-1.5 h-1.5 bg-accent/15 rounded-full animate-[twinkle_4.5s_ease-in-out_infinite_1.5s]" />
      <div className="desktop-floating absolute top-[45%] right-[15%] w-2 h-2 bg-accent-blue/18 rounded-full animate-[twinkle_3.8s_ease-in-out_infinite_0.8s]" />
      <div className="desktop-floating absolute top-[85%] right-[50%] w-1 h-1 bg-accent/12 rounded-full animate-[twinkle_4.2s_ease-in-out_infinite_2s]" />
      <div className="desktop-floating absolute top-[10%] left-[80%] w-1.5 h-1.5 bg-accent-blue/14 rounded-full animate-[twinkle_5.5s_ease-in-out_infinite_1.2s]" />

      {/* Desktop-only animated geometric shapes with new animations */}
      <div className="desktop-floating">
        <motion.div 
          className="absolute top-[20%] left-[10%] w-16 h-16 border border-accent/15 rounded-full"
          animate={{ 
            x: [0, 40, -30, 0], 
            y: [0, -40, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-[60%] right-[15%] w-20 h-20 border border-accent-blue/15 rotate-45"
          animate={{ 
            x: [0, -50, 40, 0], 
            y: [0, 50, -40, 0],
            rotate: [45, 225, 405, 45],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-[40%] left-[60%] w-12 h-12 border border-accent/15"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ 
            x: [0, 30, -40, 0], 
            y: [0, 30, -50, 0],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.3, 0.7, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[30%] w-14 h-14 border border-accent-blue/15 rounded-full"
          animate={{ 
            x: [0, -35, 25, 0], 
            y: [0, 35, -25, 0],
            rotate: [0, -180, -360, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-[80%] right-[40%] w-10 h-10 border border-accent/15 rotate-45"
          animate={{ 
            x: [0, 45, -35, 0], 
            y: [0, -45, 35, 0],
            rotate: [45, 225, 405, 45],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* New extra floating gradient elements with gradient connection */}
        <motion.div 
          className="absolute top-[5%] right-[35%] w-24 h-24 bg-accent/5"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          animate={{ 
            x: [0, 35, -25, 0], 
            y: [0, -25, 35, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.15, 0.85, 1]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-[35%] right-[10%] w-16 h-16 bg-accent-blue/5"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          animate={{ 
            x: [0, -30, 40, 0], 
            y: [0, 40, -30, 0],
            rotate: [0, -120, -240, -360, 0],
            scale: [1, 0.9, 1.2, 1]
          }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </>
  )
}

function HeroStats() {
  const stats = [
    { icon: Zap, value: '500+', label: 'Замовлень' },
    { icon: Truck, value: '24h', label: 'Відправка' },
    { icon: Shield, value: '100%', label: 'Якість' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="flex justify-center gap-8 md:gap-16 mt-14"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            delay: 1.2 + i * 0.2, 
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 12
          }}
          whileHover={{ scale: 1.15, y: -8 }}
          whileTap={{ scale: 0.95 }}
          className="text-center cursor-default group relative"
        >
          {/* Glow effect behind stat */}
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  delay: 1.5 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <stat.icon size={20} className="text-accent-blue group-hover:text-accent transition-colors duration-300" />
              </motion.div>
              <motion.span 
                className="text-3xl md:text-4xl font-black text-accent transition-all duration-300 group-hover:glow-text"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(198, 255, 61, 0.3)',
                    '0 0 40px rgba(198, 255, 61, 0.6)',
                    '0 0 20px rgba(198, 255, 61, 0.3)'
                  ]
                }}
                transition={{
                  duration: 2,
                  delay: 1.5 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                {stat.value}
              </motion.span>
            </div>
            <motion.span 
              className="text-xs md:text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300 font-medium"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2,
                delay: 1.5 + i * 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              {stat.label}
            </motion.span>
          </div>

          {/* Decorative line */}
          <motion.div 
            className="w-8 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-sm font-semibold backdrop-blur-sm">
            <Zap size={14} />
            Streetwear drops в Україну
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.92] mb-6"
        >
          <span className="text-text-primary">Шукай </span>
          <span className="text-accent glow-text">стиль</span>
          <br />
          <span className="text-text-primary">разом з </span>
          <span className="text-accent-blue" style={{ textShadow: '0 0 20px rgba(46,107,255,0.3), 0 0 40px rgba(46,107,255,0.1)' }}>нами</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Оригінальні товари від провідних брендів. Швидка відправка в день замовлення.
          Оплата при отриманні.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group wow-btn flex items-center gap-3 bg-accent text-bg-primary px-8 py-4 rounded-full font-bold text-lg animate-pulse-glow"
          >
            <Send size={20} className="group-hover:rotate-[-12deg] transition-transform duration-300" />
            Замовити зараз
          </a>
          <a
            href="#catalog"
            className="wow-btn-ghost flex items-center gap-2 border border-border text-text-secondary px-8 py-4 rounded-full font-medium text-lg"
          >
            Переглянути каталог
          </a>
        </motion.div>

        <HeroStats />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} className="text-text-secondary/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
