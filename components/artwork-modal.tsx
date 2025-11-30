"use client"

import { X, Download } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getOptimizedImageUrl } from "@/lib/image-optimization"

interface Artwork {
  id: string
  title: string
  series: string
  media: string
  size: string
  year: number
}

interface ArtworkModalProps {
  artwork: Artwork
  onClose: () => void
}

export default function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const highResImageUrl = getOptimizedImageUrl("/high-resolution-art.jpg", {
    width: 1200,
    height: 1200,
    quality: 90,
    format: "webp",
  })

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="text-lg font-light text-primary">{artwork.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-square bg-muted rounded-lg mb-8 border border-border overflow-hidden relative">
            {!isImageLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
            <Image
              src={highResImageUrl || "/placeholder.svg"}
              alt={artwork.title}
              fill
              className={`object-cover transition-opacity duration-500 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
              quality={90}
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              onLoadingComplete={() => setIsImageLoaded(true)}
            />
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-border">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Series</p>
              <p className="font-light text-primary text-sm">{artwork.series}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Media</p>
              <p className="font-light text-primary text-sm">{artwork.media}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Size</p>
              <p className="font-light text-primary text-sm">{artwork.size}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2">Year</p>
              <p className="font-light text-primary text-sm">{artwork.year}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-accent-foreground hover:opacity-90 transition-opacity text-sm font-medium rounded">
              <Download className="w-4 h-4" />
              Download High-Res
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-border text-primary hover:bg-muted transition-colors text-sm font-medium rounded"
            >
              Close
            </button>
          </div>

          {/* Image Optimization Info */}
          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              Image optimized for fast loading with WebP support and lazy loading
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
