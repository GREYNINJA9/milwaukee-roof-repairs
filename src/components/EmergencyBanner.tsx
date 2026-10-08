import { motion } from 'framer-motion'
import { Phone, AlertTriangle } from 'lucide-react'

export default function EmergencyBanner() {
  return (
    <section className="relative py-4 lg:py-5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 border-t border-b border-white/10 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E')]"
            animate={{ backgroundPosition: ['0 0', '40px 40px'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8 py-7 lg:py-8">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative shrink-0">
                <motion.div
                  className="absolute inset-0 rounded-full bg-amber-500/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <div className="relative w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <AlertTriangle size={24} className="text-charcoal" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-warm-white text-xl lg:text-2xl leading-tight">ROOF LEAKING RIGHT NOW?</h3>
                <p className="text-warm-white/70 text-sm">Don't wait for the damage to spread.</p>
              </div>
            </div>
            <a
              href="tel:+14148002650"
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-charcoal font-bold px-6 lg:px-8 py-4 text-sm tracking-wider transition-all duration-300 w-full sm:w-auto"
              data-cursor="CALL"
            >
              <Phone size={18} />
              CALL FOR EMERGENCY HELP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
