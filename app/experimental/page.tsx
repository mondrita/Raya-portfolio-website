"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import GalleryGrid from "@/components/gallery-grid"
import { ScrollAnimation } from "@/components/scroll-animations"
import { experimentalWorks } from "@/lib/artwork-data"

export default function ExperimentalWorks() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = Object.entries(experimentalWorks).map(([id, data]) => ({
    id,
    title: data.title,
    description: data.description,
    imageCount: data.images.length,
    media: data.media,
    year: data.year,
  }))

  // Map category keys to their cover images
  const categoryImages: Record<string, string> = {
    "distorted-mind": "https://res.cloudinary.com/dwe69wcqm/image/upload/v1764528544/mind_cpmkbf.jpg",
    "dream-montage": "https://res.cloudinary.com/dwe69wcqm/image/upload/v1764528705/self_xi2uah.jpg",
    "number-three": "https://res.cloudinary.com/dwe69wcqm/image/upload/v1764528547/three_vswrg1.jpg",
    "rickshaw": "https://res.cloudinary.com/dwe69wcqm/image/upload/v1764528553/rik_vef2p8.jpg",
  }

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <ScrollAnimation animation="fade-in-up">
          <h1 className="text-heading text-primary mb-2">Experimental Works</h1>
          <div className="w-12 h-1 bg-accent mb-6" />
          <p className="text-body text-muted-foreground max-w-3xl">
            A collection of exploratory series that challenge my artistic process. These works emerge from concepts and
            emotions, pushing the boundaries of material and technique.
          </p>
        </ScrollAnimation>
      </section>

      {/* Categories Grid with Scroll Animations */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <ScrollAnimation key={category.id} animation="fade-in-up" delay={index * 100} threshold={0.2}>
              <div
                className="group cursor-pointer"
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              >
                {/* Placeholder image area */}
                <div
                  className={`aspect-video bg-muted rounded-lg mb-4 overflow-hidden border transition-all duration-300 ${
                    activeCategory === category.id ? "border-accent" : "border-border"
                  } hover:border-accent`}
                >
                  <Image
                    src={categoryImages[category.id] || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                    quality={75}
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-light text-primary group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.media} • {category.year}
                  </p>
                </div>

                {/* Expandable description */}
                {activeCategory === category.id && (
                  <div className="mt-4 pt-4 border-t border-border animate-fade-in-up">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                    <Link
                      href={`/experimental/${category.id}`}
                      className="inline-flex items-center gap-2 text-accent text-sm font-light hover:gap-3 transition-all"
                    >
                      View Series
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Featured Works Preview */}
      {/* <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-heading text-primary mb-12">Selected Pieces</h2>
        </ScrollAnimation>
        <GalleryGrid
          images={[
            {
              id: "exp-1",
              title: "Distorted Self",
              series: "Distorted Mind",
              media: "Charcoal and Pencil Color on Paper",
              size: '12" × 15"',
              year: 2025,
              imagePath: experimentalWorks["distorted-mind"].images[0].path,
            },
            {
              id: "exp-2",
              title: "Dream Fragment I",
              series: "Dream Montage",
              media: "Gouache, Ink and Charcoal",
              size: "2ft × 10ft",
              year: 2025,
              imagePath: experimentalWorks["dream-montage"].images[0].path,
            },
            {
              id: "exp-3",
              title: "Three Generations",
              series: "The Glory of Number Three",
              media: "Pen on Paper",
              size: "5ft × 4ft",
              year: 2024,
              imagePath: experimentalWorks["number-three"].images[0].path,
            },
            {
              id: "exp-4",
              title: "Rickshaw Motion",
              series: "Chronicle of Rickshaw",
              media: "Mixed Media on Paper",
              size: "Miniature",
              year: 2025,
              imagePath: experimentalWorks.rickshaw.images[0].path,
            },
            {
              id: "exp-5",
              title: "Dream Fragment II",
              series: "Dream Montage",
              media: "Gouache, Ink and Charcoal",
              size: "2ft × 10ft",
              year: 2025,
              imagePath: experimentalWorks["dream-montage"].images[1].path,
            },
            {
              id: "exp-6",
              title: "Three Elements",
              series: "The Glory of Number Three",
              media: "Pen on Paper",
              size: "5ft × 4ft",
              year: 2024,
              imagePath: experimentalWorks["number-three"].images[1].path,
            },
          ]}
        />
      </section> */}
    </main>
  )
}
