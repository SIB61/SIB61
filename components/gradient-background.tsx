import type React from "react"
interface GradientBackgroundProps {
  variant?: "hero" | "section" | "card" | "accent"
  className?: string
  children?: React.ReactNode
}

export default function GradientBackground({ variant = "section", className = "", children }: GradientBackgroundProps) {
  const getGradientClass = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"
      case "section":
        return "bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-800/50"
      case "card":
        return "bg-gradient-to-br from-gray-800 via-gray-800 to-gray-700"
      case "accent":
        return "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
      default:
        return "bg-gray-800"
    }
  }

  return <div className={`${getGradientClass()} ${className}`}>{children}</div>
}
