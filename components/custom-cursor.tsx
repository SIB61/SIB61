"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { useEffect, useState, useRef } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameRef = useRef<number|null>(null)

  // Smooth trailing animation for outer circle
  useEffect(() => {
    const animateTrailing = () => {
      setTrailingPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1, // Slower following with 0.1 lerp
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }))
      animationFrameRef.current = requestAnimationFrame(animateTrailing)
    }

    if (isVisible) {
      animationFrameRef.current = requestAnimationFrame(animateTrailing)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition, isVisible])

  useEffect(() => {
    const showCursor = () => {
      setIsVisible(true)
      // Clear existing timer
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
      // Set new timer to hide cursor after 2 seconds of inactivity
      idleTimerRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      showCursor()
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      showCursor()

      // Create ripple effect at exact cursor position
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY }
      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 600)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
      showCursor()
    }

    const handleMouseEnter = (e: MouseEvent) => {
      showCursor()
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      showCursor()
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(false)
      }
    }

    const handleActivity = () => {
      showCursor()
    }

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("keydown", handleActivity)
    window.addEventListener("scroll", handleActivity)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("keydown", handleActivity)
      window.removeEventListener("scroll", handleActivity)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Trailing Outer Circle - Slower following */}
      <div
        className="fixed top-0 left-0 custom-cursor pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${trailingPosition.x - 16}px, ${trailingPosition.y - 16}px) ${
            isHovering ? "scale(1.5)" : "scale(1)"
          }`,
        }}
      >
        <div
          className={`w-8 h-8 border border-blue-400/40 rounded-full transition-all duration-300 ${
            isHovering ? "border-purple-400/40 bg-purple-400/10" : "border-blue-400/40"
          }`}
        />
      </div>

      {/* Main Cursor Dot - Exact mouse position */}
      <div
        className="fixed top-0 left-0 custom-cursor pointer-events-none z-[9999] transition-all duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px) ${
            isClicking ? "scale(1.5)" : "scale(1)"
          }`,
        }}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            isHovering ? "bg-purple-400" : "bg-blue-400"
          } ${isClicking ? "bg-white" : ""}`}
        />
      </div>

      {/* Inner Ring - Medium following speed */}
      <div
        className="fixed custom-cursor top-0 left-0 pointer-events-none z-[9997] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${
            mousePosition.x + (trailingPosition.x - mousePosition.x) * 0.5 - 12
          }px, ${mousePosition.y + (trailingPosition.y - mousePosition.y) * 0.5 - 12}px) ${
            isHovering ? "scale(1.3)" : "scale(1)"
          }`,
        }}
      >
        <div
          className={`w-6 h-6 border-2 rounded-full transition-all duration-300 ${
            isHovering ? "border-purple-400/60" : "border-blue-400/60"
          }`}
        />
      </div>

      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: ripple.x - 6,
            top: ripple.y - 6,
          }}
        >
          <div className="w-3 h-3 border-2 border-blue-400/60 rounded-full cursor-ripple" />
        </div>
      ))}

      {/* Hover Glow Effect */}
      {isHovering && (
        <div
          className="fixed custom-cursor top-0 left-0 pointer-events-none z-[9995] transition-all duration-300"
          style={{
            transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-lg" />
        </div>
      )}
    </>
  )
}
