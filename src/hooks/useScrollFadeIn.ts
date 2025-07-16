import { useRef, useEffect } from 'react'

export function useScrollFadeIn(className: string) {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (ref.current) {
                    if (entry.isIntersecting) {
                        ref.current.classList.add('visible');
                    } else {
                        ref.current.classList.remove('visible');
                    }
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return { ref, className: `fade-init ${className}` }
}
