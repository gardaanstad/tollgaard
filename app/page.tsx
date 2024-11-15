import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ImageCarousel from './components/ImageCarousel';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Velkommen til<br />Tollgaarden Gjestegaard</h1>
              <p>
                Opplev historiske Larvik i våre komfortable leiligheter, 
                sentralt plassert ved sjøen og byens attraksjoner.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <ImageCarousel />
            </div>
            <div className={styles.heroActions}>
              <div className={styles.reviewsContent}>
                <a 
                  href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html#tab-reviews" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.scoreLink}
                >
                  <span className={styles.scoreNumber}>8.7 - Utmerket</span>
                  <span className={styles.scoreLabel}>på Booking.com</span>
                </a>
                <a 
                  href="https://www.expedia.no/Larvik-Hoteller-Toldgaarden-Gjestegaard.h12956936.Hotellinformasjon?pwaDialog=summary-reviews-property-summary-1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.scoreLink}
                >
                  <span className={styles.scoreNumber}>9.4 - Suverent</span>
                  <span className={styles.scoreLabel}>på Expedia.no</span>
                </a>
              </div>
              <a 
                href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.featureLink}
              >
                Reserver rom på Booking.com
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 12H19M19 12L12 5M19 12L12 19" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.infoSections}>
          <div className={styles.infoSection}>
            <h2>Beliggenhet</h2>
            <p>
              Tollgaarden Gjestegaard ligger sentralt plassert på Tollerodden i Larvik, 
              med kort avstand til alle byens fasiliteter. Kun 200 meter til Larvik 
              jernbanestasjon, og 5 minutter med bil til fergen.
            </p>
            <Link href="/beliggenhet" className={styles.infoLink}>
              Les mer om beliggenheten
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className={styles.infoSection}>
            <h2>Våre Rom</h2>
            <p>
              Vi tilbyr komfortable leiligheter i forskjellige størrelser, fra koselige 
              ettromsleiligheter til romslige leiligheter med balkong. Alle våre rom er 
              utstyrt med moderne fasiliteter og har en perfekt blanding av historisk 
              sjarm og moderne komfort.
            </p>
            <Link href="/rom" className={styles.infoLink}>
              Se alle våre rom
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
