import { motion } from 'framer-motion'
import { Truck, ShieldCheck, Star, MessageCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const advantages = [
  {
    num: '01',
    icon: Truck,
    title: 'Швидка відправка',
    description: 'Відправка в день замовлення. Ваш товар буде відправлений протягом кількох годин',
    accent: 'lime' as const,
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Оплата при отриманні',
    description: 'Оплачуйте товар тільки після перевірки. Жодних передоплат',
    accent: 'blue' as const,
  },
  {
    num: '03',
    icon: Star,
    title: 'Якість 1:1',
    description: 'Всі товари виконані з найкращих матеріалів з увагою до кожної деталі',
    accent: 'lime' as const,
  },
  {
    num: '04',
    icon: MessageCircle,
    title: 'Індивідуальний підхід',
    description: 'Допоможемо підібрати розмір та відповімо на всі питання в Telegram',
    accent: 'blue' as const,
  },
]

const cardVariants = ['3d-flip', 'elastic-pop', '3d-flip', 'elastic-pop'] as const

export default function Advantages() {
  return (
    <section id="advantages" className="scroll-mt-20 py-28 md:py-36 bg-bg-secondary section-divider relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-15 pointer-events-none hidden md:block"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[5%] w-12 h-12 border border-accent/10 rounded-full"
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[60%] right-[10%] w-16 h-16 border border-accent-blue/10 rotate-45"
          animate={{ x: [0, -40, 30, 0], y: [0, 40, -30, 0], rotate: [45, 225, 405, 45] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[50%] w-10 h-10 border border-accent/10"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ x: [0, 25, -35, 0], y: [0, 25, -40, 0], rotate: [0, 120, 240, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-8 relative z-10">
        <ScrollReveal variant="scale-blur">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              <span className="text-accent glow-text">Чому саме ми</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Ми робимо покупки простими та безпечними
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {advantages.map((adv, index) => (
            <ScrollReveal key={adv.title} delay={index * 0.15} variant={cardVariants[index]}>
              <div className="wow-advantage glass-card rounded-2xl p-6 md:p-8 text-center group h-full relative overflow-hidden">
                <div className={`absolute top-3 right-3 text-[80px] font-black leading-none select-none pointer-events-none ${
                  adv.accent === 'lime'
                    ? 'text-accent/[0.06]'
                    : 'text-accent-blue/[0.06]'
                }`}>
                  {adv.num}
                </div>

                <div className={`text-[10px] font-bold mb-3 tracking-widest ${
                  adv.accent === 'lime'
                    ? 'text-accent/50'
                    : 'text-accent-blue/50'
                }`}>
                  {adv.num}
                </div>

                <div className={`wow-icon w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 ${
                  adv.accent === 'lime'
                    ? 'bg-accent/10'
                    : 'bg-accent-blue/10'
                }`}>
                  <adv.icon size={28} className={
                    adv.accent === 'lime' ? 'text-accent' : 'text-accent-blue'
                  } />
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-3">{adv.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{adv.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}