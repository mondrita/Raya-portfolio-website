"use client"

interface LoadingSkeletonProps {
  width?: string
  height?: string
  count?: number
  circle?: boolean
}

export function LoadingSkeleton({ width = "w-full", height = "h-4", count = 3, circle = false }: LoadingSkeletonProps) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`${width} ${height} bg-muted rounded ${circle ? "rounded-full" : ""} animate-shimmer`}
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--color-muted)) 0%, hsl(var(--color-muted) / 0.5) 50%, hsl(var(--color-muted)) 100%)",
            backgroundSize: "1000px 100%",
            animation: "shimmer 2s infinite",
          }}
        />
      ))}
    </div>
  )
}
