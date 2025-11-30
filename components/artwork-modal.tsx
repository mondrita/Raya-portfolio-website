"use client"

import { X, Download, Maximize2 } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Artwork {
  id: string
  title: string
  series: string
  media: string
  size: string
  year: number
  imagePath?: string
  description?: string
  isVideo?: boolean
}

interface ArtworkModalProps {
  artwork: Artwork
  onClose: () => void
}

export default function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false)
        } else {
          onClose()
        }
      }
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [onClose, isFullscreen])

  const imageSource =
    artwork.imagePath || `/placeholder.svg?height=800&width=1200&query=${encodeURIComponent(artwork.title)}`
  const isVideo = artwork.isVideo || artwork.imagePath?.includes(".mov") || artwork.imagePath?.includes(".mp4")

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 pointer-events-auto"
      onClick={onClose}
    >
      <div
        className={`relative flex max-h-[95vh] w-full flex-col overflow-hidden rounded-lg bg-card ${
          isFullscreen ? "max-w-[95vw]" : "max-w-5xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-xl font-semibold text-foreground">{artwork.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Toggle fullscreen"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col overflow-auto lg:flex-row">
          {/* Image/Video Container */}
          <div className="relative flex flex-1 items-center justify-center bg-muted/30 p-4">
            {!isImageLoaded && !isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              </div>
            )}
            {isVideo ? (
              <video
                src={imageSource}
                controls
                className="max-h-[70vh] max-w-full rounded object-contain"
                poster={`/placeholder.svg?height=400&width=800&query=${encodeURIComponent(artwork.title)} video thumbnail`}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={imageSource || "/placeholder.svg"}
                alt={artwork.title}
                width={1200}
                height={800}
                className={`max-h-[70vh] max-w-full rounded object-contain transition-opacity duration-500 ${
                  isImageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsImageLoaded(true)}
              />
            )}
          </div>

          {/* Metadata Panel */}
          <div className="flex w-full flex-col border-t border-border bg-background p-6 lg:w-80 lg:border-l lg:border-t-0">
            {/* Description */}
            {artwork.description && (
              <div className="mb-6">
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  About This Work
                </h3>
                <p className="text-sm leading-relaxed text-foreground/80">{artwork.description}</p>
              </div>
            )}

            {/* Metadata Grid - Now displays all details correctly */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Series</span>
                <span className="mt-1 block text-sm font-medium text-foreground">{artwork.series}</span>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Year</span>
                <span className="mt-1 block text-sm font-medium text-foreground">{artwork.year}</span>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Medium</span>
                <span className="mt-1 block text-sm font-medium text-foreground">{artwork.media}</span>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Size</span>
                <span className="mt-1 block text-sm font-medium text-foreground">{artwork.size}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3">
              {/* {!isVideo && (
                <a
                  href={imageSource}
                  download={`${artwork.title.replace(/\s+/g, "-").toLowerCase()}.jpg`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  Download High-Res
                </a>
              )} */}
              <button
                onClick={onClose}
                className="rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
