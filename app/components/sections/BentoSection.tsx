"use client"

import { motion } from "framer-motion"
import { Vault, MessageSquareCode, Video, Layers } from "lucide-react"

interface BentoSectionProps {
  isActive: boolean
}

const components = [
  {
    icon: Vault,
    title: "Repositorio de Estructuras",
    description: "No empieces de cero nunca m\u00e1s. Obtendrás acceso a repositorios privados de Next.js + Tailwind, optimizados para velocidad de carga y conversi\u00f3n. Clon\u00e1, inyect\u00e1 tu marca y public\u00e1.",
    value: "$150 USD",
    span: "md:col-span-2",
    accent: true,
  },
  {
    icon: MessageSquareCode,
    title: "Biblioteca de Prompts",
    description: "Tendrás acceso a mi biblioteca personal de prompts estructurados para v0 y Claude. Aprend\u00e9 a \u201cdirigir a la m\u00e1quina\u201d para generar secciones enteras, l\u00f3gica de formularios y animaciones complejas en segundos.",
    value: "$49 USD",
    span: "md:col-span-1",
    accent: false,
  },
  {
    icon: Video,
    title: "Neo Landingz Campus (Skool).",
    description: "Acceso a la comunidad privada y base de tutoriales. Mir\u00e1 exactamente c\u00f3mo construyo cada landing de principio a fin, sin cortes, mostrando la resoluci\u00f3n de problemas reales en tiempo real.",
    value: "$127 USD",
    span: "md:col-span-1",
    accent: false,
  },
  {
    icon: Layers,
    title: "Componentes de \u00c9lite.",
    description: "Selecci\u00f3n premium de componentes Ui Premium listos para integrar en tu c\u00f3digo. Elev\u00e1 la est\u00e9tica de tus p\u00e1ginas al nivel de las mejores startups del mundo sin tocar una sola l\u00ednea de código.",
    value: "$25 USD",
    span: "md:col-span-2",
    accent: true,
  },
]

export default function BentoSection({ isActive }: BentoSectionProps) {
  return (
    <section className="relative min-h-screen w-full snap-start flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-7 sm:mb-9 lg:mb-12"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-widest">{"Qu\u00e9 incluye"}</span>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mt-3 text-balance">
          {"Componentes Fundamentales"}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl w-full">
        {components.map((comp, i) => (
          <motion.div
            key={comp.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            className={`${comp.span} group relative overflow-hidden rounded-xl border p-4 sm:p-6 transition-all glow-purple-hover border-beam ${
              comp.accent
                ? "border-primary/30 bg-primary/5 hover:border-primary/50"
                : "border-border bg-card/50 hover:border-primary/30 hover:bg-primary/5"
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-3.5">
              <div className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg transition-colors ${
                comp.accent ? "bg-primary/15 group-hover:bg-primary/25" : "bg-muted group-hover:bg-primary/15"
              }`}>
                <comp.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${comp.accent ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground">{comp.title}</h3>
                  <span className="shrink-0 text-[10px] sm:text-xs font-mono font-bold text-primary/80 bg-primary/10 border border-primary/20 rounded-full px-1.5 sm:px-2 py-0.5">
                    {comp.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{comp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
