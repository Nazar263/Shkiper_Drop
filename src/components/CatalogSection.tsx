import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import ProductCard from './ProductCard'
import ScrollReveal from './ScrollReveal'
import { products, categories } from '../data/products'

const TELEGRAM_URL = 'https://t.me/ShkiperDrop'

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  const filteredProducts = products.filter((p) => p.category === activeCategory)

  return (
    <section id="catalog" className="scroll-mt-20 py-28 md:py-36 bg-bg-primary section-divider relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-10 pointer-events-none hidden md:block"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[20%] w-14 h-14 border border-accent-blue/10 rounded-full"
          animate={{ x: [0, -35, 25, 0], y: [0, 35, -25, 0], rotate: [0, -180, -360, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[70%] left-[10%] w-12 h-12 border border-accent/10 rotate-45"
          animate={{ x: [0, 40, -30, 0], y: [0, -40, 30, 0], rotate: [45, 225, 405, 45] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              <span className="text-accent glow-text">Каталог</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Обери категорію та знайди свій ідеальний образ
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`wow-tab px-6 py-3 rounded-full font-semibold text-sm ${
                  activeCategory === cat.id
                    ? 'bg-accent text-bg-primary wow-tab-active'
                    : 'bg-white/5 text-text-secondary border border-border'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wow-btn-ghost inline-flex items-center gap-2 border border-accent/30 text-accent px-8 py-3 rounded-full font-semibold"
            >
              <Send size={16} />
              написати менеджеру
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
