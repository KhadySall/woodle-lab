'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const PHRASES = [
  'Building smarter tools...',
  'Designing useful products...',
  'Refining ambitious ideas...',
  'Crafting intelligent workflows...',
  'Turning concepts into reality...',
  'Shipping what actually matters...',
  'Experimenting boldly...',
  'Making complexity disappear...',
  'Questioning everything. Building better.',
  'Testing new approaches...',
  'Connecting ideas with execution...',
  'Making the complex feel simple...',
]

export function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % PHRASES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-7 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text-muted text-xs font-mono tracking-[0.2em] uppercase whitespace-nowrap"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
