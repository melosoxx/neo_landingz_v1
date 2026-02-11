'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Layout from './Layout'
import HeroSection from './sections/HeroSection'
import ProblemSection from './sections/ProblemSection'
import ProtocolSection from './sections/ProtocolSection'
import BentoSection from './sections/BentoSection'
import PricingSection from './sections/PricingSection'
import FooterSection from './sections/FooterSection'

const sectionIds = ['hero', 'problem', 'protocol', 'components', 'footer', 'pricing']

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor((scrollPosition + windowHeight * 0.3) / windowHeight)
        setActiveSection(Math.min(newActiveSection, sectionIds.length - 1))
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout>
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4" aria-label="Section navigation">
        {sectionIds.map((id, index) => (
          <button
            key={id}
            className={`w-2.5 h-2.5 rounded-full my-1.5 transition-all ${
              index === activeSection ? 'bg-primary scale-150 glow-purple' : 'bg-muted-foreground/30'
            }`}
            onClick={() => handleNavClick(index)}
            aria-label={`Go to ${id} section`}
          />
        ))}
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-30"
        style={{ scaleX }}
      />
      <div 
        ref={containerRef} 
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        <HeroSection isActive={activeSection === 0} onNavigate={handleNavClick} />
        <ProblemSection isActive={activeSection === 1} />
        <ProtocolSection isActive={activeSection === 2} />
        <BentoSection isActive={activeSection === 3} />
        <FooterSection isActive={activeSection === 4} onNavigate={handleNavClick} />
        <PricingSection isActive={activeSection === 5} />
      </div>
    </Layout>
  )
}
