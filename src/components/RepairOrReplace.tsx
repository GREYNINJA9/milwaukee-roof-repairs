import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wrench, Home, ArrowRight, Check } from 'lucide-react'

const questions = [
  { id: 'leak', text: 'Is the roof actively leaking?' },
  { id: 'missing', text: 'Are shingles missing?' },
  { id: 'localized', text: 'Is the damage localized?' },
  { id: 'widespread', text: 'Is the roof showing widespread deterioration?' },
  { id: 'storm', text: 'Has the roof suffered storm damage?' },
]

export default function RepairOrReplace() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({})
  const [result, setResult] = useState<'repair' | 'replace' | null>(null)

  const handleAnswer = (id: string, value: boolean) => {
    const updated = { ...answers, [id]: value }
    setAnswers(updated)

    const answered = questions.filter(q => updated[q.id] !== undefined && updated[q.id] !== null)
    if (answered.length === questions.length) {
      const replaceSignals = [updated.widespread, updated.storm].filter(Boolean).length
      setResult(replaceSignals >= 2 ? 'replace' : 'repair')
    }
  }

  const reset = () => { setAnswers({}); setResult(null) }

  return (
    <section className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">Diagnostic Tool</span>
          <h2 className="font-display font-bold text-warm-white text-4xl lg:text-6xl mt-4 leading-tight">
            DO YOU NEED A REPAIR —<br />OR A NEW ROOF?
          </h2>
          <p className="text-warm-white/60 mt-4 max-w-xl mx-auto">
            Answer a few questions to get a general direction. Final recommendations require an on-site inspection.
          </p>
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="questions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {questions.map((q, i) => (
                  <motion.div
                    key={q.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/5 border border-white/10 p-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-warm-white font-medium">{q.text}</span>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleAnswer(q.id, true)}
                        className={`px-5 py-2 text-sm font-semibold transition-all ${
                          answers[q.id] === true
                            ? 'bg-amber-500 text-charcoal'
                            : 'bg-white/10 text-warm-white/60 hover:bg-white/20'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, false)}
                        className={`px-5 py-2 text-sm font-semibold transition-all ${
                          answers[q.id] === false
                            ? 'bg-amber-500 text-charcoal'
                            : 'bg-white/10 text-warm-white/60 hover:bg-white/20'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-white/5 border border-white/10 p-12"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  result === 'repair' ? 'bg-amber-500' : 'bg-roof-blue'
                }`}>
                  {result === 'repair' ? <Wrench size={28} className="text-charcoal" /> : <Home size={28} className="text-warm-white" />}
                </div>
                <h3 className="font-display font-bold text-warm-white text-3xl">
                  {result === 'repair' ? 'REPAIR' : 'REPLACE'}
                </h3>
                <p className="text-warm-white/60 mt-4 max-w-md mx-auto">
                  {result === 'repair'
                    ? 'Your answers suggest an isolated issue that may be resolved with a targeted repair.'
                    : 'Your answers suggest widespread concerns that may warrant a full replacement evaluation.'}
                </p>
                <p className="text-warm-white/40 text-sm mt-4 italic">
                  This is an educational tool only. Final recommendations require an on-site inspection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-charcoal font-bold px-8 py-4 text-sm tracking-wider transition-all" data-cursor="QUOTE">
                    BOOK A ROOF INSPECTION <ArrowRight size={18} />
                  </a>
                  <button onClick={reset} className="inline-flex items-center justify-center gap-2 border border-white/20 text-warm-white/60 hover:text-warm-white px-8 py-4 text-sm transition-all" data-cursor="RESET">
                    <Check size={18} /> START OVER
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
