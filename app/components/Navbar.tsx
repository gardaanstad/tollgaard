'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'
import mobileStyles from './MobileMenu.module.css'
import langStyles from './LanguageSwitcher.module.css'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

const dictionary = {
  no: {
    apartments: 'Leiligheter',
    location: 'Beliggenhet',
    information: 'Informasjon',
    bookRoom: 'Reserver rom'
  },
  en: {
    apartments: 'Apartments',
    location: 'Location',
    information: 'Information',
    bookRoom: 'Book room'
  }
}

// Default to mobile if screen width is likely to be mobile
const DEFAULT_IS_MOBILE = true

export function Navbar() {
  // Initialize state from localStorage if available
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mobileMenuOpen')
      return saved === 'true'
    }
    return false
  })
  const [isMobile, setIsMobile] = useState(DEFAULT_IS_MOBILE)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  const lang = isEnglish ? 'en' : 'no'
  const dict = dictionary[lang]

  // Save menu state whenever it changes
  useEffect(() => {
    localStorage.setItem('mobileMenuOpen', isMenuOpen.toString())
  }, [isMenuOpen])

  useEffect(() => {
    // Update mobile state immediately on mount
    setIsMobile(window.innerWidth <= 1024)
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (target.closest(`.${langStyles.languageSwitch}`)) {
        return
      }
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
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            dict={dict}
          />
        ) : (
          <DesktopMenu dict={dict} />
        )}
      </nav>
    </header>
  )
} 