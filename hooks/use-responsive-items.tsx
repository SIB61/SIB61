"use client"

import { useState, useEffect } from "react"

interface UseResponsiveItemsProps {
  mobileCount: number
  desktopCount: number
  breakpoint?: number
}

export function useResponsiveItems({ mobileCount, desktopCount, breakpoint = 768 }: UseResponsiveItemsProps) {
  const [itemCount, setItemCount] = useState(desktopCount)

  useEffect(() => {
    const handleResize = () => {
      setItemCount(window.innerWidth < breakpoint ? mobileCount : desktopCount)
    }

    // Set initial value
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileCount, desktopCount, breakpoint])

  return itemCount
}
