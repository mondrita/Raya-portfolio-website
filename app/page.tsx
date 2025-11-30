import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { artistProfile } from "@/lib/artwork-data"

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

  const education = [
    {
      degree: "MFA in Painting",
      institution: "Indira Kala Sangit Vishwavidyalaya",
      location: "Chattisgarh, India",
      period: "2023 - 2025",
    },
    {
      degree: "BFA in Painting",
      institution: "University of Dhaka",
      location: "Dhaka, Bangladesh",
      period: "2017 - 2021",
    },
  ]

  const exhibitions = [
    {
      year: 2024,
      title: "Global Art Forum - Young Artist Award",
      location: "Puri Sea Beach, India",
      type: "Art Camp Based Exhibition",
    },
    { year: 2023, title: "Us Women", location: "Emk Center", type: "Group Exhibition" },
    { year: 2022, title: "Inktober & Impression of Nature", location: "Multiple Venues", type: "Group Exhibitions" },
    {
      year: 2019,
      title: "Nouveaux Venus & Art Camp Exhibition",
      location: "Multiple Venues",
      type: "Group Exhibitions",
    },
  ]

  const skills = [
    "Design",
    "Illustration",
    "Painting",
    "Charcoal",
    "Ink",
    "Acrylic",
    "Gouache",
    "Woodcut Printmaking",
    "Collage",
    "Sculpture",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Artist Image & Statement */}
      <section className="px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation animation="fade-in-up">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
              {/* Artist Image */}
              <div className="flex-shrink-0 lg:w-72">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={artistProfile.profileImage || "/placeholder.svg?height=400&width=300&query=artist portrait"}
                    alt={artistProfile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Contact Info - Below Image */}
                <div className="mt-6 space-y-2 text-sm">
                  <a
                    href={`tel:${artistProfile.phone}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {artistProfile.phone}
                  </a>
                  <a
                    href={`mailto:${artistProfile.email}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    {artistProfile.email}
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {artistProfile.location}
                  </div>
                </div>
              </div>

              {/* Artist Name & Statement */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl lg:text-5xl">
                  {artistProfile.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-primary">Artist & Painter</p>

                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My work evolves from the emotions and memories I build within the spaces I live in at certain
                    moments of my life. I get deeply attached to my surroundings, my native city and its unique
                    characteristics, the touch of nature, even something as simple as the corners of my hostel room or
                    fragments of my dreams.
                  </p>
                  <p>
                    My paintings are my way of making sense of where I am, where I've been, and what stays within me no
                    matter where I go. For me, concept and skill in drawing hold equal importance.
                  </p>
                  <p>
                    I often turn to ink and charcoal, my favorite media, because of their simplicity and rich texture.
                    They allow me to work spontaneously. I also love working with acrylic and gouache, which offer
                    different layers and playfulness in color.
                  </p>
                  <p>
                    Ultimately, my art is a personal journey of discovery, memory, and reflection—a way of connecting
                    with myself and the world around me.
                  </p>
                </div>

                {/* Skills - Inline with Statement */}
                <div className="mt-8">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Skills & Media</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Divider with Accent */}
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Gallery Collections */}
      <section id="galleries" className="px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="mb-8 text-2xl font-bold text-secondary">Collections</h2>
          </ScrollAnimation>

          <div className="grid gap-4 md:grid-cols-3">
            {galleries.map((gallery, index) => (
              <ScrollAnimation key={gallery.id} animation="fade-in-up" delay={index * 80}>
                <Link
                  href={gallery.href}
                  className={`group flex h-full flex-col rounded-lg border p-5 transition-all duration-300 hover:shadow-md ${
                    gallery.accent
                      ? "border-primary/30 bg-primary/5 hover:border-primary/50"
                      : "border-border bg-card hover:border-secondary/30"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-secondary group-hover:text-primary">{gallery.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{gallery.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View Gallery
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Exhibitions - Two Column */}
      <section className="bg-secondary/5 px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Education */}
            <ScrollAnimation animation="fade-in-up">
              <div>
                <h2 className="mb-6 text-xl font-bold text-secondary">Education</h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-secondary">{edu.degree}</h4>
                          <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                          <p className="text-xs text-muted-foreground">{edu.location}</p>
                        </div>
                        <span className="flex-shrink-0 rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Exhibitions */}
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div>
                <h2 className="mb-6 text-xl font-bold text-secondary">Exhibitions & Awards</h2>
                <div className="space-y-3">
                  {exhibitions.map((exhibition, index) => (
                    <div key={index} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                      <span className="flex-shrink-0 rounded bg-secondary/10 px-2 py-1 text-xs font-bold text-secondary">
                        {exhibition.year}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-medium text-secondary">{exhibition.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {exhibition.type} • {exhibition.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Highlights */}
      {/* <section className="px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { number: "4", label: "Experimental Series" },
              { number: "8+", label: "Major Exhibitions" },
              { number: "3", label: "Art Collections" },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.label} animation="scale-in" delay={index * 80}>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">{stat.number}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-secondary px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-2xl font-bold text-secondary-foreground">Let's Connect</h2>
            <p className="mt-3 text-secondary-foreground/80">
              Interested in my work or collaborations? I'd love to hear from you.
            </p>
            <a
              href="mailto:rayamadhubanti@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
