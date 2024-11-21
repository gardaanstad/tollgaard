import Link from 'next/link'
import { BookingButton } from './BookingButton'
import styles from './DesktopMenu.module.css'
import navStyles from './Navbar.module.css'
import { AnimatedText } from './AnimatedText'
import { CrownIcon } from './CrownIcon'

interface DesktopMenuProps {
  pathname: string
}

export function DesktopMenu({ pathname }: DesktopMenuProps) {
  return (
    <>
      <Link href="/" className={navStyles.logo}>
        <CrownIcon />
        <AnimatedText hoverText="Gå tilbake">
          Tollgaarden
        </AnimatedText>
      </Link>
      <div className={styles.navLinks}>
        <Link 
          href="/rom" 
          className={`${styles.navLink} ${pathname === '/rom' ? styles.activeLink : ''}`}
        >
          Leiligheter
        </Link>
        <Link 
          href="/beliggenhet" 
          className={`${styles.navLink} ${pathname === '/beliggenhet' ? styles.activeLink : ''}`}
        >
          Beliggenhet
        </Link>
        <Link 
          href="/info" 
          className={`${styles.navLink} ${pathname === '/info' ? styles.activeLink : ''}`}
        >
          Informasjon
        </Link>
        <BookingButton 
          href="https://www.booking.com/hotel/no/tollgaarden.no.html"
          className={styles.bookingLink}
        >
          Reserver rom
        </BookingButton>
      </div>
    </>
  )
} 