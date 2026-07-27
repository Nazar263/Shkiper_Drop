import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const faqItems = [
  {
    question: 'Куди ви відправляєте?',
    answer: 'Ми відправляємо товари по всій Україні через Нову Пошту. Також можлива відправка кур\'єром.',
  },
  {
    question: 'Як оплатити замовлення?',
    answer: 'Оплата здійснюється при отриманні товару (наложений платіж). Ви оплачуєте тільки після того, як перевірите товар.',
  },
  {
    question: 'Скільки триває доставка?',
    answer: 'Середній термін доставки по Україні складає 1-3 робочих дні. Відправка здійснюється в день замовлення.',
  },
  {
    question: 'Чи можна підібрати розмір?',
    answer: 'Звичайно! Напишіть нам в Telegram, і ми допоможемо підібрати правильний розмір. Також надаємо таблиці розмірів.',
  },
  {
    question: 'Якість товарів?',
    answer: 'Всі товари виконані з увагою до деталей з найкращих матеріалів. Кросівки виконані 1:1 до оригіналу з повною комплектацією.',
  },
  {
    question: 'Чи є гарантія?',
    answer: 'Якщо товар не підійшов або має дефекти, ми забезпечуємо обмін або повернення коштів. Зверніться в Telegram для вирішення питання.',
  },
  {
    question: 'Як зробити замовлення?',
    answer: 'Напишіть нам в Telegram @ShkiperDrop, вкажіть товар та розмір. Ми підтвердимо наявність та оформимо замовлення.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="scroll-mt-20 py-28 md:py-36 bg-bg-primary section-divider relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-10 pointer-events-none hidden md:block"></div>
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              <span className="text-accent glow-text">Часті питання</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Відповіді на найпопулярніші запитання
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <ScrollReveal key={item.question} delay={index * 0.05}>
              <div className={`wow-faq border-b border-border ${openIndex === index ? 'border-l-2 border-l-accent pl-4' : ''}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-200 ${openIndex === index ? 'text-accent' : 'text-text-primary group-hover:text-accent'}`}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={20} className="text-text-secondary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm md:text-base text-text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
