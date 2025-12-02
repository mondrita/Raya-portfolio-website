"use client"

import { ChevronRight } from "lucide-react"
import GalleryGrid from "@/components/gallery-grid-2"
import { ScrollAnimation } from "@/components/scroll-animations"
import { panoramaWorks } from "@/lib/artwork-data"

export default function Panorama() {
  const panoramaData = panoramaWorks.map((p) => ({
    ...p,
    series: "Panorama Works",
    imagePath: p.path,
    description: "Large-scale panoramic composition exploring spatial relationships and extended visual narratives.",
  }))

  return (
    
    <main className="pb-20">
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dwe69wcqm/image/upload/v1764688611/pan_eimt2x.jpg"
          alt="Panoramic artwork featuring surreal composition with geometric shapes, celestial elements, and dreamlike imagery"
          className="w-full h-auto object-contain"
        />
      </div>
      {/* All Panorama Works Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-2xl font-light text-primary mb-8">All Works</h2>
        </ScrollAnimation>
        <GalleryGrid images={panoramaData} layout="panorama" />
      </section>

    </main>
  )
}
