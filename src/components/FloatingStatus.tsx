import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield } from 'lucide-react'

const states = ['ROOF READY', 'INSPECTING', 'DIAGNOSING', 'PROTECTED']

export default function FloatingStatus() {
  const [visible, setVisible] = useState(false)
  const [stateIndex, setStateIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    const interval = setInterval(() => setStateIndex(i => (i + 1) % states.length), 4000)
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(interval) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-24 lg:bottom-8 right-6 z-40 hidden lg:flex items-center gap-3 bg-charcoal/90 backdrop-blur-xl border border-white/10 px-5 py-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <Shield size={16} className="text-amber-500" />
          <div className="flex flex-col">
            <span className="text-warm-white/40 text-[10px] tracking-wider">MILWAUKEE</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={states[stateIndex]}
                className="text-amber-500 text-xs font-semibold tracking-wider"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {states[stateIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
