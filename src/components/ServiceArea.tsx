import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'

const areas = ['Milwaukee', 'West Allis', 'Wauwatosa', 'West Milwaukee', 'Greenfield', 'Brookfield', 'Waukesha', 'Oak Creek', 'Franklin', 'South Milwaukee']

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">Service Area</span>
          <h2 className="font-display font-bold text-warm-white text-4xl lg:text-6xl mt-4 leading-tight">
            PROUDLY SERVING MILWAUKEE<br />
            <span className="text-amber-500">& THE SURROUNDING AREA</span>
          </h2>
          <p className="text-warm-white/50 mt-4 text-sm">
            Target service-area locations. Coverage may vary — confirm availability when you call.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
            {areas.map((area, i) => (
              <motion.div
                key={area}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                <span className="text-warm-white/80 text-sm">{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-charcoal border border-white/10 p-8 lg:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MapPin size={32} className="text-amber-500 mb-4" />
            <h3 className="font-display font-bold text-warm-white text-2xl">MILWAUKEE ROOF REPAIRS</h3>
            <p className="text-warm-white/60 mt-4 leading-relaxed">
              10501 W Greenfield Ave<br />
              West Allis, WI 53214
            </p>
            <a
              href="https://maps.app.goo.gl/6yJiJ87vc4xEasdp8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-amber-500 hover:text-amber-400 font-semibold text-sm tracking-wider transition-colors"
              data-cursor="MAP"
            >
              OPEN IN GOOGLE MAPS <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
