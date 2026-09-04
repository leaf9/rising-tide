import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealTag = 'div' | 'section' | 'p' | 'h1' | 'h2' | 'h3' | 'blockquote'

/**
 * Scroll-reveal wrapper. Adds `.in` once the element enters the viewport.
 * `soak` swaps the fade-up for the slower blur-in used by imagery.
 * Honors prefers-reduced-motion by revealing immediately.
 */
export function Reveal({
  children,
  soak = false,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children?: ReactNode
  soak?: boolean
  delay?: number
  as?: RevealTag
  className?: string
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true)
            io.disconnect()
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn(soak ? 'soak' : 'rv', seen && 'in', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export default Reveal
