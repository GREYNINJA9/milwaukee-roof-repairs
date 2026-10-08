import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden bg-charcoal">
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1920&q=80')`,
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.15)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")' }} />
      </motion.div>

      <motion.div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto pt-28 lg:pt-32" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6 pt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-warm-white/70 text-sm tracking-wide">5.0 Rated Local Roofing Contractor</span>
          </div>

          <h1 className="font-display font-bold text-warm-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight max-w-4xl">
            YOUR ROOF<br />
            SHOULD NEVER<br />
            BE A <span className="text-amber-500">QUESTION MARK.</span>
          </h1>

          <p className="mt-6 text-warm-white/70 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Professional roof repair, storm damage restoration, and roofing solutions for Milwaukee and Southeast Wisconsin.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-charcoal font-bold px-8 py-4 text-sm tracking-wider transition-all duration-300"
              data-cursor="QUOTE"
            >
              GET A FREE ROOF INSPECTION
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+14148002650"
              className="inline-flex items-center justify-center gap-3 border border-warm-white/30 hover:border-amber-400 text-warm-white hover:text-amber-400 font-semibold px-8 py-4 text-sm tracking-wider transition-all duration-300"
              data-cursor="CALL"
            >
              <Phone size={18} />
              CALL (414) 800-2650
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-warm-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
