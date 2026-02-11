"use client"

import { motion } from "framer-motion"
import { X, Check, Clock, DollarSign, Lock, Zap, Code, Shield } from "lucide-react"

interface ProblemSectionProps {
  isActive: boolean
}

const oldWay = [
  { icon: Clock, text: "Semanas esperando al desarrollador" },
  { icon: DollarSign, text: "Costos altisimos por cada cambio" },
  { icon: Lock, text: "Dependencias por falta de conocimiento" },
]

const neoWay = [
  { icon: Zap, text: "Ejecuci\u00f3n instant\u00e1nea con IAs" },
  { icon: Code, text: "Programación sin tocar código" },
  { icon: Shield, text: "Independencia total y Autosugestión" },
]

export default function ProblemSection({ isActive }: ProblemSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-widest">El Problema</span>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mt-3 text-balance">
          {"Tomás el camino equivocado para trabajar"}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Old Way */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-destructive/20 bg-destructive/5 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/15">
              <X className="h-5 w-5 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{"El Viejo Camino"}</h3>
          </div>
          <ul className="flex flex-col gap-4">
            {oldWay.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Neo Way */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl border border-primary/30 bg-primary/5 p-8 glow-purple"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{"El Neo Camino"}</h3>
          </div>
          <ul className="flex flex-col gap-4">
            {neoWay.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
