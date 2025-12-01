import Link from "next/link"
import { Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Artist exploring paintings, experimental works, and panorama art. Based in Dhaka, Bangladesh.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Gallery</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/experimental" className="text-muted-foreground hover:text-accent transition-colors">
                  Experimental Works
                </Link>
              </li>
              <li>
                <Link href="/paintings" className="text-muted-foreground hover:text-accent transition-colors">
                  Paintings
                </Link>
              </li>
              <li>
                <Link href="/panorama" className="text-muted-foreground hover:text-accent transition-colors">
                  Panorama Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:rayamadhubanti@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                rayamadhubanti@gmail.com
              </a>
              <a
                href="https://www.instagram.com/madhubanti_rayart?igsh=MWN5d291djF0dnNlaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Madhubanti Biswas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
