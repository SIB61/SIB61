"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const mousePosition = useRef({ x: 0, y: 0 })
  const trailingPosition = useRef({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const trailRef = useRef<HTMLDivElement | null>(null)
  const midRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)

  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
      showCursor()
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      showCursor()

      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY }
      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 600)
    }

    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: MouseEvent) => {
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

    const showCursor = () => {
      setIsVisible(true)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      idleTimerRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const target = mousePosition.current
      const trail = trailingPosition.current

      // Lerp movement for trailing cursor
      trail.x += (target.x - trail.x) * 0.1
      trail.y += (target.y - trail.y) * 0.1

      // Main cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${target.x - 6}px, ${target.y - 6}px) scale(${
          isClicking ? 1.5 : 1
        })`
      }

      // Trailing cursor
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.x - 16}px, ${trail.y - 16}px) scale(${
          isHovering ? 1.5 : 1
        })`
      }

      // Mid ring
      if (midRef.current) {
        const midX = target.x + (trail.x - target.x) * 0.5 - 12
        const midY = target.y + (trail.y - target.y) * 0.5 - 12
        midRef.current.style.transform = `translate(${midX}px, ${midY}px) scale(${isHovering ? 1.3 : 1})`
      }

      // Hover glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${target.x - 20}px, ${target.y - 20}px)`
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [isClicking, isHovering])


  const visibility = isVisible? 'visible':'hidden'
  const hoverGlowVisibility = isVisible && isHovering ?  'visible':'hidden'
  return (
    <>
      {/* Trailing circle */}
      <div
        ref={trailRef}
        className={`${visibility} fixed custom-cursor top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out`}
      >
        <div
          className={`w-8 h-8 border rounded-full ${
            isHovering ? "border-purple-400/40 bg-purple-400/10" : "border-blue-400/40"
          } transition-all duration-300`}
        />
      </div>

      {/* Main dot */}
      <div
        ref={cursorRef}
        className={`${visibility} fixed top-0 left-0 custom-cursor pointer-events-none z-[9999] transition-all duration-100 ease-out`}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            isClicking ? "bg-white" : isHovering ? "bg-purple-400" : "bg-blue-400"
          }`}
        />
      </div>

      {/* Mid ring */}
      <div
        ref={midRef}
        className={`${visibility} fixed top-0 left-0 custom-cursor pointer-events-none z-[9997] transition-all duration-200 ease-out`}
      >
        <div
          className={`w-6 h-6 border-2 rounded-full transition-all duration-300 ${
            isHovering ? "border-purple-400/60" : "border-blue-400/60"
          }`}
        />
      </div>

      {/* Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9996]"
          style={{ left: ripple.x - 6, top: ripple.y - 6 }}
        >
          <div className="w-3 h-3 border-2 border-blue-400/60 rounded-full cursor-ripple" />
        </div>
      ))}

      {/* Glow */}
        <div
          ref={glowRef}
          className={`${hoverGlowVisibility} fixed top-0 custom-cursor left-0 pointer-events-none z-[9995] transition-all duration-300`}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-lg" />
        </div>
    </>
  )
}

