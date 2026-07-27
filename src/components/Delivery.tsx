import { CreditCard, Clock, MapPin, Package } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const deliveryInfo = [
  {
    num: '01',
    icon: Clock,
    title: 'Миттєва відправка',
    description: 'Оформив — отримав вже завтра. Відправляємо замовлення того ж дня',
    accent: 'lime' as const,
  },
  {
    num: '02',
    icon: Package,
    title: 'Нова Пошта та Укрпошта',
    description: 'Доставка по всій Україні за 1–3 дні. Обирайте зручний спосіб',
    accent: 'blue' as const,
  },
  {
    num: '03',
    icon: CreditCard,
    title: 'Без передоплат',
    description: 'Оплачуйте товар після огляду. Жодних ризиків — лише якість',
    accent: 'lime' as const,
  },
  {
    num: '04',
    icon: MapPin,
    title: 'Зручна видача',
    description: 'Отримуйте у відділенні або замовляйте кур\'єром додому',
    accent: 'blue' as const,
  },
]

const cardVariants = ['fade-left', 'fade-right', 'fade-right', 'fade-left'] as const

export default function Delivery() {
  return (
    <section id="delivery" className="scroll-mt-20 py-28 md:py-36 bg-bg-secondary section-divider relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-10 pointer-events-none hidden md:block"></div>
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 relative z-10">
        <ScrollReveal variant="scale-blur">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              <span className="text-accent glow-text">Доставка та оплата</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Швидко, зручно та без жодних передоплат
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {deliveryInfo.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.15} variant={cardVariants[index]}>
              <div className="wow-delivery glass-card rounded-2xl p-6 md:p-8 flex gap-5 h-full relative overflow-hidden group">
                <div className={`absolute top-3 right-3 text-[72px] font-black leading-none select-none pointer-events-none ${
                  item.accent === 'lime'
                    ? 'text-accent/[0.06]'
                    : 'text-accent-blue/[0.06]'
                }`}>
                  {item.num}
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg] ${
                  item.accent === 'lime'
                    ? 'bg-accent/10'
                    : 'bg-accent-blue/10'
                }`}>
                  <item.icon size={24} className={
                    item.accent === 'lime' ? 'text-accent' : 'text-accent-blue'
                  } />
                </div>
                <div>
                  <div className={`text-[10px] font-bold mb-1 tracking-widest ${
                    item.accent === 'lime'
                      ? 'text-accent/50'
                      : 'text-accent-blue/50'
                  }`}>
                    {item.num}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
