'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'
import mobileStyles from './MobileMenu.module.css'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

// Default to mobile if screen width is likely to be mobile
const DEFAULT_IS_MOBILE = true

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(DEFAULT_IS_MOBILE)
  const pathname = usePathname()

  useEffect(() => {
    // Update mobile state immediately on mount
    setIsMobile(window.innerWidth <= 768)
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest(`.${mobileStyles.navLinks}, .${mobileStyles.hamburger}`)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {isMobile ? (
          <MobileMenu 
            pathname={pathname}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        ) : (
          <DesktopMenu pathname={pathname} />
        )}
      </nav>
    </header>
  )
} 