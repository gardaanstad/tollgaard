'use client'
import { ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './AnimatedText.module.css'

interface AnimatedTextProps {
  children: ReactNode
  hoverText: string
}

export function AnimatedText({ children, hoverText }: AnimatedTextProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleMouseEnter = () => {
    if (!isHomePage) {
      setIsAnimating(true)
    }
  }

  return (
    <div 
      className={`${styles.container} ${isAnimating ? styles.animating : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsAnimating(false)}
    >
      <div className={styles.textWrapper}>
        <div className={styles.text}>{children}</div>
        <div className={styles.hoverText}>{hoverText}</div>
      </div>
    </div>
  )
} 