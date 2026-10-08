import { motion } from 'framer-motion'
import { Star, MapPin, Shield, Award } from 'lucide-react'

const stats = [
  { icon: Star, value: '5.0', label: 'Google Rating', detail: 'Verified public listing' },
  { icon: Award, value: '100+', label: 'Public Reviews', detail: 'Across Google & directories' },
  { icon: MapPin, value: 'West Allis', label: 'Based In', detail: 'Serving Milwaukee area' },
  { icon: Shield, value: 'Full', label: 'Service Range', detail: 'Repairs to replacements' },
]

export default function TrustSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-600 text-sm font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
          <h2 className="font-display font-bold text-charcoal text-4xl lg:text-6xl mt-4 leading-tight">
            LOCAL KNOWLEDGE.<br />
            <span className="text-steel">ROOFING EXPERIENCE.</span>
          </h2>
          <p className="text-steel mt-6 max-w-2xl">
            Milwaukee Roof repairs is a locally based roofing contractor with public experience across shingle, TPO, and EPDM roofing systems. From smaller repairs to full replacements, the work is grounded in understanding what Milwaukee-area roofs actually need.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-charcoal p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <stat.icon size={24} className="text-amber-500 mx-auto mb-4" />
              <div className="font-display font-bold text-warm-white text-3xl">{stat.value}</div>
              <div className="text-amber-500 text-sm font-semibold mt-1">{stat.label}</div>
              <div className="text-warm-white/40 text-xs mt-2">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
