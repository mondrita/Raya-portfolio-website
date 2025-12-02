"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { ScrollAnimation } from "./scroll-animations"
import { X } from "lucide-react"

interface GalleryImage {
  id: string
  title: string
  series: string
  media: string
  size: string
  year: number
  imagePath?: string
  path?: string
  order?: number
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImagePath, setSelectedImagePath] = useState<string | null>(null)

  // Sort images by explicit `order` field first, then by filename index (from imagePath or path),
  // then numeric id, then fallback to id/title string comparison.
  const sortedImages = useMemo(() => {
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

      // also check `path` (some data uses `path`)
      // @ts-ignore - path may exist on data
      const numFromPath = extractNumberFromPath((img as any).path)
      if (!isNaN(numFromPath)) return numFromPath

      // if id contains digits, use that
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
  }, [images])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedImages.map((image, index) => {
          const imageSource =
            image.imagePath ||
            image.path ||
            `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(image.title)}`

          return (
            <ScrollAnimation key={image.id} animation="fade-in-up" delay={index * 50} threshold={0.15}>
              <div
                className="group cursor-pointer h-full"
                onClick={() => setSelectedImagePath(imageSource)}
              >
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
                        Click to view image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>

      {/* Simple Image Viewer - Only shows image, centered, no metadata */}
      {selectedImagePath && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImagePath(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-96 h-96">
              <Image
                src={selectedImagePath}
                alt="Enlarged view"
                fill
                className="object-contain"
                priority
              />
              <button
                onClick={() => setSelectedImagePath(null)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
