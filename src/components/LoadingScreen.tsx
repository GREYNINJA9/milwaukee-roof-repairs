import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center"
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
    >
      <svg width="120" height="60" viewBox="0 0 120 60" className="mb-6">
        <motion.path
          d="M10 50 L60 10 L110 50"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M25 50 L60 22 L95 50"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        />
      </svg>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h1 className="font-display text-2xl text-warm-white tracking-wider">MILWAUKEE</h1>
        <h2 className="font-display text-lg text-amber-500 tracking-[0.3em]">ROOF REPAIRS</h2>
      </motion.div>
    </motion.div>
  )
}
