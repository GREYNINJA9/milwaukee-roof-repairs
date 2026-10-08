import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import EmergencyBanner from './components/EmergencyBanner'
import Services from './components/Services'
import RepairOrReplace from './components/RepairOrReplace'
import RoofAnatomy from './components/RoofAnatomy'
import WeatherSection from './components/WeatherSection'
import ProcessTimeline from './components/ProcessTimeline'
import BeforeAfter from './components/BeforeAfter'
import TrustSection from './components/TrustSection'
import ReviewSection from './components/ReviewSection'
import ServiceArea from './components/ServiceArea'
import QuoteSection from './components/QuoteSection'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import FloatingStatus from './components/FloatingStatus'
import MobileBottomBar from './components/MobileBottomBar'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <CustomCursor />
      <ScrollProgress />
      <FloatingStatus />
      <MobileBottomBar />
      
      <Navigation />
      <main>
        <Hero />
        <EmergencyBanner />
        <Services />
        <RepairOrReplace />
        <WeatherSection />
        <ProcessTimeline />
        <BeforeAfter />
        <TrustSection />
        <ReviewSection />
        <ServiceArea />
        <QuoteSection />
      </main>
      <Footer />
    </>
  )
}

export default App
