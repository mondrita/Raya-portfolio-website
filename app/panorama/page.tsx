"use client"

import { ChevronRight } from "lucide-react"
import GalleryGrid from "@/components/gallery-grid"
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
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <ScrollAnimation animation="fade-in-up">
          <h1 className="text-heading text-primary mb-2">Panorama Works</h1>
          <div className="w-12 h-1 bg-accent mb-6" />
          <p className="text-body text-muted-foreground max-w-3xl">
            Large-scale panoramic compositions that explore expansive landscapes and extended visual narratives. These
            works challenge conventional framing and invite the viewer to engage with extended perspectives and
            continuous visual flow.
          </p>
        </ScrollAnimation>
      </section>

      {/* Featured Panorama */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollAnimation animation="scale-in" threshold={0.3}>
          <div className="aspect-[16/6] bg-muted rounded-lg border border-border overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-accent/5 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-light text-accent/20 mb-2">🌅</div>
                <p className="text-xs text-muted-foreground">Panoramic Composition</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" threshold={0.3}>
          <div>
            <p className="text-xs text-accent uppercase tracking-wider mb-2">Featured Collection</p>
            <h2 className="text-3xl font-light text-primary mb-4">Panorama Series</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              This collection represents my exploration of panoramic vision and extended spatial relationships. By
              working across large horizontal formats, I investigate how the eye moves through space and how narrative
              can unfold across an expanded plane. Each piece is a study in perspective, flow, and visual continuity.
            </p>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Format:</span>
                <span className="text-primary font-light">Panoramic</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Scale:</span>
                <span className="text-primary font-light">Large Format</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Years:</span>
                <span className="text-primary font-light">2024 - 2025</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-accent text-sm font-light hover:gap-3 transition-all">
              Explore Series
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollAnimation>
      </section>

      {/* All Panorama Works Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-2xl font-light text-primary mb-8">All Works</h2>
        </ScrollAnimation>
        <GalleryGrid images={panoramaData} />
      </section>

      {/* Process Note */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border bg-muted/30 rounded-lg p-8">
        <ScrollAnimation animation="fade-in-up" threshold={0.4}>
          <h3 className="text-lg font-light text-primary mb-4">About This Series</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Panoramic works represent an extension of my visual vocabulary. They allow me to explore how time, space,
            and perspective interact across an extended format. The panorama challenges the rectangular frame we're
            accustomed to, inviting viewers to shift their gaze and engage with a different kind of visual narrative—one
            that encourages movement and discovery.
          </p>
        </ScrollAnimation>
      </section>
    </main>
  )
}
