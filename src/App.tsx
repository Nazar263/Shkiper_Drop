import Header from './components/Header'
import Hero from './components/Hero'
import CatalogSection from './components/CatalogSection'
import Advantages from './components/Advantages'
import Reviews from './components/Reviews'
import Delivery from './components/Delivery'
import FAQ from './components/FAQ'
import TelegramCTA from './components/TelegramCTA'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary relative">
      {/* Animated gradient background across entire site */}
      <div className="animated-gradient-bg pointer-events-none fixed inset-0 z-0" />
      {/* Noise texture for depth */}
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[1] opacity-60" />
      {/* Vignette for premium feel */}
      <div className="vignette pointer-events-none fixed inset-0 z-[2]" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <CatalogSection />
        <Advantages />
        <Reviews />
        <Delivery />
        <FAQ />
        <TelegramCTA />
        <Footer />
        <FloatingButton />
      </div>
    </div>
  )
}
