import React from "react"
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata = {
  title: 'Neo Landing Protocol - De 0 a Deploy',
  description: 'El protocolo definitivo para crear landing pages de alta conversion con IA. Templates Next.js, prompts maestros y tutoriales paso a paso.',
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground`}>{children}</body>
    </html>
  )
}
