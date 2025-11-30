"use client"

import React, { useState } from "react"

interface HoverEffectProps {
  children: React.ReactNode
  className?: string
}

export function HoverEffect({ children, className = "" }: HoverEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(211, 78, 78, 0.1), transparent 80%)`,
        }}
      />
      {children}
    </div>
  )
}
