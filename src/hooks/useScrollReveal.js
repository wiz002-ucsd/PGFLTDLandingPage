import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the section ref itself if it has the class
            if (entry.target.classList.contains('animate-on-scroll')) {
              entry.target.classList.add('visible')
            }
            // Animate all children with the class
            const children = entry.target.querySelectorAll('.animate-on-scroll')
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('visible')
              }, i * 80)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
