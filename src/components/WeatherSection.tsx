import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sun, CloudRain, Snowflake, Home } from 'lucide-react'

const stages = [
  { icon: Sun, label: 'Summer', color: 'text-amber-400' },
  { icon: CloudRain, label: 'Storms', color: 'text-blue-400' },
  { icon: Snowflake, label: 'Winter', color: 'text-cyan-300' },
  { icon: Home, label: 'Protected', color: 'text-amber-500' },
]

export default function WeatherSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={ref} className="relative py-24 lg:py-40 overflow-hidden bg-navy">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1920&q=80')`,
          y: bgY,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">Milwaukee Climate</span>
          <h2 className="font-display font-bold text-warm-white text-4xl lg:text-6xl mt-4 leading-tight">
            MILWAUKEE WEATHER DOESN'T<br />
            <span className="text-amber-500">FORGIVE WEAK ROOFS.</span>
          </h2>
          <p className="text-warm-white/60 mt-6 max-w-2xl mx-auto">
            From heavy snow and ice to summer storms and freeze-thaw cycles, Milwaukee roofs face relentless seasonal pressure.
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                <stage.icon size={32} className={stage.color} />
              </div>
              <span className="text-warm-white/70 text-sm font-medium tracking-wide">{stage.label}</span>
              {i < stages.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute text-warm-white/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  ↓
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
