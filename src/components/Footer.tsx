import { Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex flex-col leading-none mb-6">
              <span className="font-display font-bold text-warm-white text-2xl tracking-wider">MILWAUKEE</span>
              <span className="font-display text-amber-500 text-sm tracking-[0.35em]">ROOF REPAIRS</span>
            </div>
            <p className="text-warm-white/50 max-w-md leading-relaxed">
              Roof repair and roofing solutions for Milwaukee and Southeast Wisconsin.
            </p>
            <p className="text-warm-white/30 text-xs mt-4">
              Demo website concept. Business information shown is based on public listings.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-warm-white text-sm tracking-wider mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {['Roof Leak Repair', 'Storm Damage', 'Shingle Repair', 'Flashing Repair', 'Roof Replacement', 'TPO / EPDM'].map(s => (
                <li key={s} className="text-warm-white/50 text-sm hover:text-amber-400 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-warm-white text-sm tracking-wider mb-4">CONTACT</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+14148002650" className="flex items-center gap-2 text-warm-white/50 hover:text-amber-400 text-sm transition-colors">
                  <Phone size={14} /> (414) 800-2650
                </a>
              </li>
              <li className="flex items-start gap-2 text-warm-white/50 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                10501 W Greenfield Ave<br />West Allis, WI 53214
              </li>
              <li>
                <a href="https://maps.app.goo.gl/6yJiJ87vc4xEasdp8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-warm-white/50 hover:text-amber-400 text-sm transition-colors">
                  <ExternalLink size={14} /> Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-white/30 text-xs">© 2026 Milwaukee Roof repairs</p>
          <p className="text-warm-white/20 text-xs">Demo concept website</p>
        </div>
      </div>
    </footer>
  )
}
