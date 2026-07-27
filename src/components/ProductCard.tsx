import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Images, ChevronLeft, ChevronRight } from 'lucide-react'
import Lightbox from './Lightbox'
import type { Product } from '../data/products'

const TELEGRAM_URL = 'https://t.me/ShkiperDrop'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="wow-card glass-card rounded-2xl cursor-pointer"
      >
        <div
          className="relative aspect-square overflow-hidden bg-bg-secondary"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={product.images[currentImage]}
            alt={product.name}
            className="wow-img w-full h-full object-cover"
            loading="lazy"
          />

          {product.badge && (
            <div className="absolute top-3 left-3 bg-accent text-bg-primary px-3 py-1 rounded-full text-xs font-bold wow-badge z-10">
              {product.badge}
            </div>
          )}

          {product.images.length > 1 && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 z-10">
              <Images size={12} className="text-white/80" />
              <span className="text-white/80 text-xs font-medium">{product.images.length}</span>
            </div>
          )}

          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all duration-200 z-10"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all duration-200 z-10"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentImage
                      ? 'bg-accent w-5 h-1.5'
                      : 'bg-white/40 w-1.5 h-1.5 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-5 relative z-2">
          <p className="text-xs font-medium text-accent-blue uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-text-secondary mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {product.sizes && (
              <div className="flex gap-1.5">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-border text-xs font-medium text-text-secondary hover:border-accent/30 hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    {size}
                  </span>
                ))}
              </div>
            )}
            {product.colors && (
              <div className="flex gap-1.5">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-border text-xs font-medium text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors duration-200 cursor-default"
                  >
                    {color}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-accent">
              {product.price.toLocaleString('uk-UA')} ₴
            </span>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wow-btn flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent hover:text-bg-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <Send size={14} />
              Замовити
            </a>
          </div>
        </div>
      </motion.div>

      <Lightbox
        images={product.images}
        initialIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
