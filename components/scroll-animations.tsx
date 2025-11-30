"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fade-in-up" | "slide-in-left" | "scale-in" | "fade-in"
  threshold?: number
  delay?: number
}

export function ScrollAnimation({
  children,
  animation = "fade-in-up",
  threshold = 0.1,
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before triggering animation
          const timer = setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
          return () => clearTimeout(timer)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, delay])

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0"

  return (
    <div ref={ref} className={animationClass}>
      {children}
    </div>
  )
}
