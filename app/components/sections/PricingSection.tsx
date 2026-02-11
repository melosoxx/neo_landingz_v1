"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Infinity } from "lucide-react"

interface PricingSectionProps {
  isActive: boolean
}

const included = [
  "5 templates Next.js + Tailwind",
  "Prompt Library completa",
  "Campus Skool (video tutorials)",
  "UI Verse component library",
  "Actualizaciones de por vida",
  "Acceso a comunidad privada",
]

export default function PricingSection({ isActive }: PricingSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-widest">Precio</span>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mt-3 text-balance">
          {"Inversi\u00f3n \u00fanica. Acceso eterno."}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative max-w-lg w-full rounded-2xl border border-primary/40 bg-card/80 p-8 md:p-10 glow-purple"
      >
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
            <Infinity className="h-3.5 w-3.5" />
            Acceso de por vida
          </span>
        </div>

        <div className="text-center mb-8 mt-2">
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl text-muted-foreground line-through">$300+</span>
            <span className="font-display text-6xl md:text-7xl font-bold text-foreground">$80</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">USD &middot; Pago &uacute;nico</p>
        </div>

        <div className="border-t border-border pt-6 mb-8">
          <ul className="flex flex-col gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 glow-purple">
          {"Quiero el protocolo completo"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </section>
  )
}
