interface TechTagProps {
  technology: string
  variant?: "default" | "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export default function TechTag({ technology, variant = "default", size = "sm" }: TechTagProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      case "secondary":
        return "bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-gray-600 hover:to-gray-500"
      default:
        return "bg-gray-700 text-gray-200 hover:bg-gray-600"
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case "lg":
        return "px-4 py-2 text-sm"
      case "md":
        return "px-3 py-1.5 text-sm"
      case "sm":
      default:
        return "px-2.5 py-0.5 text-xs"
    }
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-all duration-200 ${getVariantClass()} ${getSizeClass()}`}
    >
      {technology}
    </span>
  )
}
