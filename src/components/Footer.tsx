import { Send } from 'lucide-react'

const TELEGRAM_URL = 'https://t.me/ShkiperDrop'

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-10 pointer-events-none"></div>
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <span className="text-xl font-black tracking-tight">
              <span className="text-accent">Shkiper</span>
              <span className="text-text-primary">_Drop</span>
            </span>
            <p className="text-sm text-text-secondary mt-4 leading-relaxed max-w-xs">
              Преміум streetwear товари від провідних брендів. Швидка доставка по всій Україні.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
              Навігація
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Каталог', href: '#catalog' },
                { label: 'Переваги', href: '#advantages' },
                { label: 'Відгуки', href: '#reviews' },
                { label: 'Доставка', href: '#delivery' },
                { label: 'FAQ', href: '#faq' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
              Контакти
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-all duration-300 hover:translate-x-1 group"
              >
                <Send size={14} className="group-hover:rotate-[-12deg] transition-transform duration-300" />
                @ShkiperDrop
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-xs text-text-secondary/60">
            © {new Date().getFullYear()} Shkiper_Drop. Всі права захищені.
          </p>
          <p className="text-xs text-text-secondary/40 mt-2">
            розробник: Freelance UA || <a href="https://freelance-ua.agency" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors duration-300">Digital Agency</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
