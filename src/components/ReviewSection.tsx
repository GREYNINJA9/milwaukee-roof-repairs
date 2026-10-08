import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'

export default function ReviewSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="fill-amber-500 text-amber-500" />
            ))}
          </div>
          <div className="font-display font-bold text-warm-white text-7xl lg:text-9xl">5.0</div>
          <p className="text-warm-white/60 text-lg mt-4">Trusted by Milwaukee-area homeowners</p>
          <p className="text-warm-white/40 text-sm mt-2">Based on verified public Google listing</p>

          <div className="mt-12">
            <a
              href="https://maps.app.goo.gl/6yJiJ87vc4xEasdp8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-warm-white/20 hover:border-amber-500 text-warm-white hover:text-amber-500 font-semibold px-8 py-4 text-sm tracking-wider transition-all duration-300"
              data-cursor="VIEW"
            >
              <ExternalLink size={18} />
              VIEW GOOGLE REVIEWS
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 text-left">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-warm-white/60 text-sm italic">
                "Google reviews available — visit the public listing to read verified customer feedback."
              </p>
              <p className="text-warm-white/30 text-xs mt-4">Verified Google Review</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
