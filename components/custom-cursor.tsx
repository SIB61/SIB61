'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Create ripple effect at exact cursor center position
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(false);
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out`}
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) ${
            isHovering ? 'scale(1.5)' : 'scale(1)'
          } ${isClicking ? 'scale(0.75)' : 'scale(1)'}`,
        }}
      >
        {/* Outer Ring */}
        <div
          className={`w-6 h-6 border-2 rounded-full transition-all duration-300 ${
            isHovering
              ? 'border-purple-400 bg-purple-400/20'
              : 'border-blue-400'
          } ${isClicking ? 'bg-blue-400/30 border-blue-500' : ''} cursor-pulse`}
        />

        {/* Inner Dot */}
        <div
          className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isHovering ? 'bg-purple-400 scale-150' : 'bg-blue-400'
          } ${isClicking ? 'bg-white scale-200' : ''}`}
        />

        {/* Trailing Effect */}
        <div
          className={`absolute top-1/2 left-1/2 w-8 h-8 border border-blue-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
            isHovering ? 'scale-200 border-purple-400/30' : 'scale-100'
          }`}
        />
      </div>

      {/* Click Ripples - Perfectly centered on cursor */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: ripple.x - 12, // Offset by half of cursor width (24px / 2 = 12px)
            top: ripple.y - 12, // Offset by half of cursor height (24px / 2 = 12px)
          }}
        >
          <div className="w-6 h-6 border-2 border-blue-400/60 rounded-full cursor-ripple" />
        </div>
      ))}

      {/* Hover Glow Effect */}
      {isHovering && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9997] transition-all duration-300"
          style={{
            transform: `translate(${mousePosition.x - 30}px, ${mousePosition.y - 30}px)`,
          }}
        >
          <div className="w-15 h-15 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-xl" />
        </div>
      )}
    </>
  );
}
