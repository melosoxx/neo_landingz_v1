"use client"

import { motion } from "framer-motion"

interface FooterSectionProps {
  isActive: boolean
  onNavigate?: (index: number) => void
}

export default function FooterSection({ isActive, onNavigate }: FooterSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <p className="text-purple-400 text-lg font-semibold mb-8">
          No estás comprando información, estás comprando Habilidades.
        </p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-balance text-glow">
          Materializá tus ideas de manera autónoma
        </h2>
        <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
          No solo obtendrás gran independencia para implementar los cambios que desees con total libertad, sino que aprenderás una habilidad de alto valor muy demandada en múltiples ámbitos.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={() => onNavigate?.(5)}
            className="group flex items-center gap-2 mx-auto rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 glow-purple"
          >
            Obtener el Contenedor de Información
          </button>
        </motion.div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
      >
        <div className="h-px w-16 bg-border" />
        <p className="text-xs text-muted-foreground">
          Neo Landing Protocol © 2026. Todos los derechos reservados.
        </p>
      </motion.footer>
    </section>
  )
}
