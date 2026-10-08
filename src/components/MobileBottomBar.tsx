import { Phone, MapPin, ClipboardList } from 'lucide-react'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-charcoal/95 backdrop-blur-xl border-t border-white/10">
      <div className="grid grid-cols-3">
        <a href="tel:+14148002650" className="flex flex-col items-center justify-center py-3 gap-1 text-warm-white/70 hover:text-amber-500 transition-colors">
          <Phone size={20} />
          <span className="text-[10px] font-semibold tracking-wider">CALL</span>
        </a>
        <a href="https://maps.app.goo.gl/6yJiJ87vc4xEasdp8" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center py-3 gap-1 text-warm-white/70 hover:text-amber-500 transition-colors">
          <MapPin size={20} />
          <span className="text-[10px] font-semibold tracking-wider">DIRECTIONS</span>
        </a>
        <a href="#contact" className="flex flex-col items-center justify-center py-3 gap-1 text-warm-white/70 hover:text-amber-500 transition-colors">
          <ClipboardList size={20} />
          <span className="text-[10px] font-semibold tracking-wider">QUOTE</span>
        </a>
      </div>
    </div>
  )
}
