import { motion } from 'framer-motion'
import { Droplets, CloudLightning, Layers, Shield, RefreshCw, Building2, ArrowUpRight } from 'lucide-react'

const services = [
  { icon: Droplets, title: 'Roof Leak Repair', desc: 'Trace and repair the source of water intrusion.', num: '01' },
  { icon: CloudLightning, title: 'Storm & Hail Damage', desc: 'Assessment and repair after severe weather.', num: '02' },
  { icon: Layers, title: 'Shingle Repair', desc: 'Missing, cracked, lifted, or damaged shingles.', num: '03' },
  { icon: Shield, title: 'Flashing Repair', desc: 'Chimney, vent, skylight, and transition flashing.', num: '04' },
  { icon: RefreshCw, title: 'Roof Replacement', desc: 'When repair is no longer the right long-term solution.', num: '05' },
  { icon: Building2, title: 'TPO / EPDM', desc: 'Commercial and low-slope roofing solutions.', num: '06' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-600 text-sm font-semibold tracking-[0.2em] uppercase">Our Services</span>
          <h2 className="font-display font-bold text-charcoal text-4xl lg:text-6xl mt-4 leading-tight">
            ONE ROOF. MANY PROBLEMS.<br />
            <span className="text-steel">ONE TEAM TO FIX THEM.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative bg-white border border-charcoal/5 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-cursor="EXPLORE"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute top-6 right-6 font-display text-5xl font-bold text-charcoal/5 group-hover:text-amber-500/20 transition-colors duration-500">
                {service.num}
              </span>
              <service.icon size={32} className="text-amber-500 mb-6" />
              <h3 className="font-display font-bold text-charcoal text-xl mb-2">{service.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{service.desc}</p>
              <ArrowUpRight size={20} className="absolute bottom-6 right-6 text-charcoal/20 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
