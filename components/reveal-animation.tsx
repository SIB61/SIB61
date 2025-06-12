'use client';

import type { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';
import { useIsMobile } from '@/hooks/use-mobile';

interface RevealAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function RevealAnimation({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  className = '',
}: RevealAnimationProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  const isMobile = useIsMobile()

  const fromOutside = isMobile && (direction == 'left' || direction == 'right')

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(60px)';
      case 'down':
        return 'translateY(-60px)';
      case 'left':
        return 'translateX(60px)';
      case 'right':
        return 'translateX(-60px)';
      case 'fade':
        return 'translateY(20px)';
      default:
        return 'translateY(60px)';
    }
  };

  if (!fromOutside) {
    return <div
      ref={ref}
      className={className}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translate(0)' : getInitialTransform(),
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={ref}
        className={className}
        style={{
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? 'translate(0)' : getInitialTransform(),
          transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
