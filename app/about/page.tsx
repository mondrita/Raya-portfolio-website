import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { artistProfile } from "@/lib/artwork-data"

export default function About() {
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
    {
      year: 2023,
      title: "Us Women",
      location: "Emk Center",
      type: "Group Exhibition",
    },
    {
      year: 2022,
      title: "Inktober & Impression of Nature",
      location: "Multiple Venues",
      type: "Group Exhibitions",
    },
    {
      year: 2019,
      title: "Nouveaux Venus & Art Camp Exhibition",
      location: "Multiple Venues",
      type: "Group Exhibitions",
    },
  ]

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <ScrollAnimation animation="fade-in-up">
          <h1 className="text-heading text-primary mb-2">About Me</h1>
          <div className="w-12 h-1 bg-accent" />
        </ScrollAnimation>
      </section>

      {/* Bio Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Profile Image */}
        <ScrollAnimation animation="scale-in" threshold={0.3}>
          <div className="md:col-span-1">
            <div className="relative aspect-square mb-6 bg-muted rounded-lg overflow-hidden">
              <Image
                src={artistProfile.profileImage || "/placeholder.svg"}
                alt={artistProfile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <a
                  href={`tel:${artistProfile.phone}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {artistProfile.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${artistProfile.email}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {artistProfile.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">{artistProfile.location}</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Bio Text */}
        <ScrollAnimation animation="fade-in-up" threshold={0.3}>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-light text-primary mb-4">Artist & Painter</h2>
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                My work evolves from the emotions and memories I build within the spaces I live in at certain moments of
                my life. I get deeply attached to my surroundings, my native city and its unique characteristics, the
                touch of nature, even something as simple as the corners of my hostel room or fragments of my dreams.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                My paintings are my way of making sense of where I am, where I've been, and what stays within me no
                matter where I go. For me, concept and skill in drawing hold equal importance. Each work begins
                differently, guided by my emotions and by the materials themselves.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Ultimately, my art is a way of connecting with myself and the world around me. It is a personal journey
                of discovery, memory, and reflection, and I hope that through my work, others can sense the emotions,
                stories, and rhythms that shape my life.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-primary mb-3">Art Practice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I often turn to ink and charcoal, my favorite media, because of their simplicity and rich texture. They
                allow me to work spontaneously, to let my thoughts and feelings flow directly onto the surface. I also
                love working with acrylic and gouache, which offer different layers and playfulness in color.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-2xl font-light text-primary mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="pb-6 border-b border-border last:border-b-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <h3 className="text-lg font-light text-primary">{edu.degree}</h3>
                <span className="text-sm text-accent font-medium">{edu.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
              <p className="text-xs text-muted-foreground">{edu.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exhibitions */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-2xl font-light text-primary mb-8">Exhibitions & Awards</h2>
        <div className="space-y-6">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="pb-6 border-b border-border last:border-b-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <h3 className="text-lg font-light text-primary">{exhibition.title}</h3>
                <span className="text-sm text-accent font-medium flex-shrink-0">{exhibition.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{exhibition.type}</p>
              <p className="text-xs text-muted-foreground">{exhibition.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-2xl font-light text-primary mb-6">Skills & Media</h2>
        <div className="flex flex-wrap gap-3">
          {[
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
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-accent/10 border border-accent/30 text-sm font-light text-primary rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-border text-center">
        <p className="text-muted-foreground mb-6">Interested in collaboration or commissions?</p>
        <a
          href="mailto:rayamadhubanti@gmail.com"
          className="inline-block px-8 py-3 bg-accent text-accent-foreground hover:opacity-90 transition-opacity duration-300 text-sm font-medium"
        >
          Get In Touch
        </a>
      </section>
    </main>
  )
}
