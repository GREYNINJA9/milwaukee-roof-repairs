import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Check } from 'lucide-react'

const services = ['Roof Leak', 'Storm Damage', 'Shingle Damage', 'Flashing Problem', 'Roof Inspection', 'Roof Replacement', 'Commercial Roofing', 'Other']

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', service: '', roofType: '', problem: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">Get Started</span>
          <h2 className="font-display font-bold text-warm-white text-4xl lg:text-6xl mt-4 leading-tight">
            LET'S FIND OUT WHAT<br />
            <span className="text-amber-500">YOUR ROOF REALLY NEEDS.</span>
          </h2>
          <p className="text-warm-white/50 mt-4 max-w-xl mx-auto">
            Demo concept form. Final recommendations require an on-site inspection.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-amber-500 p-12 text-center"
              >
                <Check size={48} className="text-charcoal mx-auto mb-4" />
                <h3 className="font-display font-bold text-charcoal text-2xl">REQUEST RECEIVED</h3>
                <p className="text-charcoal/70 mt-2">Demo confirmation. In production, this would trigger a real notification.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Property Address"
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-amber-500 transition-colors"
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-warm-white focus:outline-none focus:border-amber-500 transition-colors"
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="" className="bg-charcoal">Service Needed</option>
                    {services.map(s => <option key={s} value={s} className="bg-charcoal">{s}</option>)}
                  </select>
                  <select
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-warm-white focus:outline-none focus:border-amber-500 transition-colors"
                    onChange={(e) => setForm({ ...form, roofType: e.target.value })}
                  >
                    <option value="" className="bg-charcoal">Roof Type</option>
                    <option value="shingle" className="bg-charcoal">Shingle</option>
                    <option value="tpo" className="bg-charcoal">TPO</option>
                    <option value="epdm" className="bg-charcoal">EPDM</option>
                    <option value="other" className="bg-charcoal">Other</option>
                  </select>
                </div>
                <textarea
                  placeholder="Describe the problem"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-warm-white placeholder:text-warm-white/30 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                />
                <div className="flex items-center gap-3 text-warm-white/30 text-sm">
                  <input type="file" multiple className="text-sm file:bg-amber-500 file:text-charcoal file:border-0 file:px-4 file:py-2 file:mr-3 file:font-semibold file:cursor-pointer" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-charcoal font-bold py-5 text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-3"
                  data-cursor="QUOTE"
                >
                  <Send size={18} />
                  REQUEST A FREE INSPECTION
                </button>
                <p className="text-warm-white/30 text-xs text-center">
                  Demo concept. "Free" inspection is presented as a demo offer, not verified business policy.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
