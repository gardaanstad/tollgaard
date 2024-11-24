import Link from 'next/link'
import { SecondaryButton } from './SecondaryButton'
import styles from './DesktopMenu.module.css'
import navStyles from './Navbar.module.css'
import { CrownIcon } from './CrownIcon'
import { NewTabIcon } from './icons'
import { LanguageSwitcher } from './LanguageSwitcher'
import { usePathname } from 'next/navigation'
import { routes } from '../lib/routes'

interface DesktopMenuProps {
  dict: {
    apartments: string;
    location: string;
    information: string;
    bookRoom: string;
  };
}

export function DesktopMenu({ dict }: DesktopMenuProps) {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  const lang = isEnglish ? 'en' : 'no'
  const paths = routes[lang]

  const isActivePath = (path: string) => {
    return pathname === path
  }

  return (
    <>
      <Link href={isEnglish ? '/en' : '/'} className={navStyles.logo}>
        <CrownIcon />
        <h1>Tollgaarden</h1>
      </Link>
      <div className={styles.navLinks}>
        <Link 
          href={paths.apartments}
          className={`${styles.navLink} ${isActivePath(paths.apartments) ? styles.activeLink : ''}`}
        >
          {dict.apartments}
        </Link>
        <Link 
          href={paths.location}
          className={`${styles.navLink} ${isActivePath(paths.location) ? styles.activeLink : ''}`}
        >
          {dict.location}
        </Link>
        <Link 
          href={paths.info}
          className={`${styles.navLink} ${isActivePath(paths.info) ? styles.activeLink : ''}`}
        >
          {dict.information}
        </Link>
        <LanguageSwitcher />
        <SecondaryButton 
          href={`https://www.booking.com/hotel/no/toldgaarden-gjestegaard.${lang}.html`}
          icon={<NewTabIcon />}
          className={styles.bookButton}
        >
          {dict.bookRoom}
        </SecondaryButton>
      </div>
    </>
  )
} 