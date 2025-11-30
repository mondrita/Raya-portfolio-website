"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  priority?: boolean
  fill?: boolean
  className?: string
  objectFit?: "contain" | "cover" | "fill"
}

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  fill = false,
  className = "",
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const getOptimizedSrc = (originalSrc: string) => {
    // In production, this would generate WebP and thumbnail versions
    return originalSrc
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <p className="text-muted-foreground text-sm">Image failed to load</p>
      </div>
    )
  }

  return (
    <>
      {/* Blur placeholder while loading */}
      {isLoading && <div className={`absolute inset-0 bg-muted animate-pulse ${className}`} />}

      <Image
        src={getOptimizedSrc(src) || "/placeholder.svg"}
        alt={alt}
        priority={priority}
        fill={fill}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        quality={80}
        onLoadingComplete={handleLoadingComplete}
        onError={handleError}
      />
    </>
  )
}
