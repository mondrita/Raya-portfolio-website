"use client"

import { ChevronRight } from "lucide-react"
import GalleryGrid from "@/components/gallery-grid"
import { ScrollAnimation } from "@/components/scroll-animations"
import { paintings } from "@/lib/artwork-data"

export default function Paintings() {
  const paintingsData = paintings.map((p) => ({
    ...p,
    series: "Paintings",
    imagePath: p.path,
  }))

  return (
    <main className="pb-20">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <ScrollAnimation animation="fade-in-up">
          <h1 className="text-heading text-primary mb-2">Paintings</h1>
          <div className="w-12 h-1 bg-accent mb-6" />
          <p className="text-body text-muted-foreground max-w-3xl">
            A collection of paintings in acrylic, ink, gouache, and mixed media. These works explore emotions, memories,
            and the spaces that shape my artistic practice. Each piece represents a moment of discovery and reflection.
          </p>
        </ScrollAnimation>
      </section>

      {/* Featured Painting */}
      {/* <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollAnimation animation="scale-in" threshold={0.3}>
          <div className="aspect-video bg-muted rounded-lg border border-border overflow-hidden order-2 md:order-1">
            <div className="w-full h-full bg-gradient-to-br from-accent/5 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-light text-accent/20 mb-2">🎨</div>
                <p className="text-xs text-muted-foreground">Gray Urban Song</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" threshold={0.3}>
          <div className="order-1 md:order-2">
            <p className="text-xs text-accent uppercase tracking-wider mb-2">Featured Collection</p>
            <h2 className="text-3xl font-light text-primary mb-4">Gray Urban Song</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              A scroll painting composition based on Dhaka, my native city. Growing up in Dhaka has created a strong
              connection between me and the city. In this work, eyes can roam around with flow, and the monochrome grey
              feeling that characterizes urban life becomes an integral part of the piece.
            </p>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Media:</span>
                <span className="text-primary font-light">Acrylic on Canvas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Size:</span>
                <span className="text-primary font-light">1ft × 10ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year:</span>
                <span className="text-primary font-light">2024</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-accent text-sm font-light hover:gap-3 transition-all">
              View Full Details
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollAnimation>
      </section> */}

      {/* All Paintings Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-2xl font-light text-primary mb-8">All Works</h2>
        </ScrollAnimation>
        <GalleryGrid images={paintingsData} />
      </section>
    </main>
  )
}
