import styles from "./page.module.css";
import ImageCarousel from './components/ImageCarousel';
import { FeatureLink } from './components/FeatureLink'
import { ReviewScore } from './components/ReviewScore'
import { BookingButton } from './components/BookingButton'

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
                sentralt plassert og med gratis parkering.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <ImageCarousel />
            </div>
            <div className={styles.heroActions}>
              <div className={styles.reviewsContent}>
                <ReviewScore
                  score="8.7 - Utmerket"
                  label="på Booking.com"
                  href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html#tab-reviews"
                />
                <ReviewScore
                  score="9.4 - Suverent"
                  label="på Expedia.no"
                  href="https://www.expedia.no/Larvik-Hoteller-Toldgaarden-Gjestegaard.h12956936.Hotellinformasjon?pwaDialog=summary-reviews-property-summary-1"
                />
              </div>
              <BookingButton 
                href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html#availability_target"
                className={styles.heroBookingButton}
              >
                Reserver rom
              </BookingButton>
              <div className={styles.featureLinks}>
                <FeatureLink href="/beliggenhet">Les mer om beliggenheten</FeatureLink>
                <FeatureLink href="/rom">Se rommene våre</FeatureLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
