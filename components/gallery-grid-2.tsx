"use client"

import { useState } from "react"
import Image from "next/image"
import ArtworkModal from "./artwork-modal"
import { ScrollAnimation } from "./scroll-animations"

interface GalleryImage {
  id: string
  title: string
  series: string
  media: string
  size: string
  year: number
  imagePath?: string
  path?: string
  description?: string
  isVideo?: boolean
  order?: number
}

interface GalleryGridProps {
  images: GalleryImage[]
  layout?: "grid" | "panorama" | "masonry"
}

export default function GalleryGrid({ images, layout = "grid" }: GalleryGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<GalleryImage | null>(null)

  // sort consistently across layouts using optional `order`, then filename, then id
  const sortedImages = (() => {
    const extractNumberFromPath = (p: string | undefined) => {
      if (!p) return NaN
      const name = p.split("/").pop() || ""
      const base = name.split(".")[0] || name
      const num = parseInt(base.replace(/\D/g, ""), 10)
      return isNaN(num) ? NaN : num
    }

    const getKey = (img: GalleryImage) => {
      if (typeof img.order === "number") return img.order
      const numFromImagePath = extractNumberFromPath(img.imagePath)
      if (!isNaN(numFromImagePath)) return numFromImagePath
      const numFromPath = extractNumberFromPath(img.path)
      if (!isNaN(numFromPath)) return numFromPath
      const idNum = parseInt(String(img.id).replace(/\D/g, ""), 10)
      if (!isNaN(idNum)) return idNum
      return img.id ?? img.title
    }

    return [...images].sort((a, b) => {
      const ka = getKey(a)
      const kb = getKey(b)
      if (typeof ka === "number" && typeof kb === "number") return ka - kb
      return String(ka).localeCompare(String(kb))
    })
  })()

  if (layout === "panorama") {
    return (
      <>
        {/* Vertical stack - each image on its own row */}
        <div className="flex flex-col gap-20">
          {sortedImages.map((image, index) => {
            const imageSource =
              image.imagePath ||
              image.path ||
              `/placeholder.svg?height=300&width=900&query=${encodeURIComponent(image.title)} panoramic artwork`
            const isVideo = image.isVideo || imageSource.includes(".mov") || imageSource.includes(".mp4")

            // Alternate: even = starts from left, odd = starts from right
            const isFromLeft = index % 2 === 0

            return (
              <ScrollAnimation
                key={image.id}
                animation={isFromLeft ? "slide-in-left" : "fade-in-up"}
                delay={index * 100}
              >
                {/* Container that positions the card left or right */}
                <div className={`flex w-full ${isFromLeft ? "justify-start" : "justify-end"}`}>
                  {/* Card - takes 85% width on desktop to allow for alternating effect */}
                  <div
                    className="group w-full cursor-pointer md:w-[85%]"
                    onClick={() => setSelectedArtwork({ ...image, imagePath: imageSource })}
                  >
                    <div
                      className={`overflow-hidden border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-2xl ${
                        isFromLeft
                          ? "rounded-2xl md:rounded-l-none md:rounded-r-3xl"
                          : "rounded-2xl md:rounded-r-none md:rounded-l-3xl"
                      }`}
                    >
                      {/* Image Container - Horizontally elongated aspect ratio */}
                      <div className="relative w-full overflow-hidden bg-muted">
                        {isVideo ? (
                          <div className="flex aspect-[21/9] items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                            <div className="text-center">
                              <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                                <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <span className="text-sm font-medium text-muted-foreground">Click to play video</span>
                            </div>
                          </div>
                        ) : (
                          <>
                            {/* Horizontally elongated container with aspect-[21/9] for panoramic display */}
                            <div className="relative aspect-[21/9] w-full">
                              <Image
                                src={imageSource || "/placeholder.svg"}
                                alt={image.title}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                sizes="100vw"
                              />
                            </div>
                            {/* Subtle gradient overlay on hover */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          </>
                        )}

                        {/* View indicator on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm">
                            View Details
                          </span>
                        </div>
                      </div>

                      {/* Info Section - aligned based on image position */}
                      <div
                        className={`flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between ${
                          isFromLeft ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <div className={isFromLeft ? "text-left" : "text-left md:text-right"}>
                          <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                            {image.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">{image.series}</p>
                        </div>

                        <div
                          className={`flex flex-wrap items-center gap-2 text-sm ${isFromLeft ? "" : "md:flex-row-reverse"}`}
                        >
                          <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground">{image.media}</span>
                          <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground">{image.size}</span>
                          <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                            {image.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* Artwork Modal */}
        {selectedArtwork && <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />}
      </>
    )
  }

  // Default grid layout for other galleries (paintings, experimental, etc.)
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedImages.map((image, index) => {
          const imageSource =
            image.imagePath ||
            image.path ||
            `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(image.title)}`

          return (
            <ScrollAnimation key={image.id} animation="fade-in-up" delay={index * 50}>
              <div
                className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg"
                onClick={() => setSelectedArtwork({ ...image, imagePath: imageSource })}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={imageSource || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                    <span className="translate-y-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Click to view details
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-balance font-medium text-foreground">{image.title}</h3>
                  <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{image.series}</span>
                    <span>{image.year}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />}
    </>
  )
}
