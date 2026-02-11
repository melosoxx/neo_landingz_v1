"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

interface HeroSectionProps {
  isActive: boolean
  onNavigate?: (index: number) => void
}

export default function HeroSection({ isActive, onNavigate }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16 text-center">
      <motion.p
        className="text-base md:text-lg lg:text-xl font-medium text-purple-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        ¿Todavía necesitás llamar al diseñador para cada cambio que hacés en tu landing?
      </motion.p>

      <motion.h1
        className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl text-balance text-glow"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Autogestión total de tus proyectos
      </motion.h1>

      <motion.p
        className="font-display text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight max-w-3xl mt-5 text-muted-foreground"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        No necesitás aprender a programar, necesitás aprender a dirigir IAs. Utilizá el protocolo definitivo para construir, lanzar y editar landings de alta conversión sin intermediarios.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <button
          onClick={() => onNavigate?.(4)}
          className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-purple"
        >
          Obtener el Contenedor de Información
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button
          onClick={() => onNavigate?.(2)}
          className="flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <Play className="h-4 w-4 text-primary" />
          Ver el flujo de trabajo
        </button>
      </motion.div>
    </section>
  )
}
