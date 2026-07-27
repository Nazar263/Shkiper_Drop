import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-blur' | 'rotate-in' | '3d-flip' | 'elastic-pop'
}

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 60, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -80, filter: 'blur(6px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 80, filter: 'blur(6px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  'scale-blur': {
    hidden: { opacity: 0, scale: 0.85, filter: 'blur(8px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  'rotate-in': {
    hidden: { opacity: 0, scale: 0.9, rotate: -3, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' },
  },
  '3d-flip': {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      rotateX: -15, 
      rotateY: 10,
      filter: 'blur(6px)',
      z: -100
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0,
      filter: 'blur(0px)',
      z: 0
    },
  },
  'elastic-pop': {
    hidden: { opacity: 0, scale: 0.5, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
    },
  },
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
}: ScrollRevealProps) {
  const v = variants[variant]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: {
            duration: variant === '3d-flip' ? 1.2 : variant === 'elastic-pop' ? 0.9 : 0.8,
            ease: variant === 'elastic-pop' ? [0.34, 1.56, 0.64, 1] : [0.25, 0.1, 0.25, 1],
            delay,
            type: variant === 'elastic-pop' ? 'spring' : 'tween',
            stiffness: variant === 'elastic-pop' ? 100 : undefined,
            damping: variant === 'elastic-pop' ? 12 : undefined,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
