import styles from "./page.module.css";

export default function InfoPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Praktisk informasjon</h1>
            <p>Alt du trenger å vite om ditt opphold hos oss</p>
          </div>

          <div className={styles.infoSection}>
            <h2>Innsjekking og utsjekking</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                  </svg>
                </div>
                <div>
                  <h3>Innsjekking</h3>
                  <p>Fra 15:00 til 22:00</p>
                  <small>Kontakt oss for sen innsjekking</small>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.5 7H11v6l5.2 3.2.8-1.3-4.5-2.7V7zm-.5-5C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                  </svg>
                </div>
                <div>
                  <h3>Utsjekking</h3>
                  <p>Fra 05:00 til 11:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h2>Fasiliteter</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
                  </svg>
                </div>
                <div>
                  <h3>Parkering</h3>
                  <p>Gratis parkering på eiendommen</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                  </svg>
                </div>
                <div>
                  <h3>Internett</h3>
                  <p>Gratis WiFi i alle rom</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>
                  </svg>
                </div>
                <div>
                  <h3>Kjøkken</h3>
                  <p>Fullt utstyrt kjøkken</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.infoSection}>
            <h2>Betaling</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <div>
                  <h3>Betal når du kommer</h3>
                  <p>Vi tar alle typer kort, Vipps og kontanter</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <div>
                  <h3>Betal på forhånd</h3>
                  <p>Du kan betale på forhånd når du bestiller på Booking.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
