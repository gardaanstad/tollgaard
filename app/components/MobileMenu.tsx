import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './MobileMenu.module.css'
import navStyles from './Navbar.module.css'
import langStyles from './LanguageSwitcher.module.css'
import { CrownIcon } from './CrownIcon'
import { Divider } from './Divider'
import { LanguageSwitcher } from './LanguageSwitcher'
import { routes } from '../lib/routes'

interface MobileMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  dict: {
    apartments: string
    location: string
    information: string
    bookRoom: string
  }
}

export function MobileMenu({ isMenuOpen, setIsMenuOpen, dict }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  const lang = isEnglish ? 'en' : 'no'
  const paths = routes[lang]

  const baseStyles: React.CSSProperties = {
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    position: 'fixed',
    top: 0,
    right: 0,
    width: '70%',
    height: '100vh',
    zIndex: 100
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.bodyOverlay)
    } else {
      document.body.classList.remove(styles.bodyOverlay)
    }
    
    return () => {
      document.body.classList.remove(styles.bodyOverlay)
    }
  }, [isMenuOpen])

  return (
    <>
      <Link href={isEnglish ? '/en' : '/'} className={navStyles.logo}>
        <CrownIcon />
      </Link>
      <div className={styles.menuControls}>
        <LanguageSwitcher 
          className={langStyles.mobileNavStyle} 
        />
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
      </div>
      <div 
        ref={menuRef}
        className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
        style={baseStyles}
      >
        <Link 
          href={paths.apartments}
          className={styles.navLink}
          onClick={() => setIsMenuOpen(false)}
        >
          {dict.apartments}
        </Link>
        <Divider />
        <Link 
          href={paths.location}
          className={styles.navLink}
          onClick={() => setIsMenuOpen(false)}
        >
          {dict.location}
        </Link>
        <Divider />
        <Link 
          href={paths.info}
          className={styles.navLink}
          onClick={() => setIsMenuOpen(false)}
        >
          {dict.information}
        </Link>
        <Divider />
        <Link 
          href={`https://www.booking.com/hotel/no/toldgaarden-gjestegaard.${lang}.html`}
          className={`${styles.navLink} ${styles.bookingLink}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
        >
          {dict.bookRoom}
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