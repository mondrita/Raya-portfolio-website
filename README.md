# Raya's Artist Portfolio

A modern, responsive artist portfolio website showcasing paintings, experimental works, and panoramic studies.

**[🌐 View Live](https://raya-portfolio-website.vercel.app/)**

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Image Hosting:** Cloudinary
- **Animations:** Custom scroll animations
- **Components:** shadcn/ui

## Features

- **Multiple Galleries:** Paintings, Experimental Works (with series), and Panorama Works
- **Responsive Design:** Mobile, tablet, and desktop layouts
- **Image Viewer:** Centered modal for viewing full-size artwork
- **Smooth Animations:** Fade-in, slide-in, and scroll-triggered animations
- **Fixed Navigation:** Sticky header with mobile menu support
- **Artist Profile:** Bio, skills, education, and exhibition history

## Project Structure

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout with navigation
├── paintings/page.tsx    # Paintings gallery
├── experimental/page.tsx # Experimental works index
├── experimental/[category]/page.tsx  # Individual experimental series
└── panorama/page.tsx     # Panorama works gallery

components/
├── gallery-grid.tsx      # Main gallery grid
├── gallery-grid-2.tsx    # Panorama layout variant
├── gallery-grid-3.tsx    # Experimental series layout
├── artwork-modal.tsx     # Full-size image viewer
└── ui/                   # shadcn components

lib/
└── artwork-data.ts       # Centralized artwork data
```

## Key Features

- **Ordered Galleries:** Images sort by explicit `order` field, then filename, for consistent display
- **Dynamic Routes:** Experimental works use dynamic routing for each series
- **Image Optimization:** Next.js Image component with Cloudinary URLs
- **Scroll Animations:** Components fade in/slide in as user scrolls
- **Mobile-Responsive:** Flexbox grid adapts from 1 → 2 → 3 columns

## Customization

### Add New Artwork

Edit `lib/artwork-data.ts`:

```ts
{
  id: "p-9",
  order: 9,
  title: "Your Artwork Title",
  path: "https://cloudinary-url.jpg",
  media: "Acrylic on Canvas",
  size: '24" × 30"',
  year: 2025,
}
```

### Add New Experimental Series

```ts
"your-series-slug": {
  title: "Series Title",
  description: "...",
  images: [
    { id: 1, order: 1, title: "Work 1", path: "..." },
  ],
  media: "Mixed Media",
  size: "Custom",
  year: 2025,
}
```

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or use any Node.js hosting (AWS, Railway, Render, etc.).
Note: Slow image loading on Render

---

Built with ❤️ using Next.js & React.
