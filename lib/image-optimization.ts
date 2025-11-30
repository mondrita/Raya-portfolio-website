/**
 * Image Optimization Utilities
 * Handles WebP conversion, thumbnail generation, and lazy loading strategies
 */

export interface ImageOptimizationConfig {
  enableWebP: boolean
  generateThumbnails: boolean
  thumbnailSizes: number[]
  quality: number
  format: "auto" | "webp" | "jpeg"
}

export const DEFAULT_IMAGE_CONFIG: ImageOptimizationConfig = {
  enableWebP: true,
  generateThumbnails: true,
  thumbnailSizes: [640, 1024, 1280],
  quality: 80,
  format: "auto",
}

/**
 * Generate srcset for responsive images with multiple sizes
 */
export function generateSrcSet(baseSrc: string, sizes: number[] = DEFAULT_IMAGE_CONFIG.thumbnailSizes): string {
  return sizes.map((size) => `${baseSrc}?w=${size}&q=80 ${size}w`).join(", ")
}

/**
 * Get optimized image URL with format conversion
 */
export function getOptimizedImageUrl(
  src: string,
  {
    width,
    height,
    quality = 80,
    format = "auto",
  }: {
    width?: number
    height?: number
    quality?: number
    format?: "auto" | "webp" | "jpeg"
  } = {},
): string {
  const params = new URLSearchParams()

  if (width) params.append("w", width.toString())
  if (height) params.append("h", height.toString())
  if (quality) params.append("q", quality.toString())
  if (format !== "auto") params.append("f", format)

  const separator = src.includes("?") ? "&" : "?"
  return `${src}${separator}${params.toString()}`
}

/**
 * Get thumbnail URL for preview/placeholder
 */
export function getThumbnailUrl(src: string, size = 200): string {
  return getOptimizedImageUrl(src, {
    width: size,
    height: size,
    quality: 60,
    format: "webp",
  })
}

/**
 * Image loading strategy for galleries
 */
export const IMAGE_LOADING_STRATEGY = {
  eager: ["0", "1"], // First two images load immediately
  lazy: "scrolling", // Rest load on scroll
  fadeInDuration: 500, // Smooth fade-in animation
}
