"use client"

import React from "react"

interface StaggeredListProps {
  children: React.ReactNode
  staggerDelay?: number
}

export function StaggeredList({ children, staggerDelay = 100 }: StaggeredListProps) {
  const childArray = React.Children.toArray(children)

  return (
    <>
      {childArray.map((child, index) => (
        <div
          key={index}
          style={{
            animation: `fadeInUp 0.6s ease-out ${index * staggerDelay}ms both`,
          }}
        >
          {child}
        </div>
      ))}
    </>
  )
}
