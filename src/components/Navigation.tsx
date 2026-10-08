import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-charcoal/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 lg:h-24">
          <a href="#" className="flex flex-col leading-none" data-cursor="HOME">
            <span className="font-display font-bold text-warm-white text-lg lg:text-xl tracking-wider">MILWAUKEE</span>
            <span className="font-display text-amber-500 text-xs lg:text-sm tracking-[0.35em]">ROOF REPAIRS</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-warm-white/80 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors relative group"
                data-cursor="VIEW"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <a
            href="tel:+14148002650"
            className="hidden lg:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-charcoal font-semibold px-6 py-3 text-sm tracking-wide transition-all duration-300"
            data-cursor="CALL"
          >
            <Phone size={16} />
            CALL NOW
          </a>

          <button
            className="lg:hidden text-warm-white p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-charcoal flex flex-col"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMenuOpen(false)} className="text-warm-white p-2" aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="font-display text-3xl text-warm-white hover:text-amber-400 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="p-8 text-center">
              <a
                href="tel:+14148002650"
                className="inline-flex items-center gap-3 bg-amber-500 text-charcoal font-semibold px-8 py-4 text-lg"
              >
                <Phone size={20} />
                (414) 800-2650
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
