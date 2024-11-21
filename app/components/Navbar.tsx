'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { CrownIcon } from './CrownIcon'
import styles from './Navbar.module.css'
import { BookingButton } from './BookingButton'
import { AnimatedText } from './AnimatedText'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const showText = isMobile !== null && !isMobile

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <CrownIcon />
          {showText && (
            <AnimatedText hoverText="Gå tilbake">
              Tollgaarden
            </AnimatedText>
          )}
        </Link>
        <button 
          ref={buttonRef}
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div 
          ref={menuRef}
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
        >
          <Link 
            href="/rom" 
            className={`${styles.navLink} ${pathname === '/rom' ? styles.activeLink : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Rom
          </Link>
          <Link 
            href="/beliggenhet" 
            className={`${styles.navLink} ${pathname === '/beliggenhet' ? styles.activeLink : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Beliggenhet
          </Link>
          <Link 
            href="/info" 
            className={`${styles.navLink} ${pathname === '/info' ? styles.activeLink : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Informasjon
          </Link>
          {isMobile ? (
            <Link 
              href="https://www.booking.com/hotel/no/tollgaarden.no.html" 
              className={`${styles.navLink} ${styles.bookingLink}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserver rom
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={styles.newTabIcon}
              >
                <path 
                  d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ) : (
            <BookingButton 
              href="https://www.booking.com/hotel/no/tollgaarden.no.html"
              className={styles.bookingLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Reserver rom
            </BookingButton>
          )}
        </div>
      </nav>
    </header>
  )
} 