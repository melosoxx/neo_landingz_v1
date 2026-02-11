"use client"

import { motion } from "framer-motion"

interface FooterSectionProps {
  isActive: boolean
}

export default function FooterSection({ isActive }: FooterSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-balance text-glow">
          {"Dej\u00e1 de dise\u00f1ar. Empez\u00e1 a deployar."}
        </h2>
        <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
          {"El futuro de la creaci\u00f3n web es con IAs. El protocolo te ense\u00f1a a dirigirlas."}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <button className="group flex items-center gap-2 mx-auto rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 glow-purple">
            {"Obtener el Contenedor de Informaci\u00f3n"}
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
          {"Neo Landing Protocol \u00a9 2026. Todos los derechos reservados."}
        </p>
      </motion.footer>
    </section>
  )
}
