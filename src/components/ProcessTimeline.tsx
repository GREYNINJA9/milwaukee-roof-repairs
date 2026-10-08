import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const steps = [
  { num: '01', title: 'INSPECT', desc: 'Find the actual problem.' },
  { num: '02', title: 'DIAGNOSE', desc: 'Determine the appropriate repair.' },
  { num: '03', title: 'EXPLAIN', desc: 'Give the homeowner clear options.' },
  { num: '04', title: 'REPAIR', desc: 'Fix the underlying problem.' },
  { num: '05', title: 'PROTECT', desc: 'Leave the roof ready for what\'s next.' },
]

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })

  return (
    <section id="process" ref={ref} className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-600 text-sm font-semibold tracking-[0.2em] uppercase">Our Process</span>
          <h2 className="font-display font-bold text-charcoal text-4xl lg:text-6xl mt-4 leading-tight">
            FROM DAMAGE TO DONE.
          </h2>
        </motion.div>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-charcoal/10" />
          <motion.div
            className="hidden lg:block absolute top-8 left-0 h-px bg-amber-500 origin-left"
            style={{ scaleX: scrollYProgress, width: '100%' }}
          />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="hidden lg:flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-warm-white border-2 border-charcoal/10 flex items-center justify-center relative z-10">
                    <span className="font-display font-bold text-charcoal text-lg">{step.num}</span>
                  </div>
                </div>
                <div className="lg:text-center">
                  <span className="lg:hidden text-amber-600 font-display font-bold text-sm">{step.num}</span>
                  <h3 className="font-display font-bold text-charcoal text-xl lg:text-2xl mt-2">{step.title}</h3>
                  <p className="text-steel text-sm mt-2">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
