import { headers } from 'next/headers'
import styles from "./page.module.css";
import { infoDictionary } from '../dictionaries'

export const metadata = {
  title: 'Informasjon | Tollgaarden Gjestegaard',
  description: 'Praktisk informasjon om Tollgaarden Gjestegaard'
}


export default async function InfoPage() {
  const headersList = await headers()
  const lang = (headersList.get('x-lang') || 'no') as 'en' | 'no'
  const dict = infoDictionary[lang]

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>{dict.title}</h1>
            <p>{dict.subtitle}</p>
          </div>

          <div className={styles.infoContainer}>
            {/* Check-in/out Column */}
            <div className={styles.infoSection}>
              <h2>{dict.checkInOut.title}</h2>
              <div className={styles.infoColumn}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{dict.checkInOut.checkIn.title}</h3>
                    <p>{dict.checkInOut.checkIn.time}</p>
                    <small>{dict.checkInOut.checkIn.note}</small>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.5 7H11v6l5.2 3.2.8-1.3-4.5-2.7V7zm-.5-5C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{dict.checkInOut.checkOut.title}</h3>
                    <p>{dict.checkInOut.checkOut.time}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities Column */}
            <div className={styles.infoSection}>
              <h2>{dict.facilities.title}</h2>
              <div className={styles.infoColumn}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{dict.facilities.parking.title}</h3>
                    <p>{dict.facilities.parking.description}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{dict.facilities.internet.title}</h3>
                    <p>{dict.facilities.internet.description}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{dict.facilities.kitchen.title}</h3>
                    <p>{dict.facilities.kitchen.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Column */}
            <div className={styles.infoSection}>
              <h2>{dict.payment.title}</h2>
              <div className={styles.infoColumn}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{dict.payment.onArrival.title}</h3>
                    <p>{dict.payment.onArrival.description}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{dict.payment.advance.title}</h3>
                    <p>{dict.payment.advance.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
