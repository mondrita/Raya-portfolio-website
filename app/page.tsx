import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"

export default function Home() {
  const galleries = [
    {
      id: "experimental",
      title: "Experimental Works",
      description: "Exploring distorted minds, dream montages, the number three, and rickshaw chronicles",
      href: "/experimental",
      accent: true,
    },
    {
      id: "paintings",
      title: "Paintings",
      description: "Acrylic, ink, and gouache compositions exploring emotions and memories",
      href: "/paintings",
    },
    {
      id: "panorama",
      title: "Panorama Works",
      description: "Large-scale panoramic studies and visual narratives",
      href: "/panorama",
    },
  ]

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <h1 className="text-display mb-6 text-primary">Madhubanti Biswas</h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={100}>
            <p className="text-subheading mb-8 text-muted-foreground max-w-2xl mx-auto">
              Artist exploring emotions, memories, and the spaces that shape us
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-body text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Through paintings, experimental works, and panoramic studies, I explore the connections between the spaces
              I inhabit and the memories I carry. My work is a dialogue between intuition and reflection, where concept
              and skill converge.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground hover:opacity-90 transition-opacity duration-300 text-sm font-medium"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <ScrollAnimation animation="fade-in-up" threshold={0.2}>
          <div className="mb-16">
            <h2 className="text-heading text-primary mb-2">Gallery Collections</h2>
            <div className="w-12 h-1 bg-accent" />
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <ScrollAnimation key={gallery.id} animation="scale-in" delay={index * 100} threshold={0.2}>
              <Link href={gallery.href} className="group">
                <div
                  className={`p-8 rounded-lg transition-all duration-500 hover:shadow-lg ${
                    gallery.accent
                      ? "bg-accent/10 border border-accent/20 hover:border-accent/40"
                      : "bg-muted border border-border hover:border-accent/30"
                  }`}
                >
                  <h3 className="text-2xl font-light text-primary mb-3 group-hover:text-accent transition-colors">
                    {gallery.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{gallery.description}</p>
                  <div className="flex items-center gap-2 text-accent font-light text-sm group-hover:gap-3 transition-all">
                    View Gallery
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "4", label: "Experimental Series" },
            { number: "8+", label: "Major Exhibitions" },
            { number: "3", label: "Art Collections" },
          ].map((stat, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100} threshold={0.3}>
              <div className="text-center">
                <div className="text-4xl font-light text-accent mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <ScrollAnimation animation="fade-in-up">
          <h2 className="text-heading text-primary mb-6">Let's Connect</h2>
          <p className="text-body text-muted-foreground mb-8">
            Interested in my work or collaborations? I'd love to hear from you.
          </p>
          <a
            href="mailto:rayamadhubanti@gmail.com"
            className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 text-sm font-medium"
          >
            Get In Touch
          </a>
        </ScrollAnimation>
      </section>
    </main>
  )
}
