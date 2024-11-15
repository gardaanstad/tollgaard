'use client'
import './globals.css'
import styles from './layout.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { CrownIcon } from './components/CrownIcon'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  return (
    <html lang="no">
      <head>
        <title>Tollgaarden Gjestegaard - Historic Hotel in Larvik</title>
        <meta name="description" content="Experience historic Larvik at Tollgaarden Gjestegaard, a boutique hotel offering comfortable rooms and authentic Norwegian hospitality." />
      </head>
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <Link href="/" className={styles.logo}>
                <CrownIcon />
                <span>Tollgaarden</span>
              </Link>
              <button 
                className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                <Link href="/rom" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                  Rom
                </Link>
                <Link href="/beliggenhet" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                  Beliggenhet
                </Link>
                <a 
                  href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html#availability_target" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.navLink} ${styles.bookingLink}`}
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
                </a>
              </div>
            </nav>
          </header>

          <main className={styles.main}>
            {children}
          </main>

          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.footerSection}>
                <h4>Kontakt</h4>
                <p>Email: post@tollgaarden.no</p>
                <p>Telefon: +47 123 45 678</p>
              </div>
              <div className={styles.footerSection}>
                <h4>Adresse</h4>
                <p>Kirkestredet 12</p>
                <p>3263 Larvik</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
