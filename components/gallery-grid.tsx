"use client"

import { useState, useMemo } from "react"
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
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<GalleryImage | null>(null)

  // Sort images by filename index if `imagePath` is present (e.g. "/static/Paintings/1.jpg").
  // Falls back to `id` or `title` when no numeric index can be derived.
  const sortedImages = useMemo(() => {
    const getKey = (img: GalleryImage) => {
      if (img.imagePath) {
        const name = img.imagePath.split("/").pop() || ""
        const base = name.split(".")[0] || name
        // extract number if present, otherwise return the base string
        const num = parseInt(base.replace(/\D/g, ""), 10)
        return isNaN(num) ? base : num
      }
      return img.id ?? img.title
    }

    return [...images].sort((a, b) => {
      const ka = getKey(a)
      const kb = getKey(b)

      if (typeof ka === "number" && typeof kb === "number") return ka - kb
      return String(ka).localeCompare(String(kb))
    })
  }, [images])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => {
          const imageSource = image.imagePath || `/placeholder.svg?height=400&width=400&query=${image.title}`

          return (
            <ScrollAnimation key={image.id} animation="fade-in-up" delay={index * 50} threshold={0.15}>
              <div className="group cursor-pointer h-full" onClick={() => setSelectedArtwork(image)}>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative border border-border transition-all duration-300 hover:border-accent">
                  <div className="relative w-full h-full">
                    <Image
                      src={imageSource || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-start p-4">
                      <p className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-light text-primary group-hover:text-accent transition-colors line-clamp-2">
                    {image.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{image.series}</p>
                  <p className="text-xs text-muted-foreground">{image.year}</p>
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
