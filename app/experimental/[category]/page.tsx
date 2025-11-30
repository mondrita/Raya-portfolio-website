import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import GalleryGrid from "@/components/gallery-grid"
import { ScrollAnimation } from "@/components/scroll-animations"
import { experimentalWorks } from "@/lib/artwork-data"

export default async function CategoryPage({ params }: { params: { category: string } | Promise<{ category: string }> }) {
  // `params` may be a Promise in this Next.js runtime — await it before use.
  const resolvedParams = await params

  // Server-side debug: log the incoming category param (check dev terminal)
  console.log("[experimental]/[category] params.category:", resolvedParams?.category)

  const category = experimentalWorks[resolvedParams.category as keyof typeof experimentalWorks]

  if (!category) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-heading text-primary">Series Not Found</h1>
      </div>
    )
  }

  const artworks = category.images.map((img) => ({
    id: `${resolvedParams.category}-${img.id}`,
    title: img.title,
    series: category.title,
    media: category.media,
    size: category.size,
    year: category.year,
    imagePath: img.path,
  }))

  return (
    <main className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <ScrollAnimation animation="slide-in-left">
          <Link
            href="/experimental"
            className="inline-flex items-center gap-2 text-accent text-sm mb-6 hover:gap-3 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Experimental Works
          </Link>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" delay={100}>
          <h1 className="text-heading text-primary mb-2">{category.title}</h1>
          <div className="w-12 h-1 bg-accent mb-6" />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="flex flex-col lg:flex-row lg:gap-12">
            <div className="flex-1">
              <p className="text-body text-muted-foreground leading-relaxed">{category.description}</p>
            </div>
            <div className="lg:w-56 mt-8 lg:mt-0 space-y-4 text-sm flex-shrink-0">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Media</p>
                <p className="text-primary font-light">{category.media}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Typical Size</p>
                <p className="text-primary font-light">{category.size}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Year</p>
                <p className="text-primary font-light">{category.year}</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Gallery Grid with Scroll Animations */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <ScrollAnimation animation="scale-in" threshold={0.2}>
          <GalleryGrid images={artworks} />
        </ScrollAnimation>
      </section>

      {/* Related Series CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border text-center">
        <ScrollAnimation animation="fade-in-up">
          <p className="text-muted-foreground mb-6">Explore other experimental series</p>
          <Link
            href="/experimental"
            className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 text-sm font-medium"
          >
            View All Series
          </Link>
        </ScrollAnimation>
      </section>
    </main>
  )
}
