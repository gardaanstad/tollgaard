import { useRef } from 'react'
import Link from 'next/link'
import styles from './MobileMenu.module.css'
import navStyles from './Navbar.module.css'
import { CrownIcon } from './CrownIcon'
import { MobileDivider } from './MobileDivider'

interface MobileMenuProps {
  pathname: string
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export function MobileMenu({ pathname, isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Link href="/" className={navStyles.logo}>
        <CrownIcon />
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
          Leiligheter
        </Link>
        <MobileDivider />
        <Link 
          href="/beliggenhet" 
          className={`${styles.navLink} ${pathname === '/beliggenhet' ? styles.activeLink : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Beliggenhet
        </Link>
        <MobileDivider />
        <Link 
          href="/info" 
          className={`${styles.navLink} ${pathname === '/info' ? styles.activeLink : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Informasjon
        </Link>
        <MobileDivider />
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
      </div>
    </>
  )
} 