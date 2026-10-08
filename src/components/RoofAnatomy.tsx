import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const components = [
  {
    id: 'ridge',
    label: 'Ridge',
    short: 'Peak where roof planes meet.',
    detail: 'Protects the highest seam from water and wind.',
    x: 49,
    y: 15,
  },
  {
    id: 'shingles',
    label: 'Shingles',
    short: 'The outer weather barrier.',
    detail: 'They shed rain, resist UV, and protect the roof deck.',
    x: 76,
    y: 22,
  },
  {
    id: 'underlayment',
    label: 'Underlayment',
    short: 'Extra layer under shingles.',
    detail: 'Adds water resistance if the outer layer is damaged.',
    x: 44,
    y: 32,
  },
  {
    id: 'decking',
    label: 'Roof Decking',
    short: 'Structural base of the roof.',
    detail: 'This supports the layers above and ties the roof together.',
    x: 56,
    y: 58,
  },
  {
    id: 'rafters',
    label: 'Rafters / Trusses',
    short: 'The roof frame.',
    detail: 'They carry the roof load and shape the attic space.',
    x: 18,
    y: 31,
  },
  {
    id: 'eaves',
    label: 'Eaves',
    short: 'Roof edge where water sheds.',
    detail: 'Proper edge protection helps prevent ice and water damage.',
    x: 35,
    y: 79,
  },
  {
    id: 'fascia',
    label: 'Fascia',
    short: 'Trim along the roof edge.',
    detail: 'Protects the edge and supports the gutter system.',
    x: 64,
    y: 79,
  },
]

export default function RoofAnatomy() {
  const [active, setActive] = useState<string>('shingles')

  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="text-amber-600 text-sm font-semibold tracking-[0.2em] uppercase">Roof Education</span>
          <h2 className="font-display font-bold text-charcoal text-4xl lg:text-6xl mt-4 leading-tight">
            YOUR ROOF IS A SYSTEM —<br />
            <span className="text-steel">NOT JUST SHINGLES.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
          <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-[#f5f3ef] shadow-[0_28px_70px_rgba(17,24,39,0.08)]">
            <svg viewBox="0 0 1000 620" className="w-full h-auto" role="img" aria-label="Roof anatomy diagram">
              <rect x="0" y="0" width="1000" height="620" fill="#f5f3ef" />

              <polygon points="85,380 500,145 915,380" fill="#c7d2fe" stroke="#7687a1" strokeWidth="5" />
              <polygon points="170,380 500,235 830,380" fill="#dbe4f5" stroke="#6b7280" strokeWidth="4" opacity="0.7" />
              <polygon points="270,380 500,300 730,380" fill="#a5b4fc" stroke="#6b7280" strokeWidth="3" opacity="0.75" />

              <polygon points="125,385 500,175 875,385" fill="#4b5563" stroke="#374151" strokeWidth="5" />
              <polygon points="180,385 500,245 820,385" fill="#667085" stroke="#374151" strokeWidth="4" opacity="0.85" />

              <g stroke="#d4d4d8" strokeWidth="2" opacity="0.35">
                {Array.from({ length: 14 }).map((_, index) => (
                  <line key={index} x1={180 + index * 34} y1={360 + index * 4} x2={500 - (index * 4)} y2={228 + index * 4} />
                ))}
              </g>

              <polygon points="500,171 540,170 560,112 500,90 440,112 460,170" fill="#1f2937" stroke="#374151" strokeWidth="3" />
              <rect x="480" y="95" width="40" height="18" rx="3" fill="#22c55e" opacity="0.9" />

              <polygon points="135,385 205,385 205,415 135,415" fill="#6b7280" />
              <polygon points="795,385 865,385 865,415 795,415" fill="#6b7280" />

              <line x1="110" y1="420" x2="110" y2="470" stroke="#1f2937" strokeWidth="3" />
              <line x1="890" y1="420" x2="890" y2="470" stroke="#1f2937" strokeWidth="3" />

              <line x1="500" y1="390" x2="500" y2="500" stroke="#374151" strokeWidth="3" strokeDasharray="8 10" />

              <g stroke="#1f2937" strokeWidth="3" fill="none" opacity="0.8">
                <line x1="250" y1="390" x2="250" y2="505" />
                <line x1="310" y1="390" x2="310" y2="500" />
                <line x1="370" y1="390" x2="370" y2="500" />
                <line x1="430" y1="390" x2="430" y2="500" />
                <line x1="560" y1="390" x2="560" y2="500" />
                <line x1="620" y1="390" x2="620" y2="500" />
                <line x1="680" y1="390" x2="680" y2="500" />
                <line x1="740" y1="390" x2="740" y2="500" />
              </g>

              <g fontSize="26" fill="#1f2937" fontWeight="600">
                <text x="220" y="120" textAnchor="middle">Ridge</text>
                <text x="820" y="120" textAnchor="middle">Shingles (Roof Covering)</text>
                <text x="495" y="250" textAnchor="middle">Underlayment</text>
                <text x="775" y="370" textAnchor="middle">Roof Decking (Sheathing)</text>
                <text x="770" y="520" textAnchor="middle">Attic Space</text>
                <text x="120" y="548" textAnchor="middle">Drip Edge</text>
                <text x="500" y="548" textAnchor="middle">Fascia</text>
                <text x="880" y="548" textAnchor="middle">Drip Edge</text>
                <text x="145" y="300" textAnchor="middle">Rafters / Trusses</text>
              </g>

              <g stroke="#1f2937" strokeWidth="2.5" strokeDasharray="6 6" fill="none">
                <line x1="500" y1="115" x2="500" y2="80" />
                <line x1="820" y1="130" x2="820" y2="95" />
                <line x1="490" y1="230" x2="490" y2="195" />
                <line x1="770" y1="350" x2="770" y2="315" />
                <line x1="430" y1="500" x2="430" y2="470" />
                <line x1="145" y1="308" x2="90" y2="275" />
                <line x1="130" y1="548" x2="90" y2="520" />
                <line x1="880" y1="548" x2="930" y2="520" />
              </g>
            </svg>

            <div className="absolute inset-0">
              {components.map((item) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setActive(item.id)}
                  onMouseLeave={() => setActive(item.id)}
                  onClick={() => setActive(item.id)}
                  className="absolute rounded-full border-2 border-white/80 bg-amber-500/80 shadow-md transition-transform duration-200 hover:scale-110"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    width: '12px',
                    height: '12px',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: active === item.id ? '0 0 0 6px rgba(245, 158, 11, 0.2)' : 'none',
                  }}
                  aria-label={item.label}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-charcoal/10 bg-charcoal p-6 text-warm-white shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Component</span>
                <h3 className="mt-3 font-display text-3xl font-bold text-warm-white">
                  {components.find((item) => item.id === active)?.label}
                </h3>
                <p className="mt-4 text-sm leading-6 text-warm-white/70">
                  {components.find((item) => item.id === active)?.short}
                </p>
                <p className="mt-3 text-sm leading-6 text-warm-white/60">
                  {components.find((item) => item.id === active)?.detail}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="grid gap-3">
              {components.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`text-left rounded-xl border px-4 py-3 transition-all ${
                    active === item.id
                      ? 'border-amber-500 bg-amber-50 text-charcoal'
                      : 'border-charcoal/10 bg-white text-charcoal hover:border-charcoal/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-xs uppercase tracking-wide text-charcoal/60">Point</span>
                  </div>
                  <p className="mt-2 text-sm text-charcoal/70">{item.short}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
