import styles from "./page.module.css";
import ClientImageCarousel from './components/ClientImageCarousel';
import { FeatureLink } from './components/FeatureLink'
import { ReviewScore } from './components/ReviewScore'
import { PrimaryButton } from './components/PrimaryButton'
import { NewTabIcon } from './components/icons'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Velkommen til<br></br>Tollgaarden Gjestegaard</h1>
              <p>
                Opplev historiske Larvik i våre komfortable leiligheter,
                sentralt plassert med gratis parkering.
              </p>
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
            </div>
            
            <div className={styles.heroActions}>
              <PrimaryButton 
                href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html#availability_target"
                aria-label="Reserver rom"
                icon={<NewTabIcon />}
              >
                Reserver rom
              </PrimaryButton>
              
              <div className={styles.featureLinks}>
                <FeatureLink href="/rom">Se leilighetene våre</FeatureLink>
                <FeatureLink href="/beliggenhet">Les mer om beliggenheten</FeatureLink>
                <FeatureLink href="/info">Praktisk informasjon</FeatureLink>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <ClientImageCarousel />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
