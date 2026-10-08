import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.max(0, Math.min(100, x)))
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">Transformations</span>
          <h2 className="font-display font-bold text-warm-white text-4xl lg:text-6xl mt-4">
            SEE THE DIFFERENCE.
          </h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="mt-16 relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden select-none"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          data-cursor="DRAG"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80')` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80')`,
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            }}
          />

          <div
            className="absolute top-0 bottom-0 w-1 bg-amber-500 cursor-ew-resize"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
              <div className="flex gap-1">
                <div className="w-0.5 h-4 bg-charcoal" />
                <div className="w-0.5 h-4 bg-charcoal" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur px-4 py-2">
            <span className="text-warm-white text-xs font-semibold tracking-wider">BEFORE</span>
          </div>
          <div className="absolute bottom-4 right-4 bg-amber-500 px-4 py-2">
            <span className="text-charcoal text-xs font-semibold tracking-wider">AFTER</span>
          </div>
        </motion.div>
        <p className="text-center text-warm-white/30 text-xs mt-4">Demo imagery. Replace with real project photos.</p>
      </div>
    </section>
  )
}
