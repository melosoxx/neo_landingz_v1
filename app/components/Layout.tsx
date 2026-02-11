import { ReactNode } from 'react'
import { Squares } from "./ui/squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-background relative">
      <div className="absolute inset-0 z-10">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={48}
          borderColor="rgba(168, 85, 247, 0.08)" 
          hoverFillColor="rgba(168, 85, 247, 0.06)"
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
