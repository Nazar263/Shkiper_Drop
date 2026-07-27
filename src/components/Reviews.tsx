import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import Lightbox from './Lightbox'
import { reviews } from '../data/products'

export default function Reviews() {
  const [currentStart, setCurrentStart] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const itemsPerView = 4

  const next = () => {
    setCurrentStart((prev) =>
      prev + itemsPerView >= reviews.length ? 0 : prev + itemsPerView
    )
  }

  const prev = () => {
    setCurrentStart((prev) =>
      prev - itemsPerView < 0 ? Math.max(0, reviews.length - itemsPerView) : prev - itemsPerView
    )
  }

  const visibleReviews = reviews.slice(currentStart, currentStart + itemsPerView)
  if (visibleReviews.length < itemsPerView && currentStart > 0) {
    visibleReviews.push(...reviews.slice(0, itemsPerView - visibleReviews.length))
  }

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex)
    setLightboxOpen(true)
  }

  return (
    <>
      <section id="reviews" className="scroll-mt-20 py-28 md:py-36 bg-bg-primary section-divider relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-10 pointer-events-none hidden md:block"></div>
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                <span className="text-accent glow-text">Відгуки</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto">
                Що кажуть наші клієнти
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                key={currentStart}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {visibleReviews.map((review, i) => {
                  const globalIndex = currentStart + i
                  return (
                    <div
                      key={`${currentStart}-${review.id}`}
                      className="wow-review glass-card rounded-2xl overflow-hidden aspect-square relative group cursor-pointer"
                      onClick={() => openLightbox(globalIndex)}
                    >
                      <img
                        src={review.image}
                        alt={`Відгук ${review.id}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Maximize2 size={24} className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="wow-btn w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.ceil(reviews.length / itemsPerView) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStart(i * itemsPerView)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      Math.floor(currentStart / itemsPerView) === i
                        ? 'bg-accent w-6'
                        : 'bg-white/20 w-1.5 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="wow-btn w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={reviews.map((r) => r.image)}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
