import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Madhubanti Biswas | Artist Portfolio",
  description:
    "Professional artist portfolio showcasing paintings, experimental works, and panorama art by Madhubanti Biswas",
  keywords: "artist, paintings, experimental art, panorama, gallery, portfolio",
  openGraph: {
    title: "Madhubanti Biswas | Artist Portfolio",
    description: "Professional artist portfolio showcasing paintings, experimental works, and panorama art",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/logo.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.jpg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased pt-16`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
