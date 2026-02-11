"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BrainCircuit } from "lucide-react"
import { VercelLogo, VSCodeLogo, NetlifyLogo } from "../icons/BrandIcons"

interface ProtocolSectionProps {
  isActive: boolean
}

type IconComponent = React.FC<{ className?: string }>

const steps: { number: string; icon: IconComponent; title: string; description: string }[] = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Ideaci\u00f3n",
    description: "Defin\u00ed la estructura, el material y el objetivo de conversi\u00f3n de tu landing.",
  },
  {
    number: "02",
    icon: VercelLogo,
    title: "Prototipado",
    description: "Us\u00e1 los prompts maestros para generar un prototipo completo en minutos.",
  },
  {
    number: "03",
    icon: VSCodeLogo,
    title: "Refinamiento",
    description: "Ajust\u00e1 con Claude cada detalle: animaciones, responsividad, performance.",
  },
  {
    number: "04",
    icon: NetlifyLogo,
    title: "Deploy",
    description: "Public\u00e1 tu landing en vivo con dominio custom en menos de 5 minutos.",
  },
]

export default function ProtocolSection({ isActive }: ProtocolSectionProps) {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (!isActive) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [isActive])

  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 sm:mb-8 lg:mb-14"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-widest">El Protocolo</span>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mt-3 text-balance">
          {"Programaci\u00f3n a la velocidad del pensamiento."}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl w-full">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className={`group relative flex flex-col items-center text-center rounded-xl border p-3 sm:p-4 lg:p-6 transition-all duration-350 ease-in-out hover:border-primary/40 hover:bg-primary/5 glow-purple-hover ${
              activeStep === i ? "border-primary/40 bg-primary/5 glow-purple-active" : "border-border bg-card/50"
            }`}
          >
            <span className="absolute -top-3 left-4 text-xs font-mono font-bold text-primary bg-background px-2">
              {step.number}
            </span>
            <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg mb-2 sm:mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-350 ease-in-out border ${
              activeStep === i ? "bg-primary/20 border-primary/40" : "bg-primary/10 border-primary/20"
            }`}>
              <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{step.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>

            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/40 text-xl">
                {"\u2192"}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
