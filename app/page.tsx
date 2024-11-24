import React from 'react'
import { headers } from 'next/headers'
import styles from "./page.module.css";
import ClientImageCarousel from './components/ClientImageCarousel';
import { FeatureLink } from './components/FeatureLink'
import { ReviewScore } from './components/ReviewScore'
import { PrimaryButton } from './components/PrimaryButton'
import { NewTabIcon } from './components/icons'
import { Divider } from "./components/Divider";

const dictionary = {
  no: {
    title: 'Velkommen til',
    subtitle: 'Tollgaarden Gjestegaard',
    description: 'Opplev historiske Larvik i våre komfortable leiligheter, sentralt plassert med gratis parkering.',
    bookRoom: 'Reserver rom',
    reviews: {
      booking: {
        score: '8.7 - Utmerket',
        label: 'på Booking.com'
      },
      expedia: {
        score: '9.4 - Suverent',
        label: 'på Expedia.no'
      }
    },
    links: {
      apartments: 'Se leilighetene våre',
      location: 'Les mer om beliggenheten',
      info: 'Praktisk informasjon'
    }
  },
  en: {
    title: 'Welcome to',
    subtitle: 'Tollgaarden Gjestegaard',
    description: 'Experience historic Larvik in our comfortable apartments, centrally located with free parking.',
    bookRoom: 'Book room',
    reviews: {
      booking: {
        score: '8.7 - Excellent',
        label: 'on Booking.com'
      },
      expedia: {
        score: '9.4 - Superb',
        label: 'on Expedia.com'
      }
    },
    links: {
      apartments: 'See our apartments',
      location: 'Read about the location',
      info: 'Practical information'
    }
  }
}

export default async function Home() {
  const headersList = await headers()
  const lang = (headersList.get('x-lang') || 'no') as 'en' | 'no'
  const dict = dictionary[lang]
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>{dict.title}<br/>{dict.subtitle}</h1>
              <p>{dict.description}</p>
              <div className={styles.reviewsContent}>
                <ReviewScore
                  score={dict.reviews.booking.score}
                  label={dict.reviews.booking.label}
                  href={`https://www.booking.com/hotel/no/toldgaarden-gjestegaard.${lang}.html#tab-reviews`}
                />
                <ReviewScore
                  score={dict.reviews.expedia.score}
                  label={dict.reviews.expedia.label}
                  href={`https://www.expedia.no/Larvik-Hoteller-Toldgaarden-Gjestegaard.h12956936.Hotellinformasjon?pwaDialog=summary-reviews-property-summary-1`}
                />
              </div>
            </div>
            
            <div className={styles.heroActions}>
              <PrimaryButton 
                href={`https://www.booking.com/hotel/no/toldgaarden-gjestegaard.${lang}.html#availability_target`}
                aria-label={dict.bookRoom}
                icon={<NewTabIcon />}
              >
                {dict.bookRoom}
              </PrimaryButton>
              
              <Divider className={styles.divider} />
              
              <div className={styles.featureLinks}>
              
                <FeatureLink href={lang === 'en' 
                    ? "/en/apartments"
                    : "/leiligheter"
                  }
                >
                  {dict.links.apartments}
                </FeatureLink>
                <FeatureLink href={lang === 'en' 
                    ? "/en/beliggenhet"
                    : "/beliggenhet"
                  }
                >
                  {dict.links.location}
                </FeatureLink>
                <FeatureLink href={lang === 'en' 
                    ? "/en/info"
                    : "/info"
                  }
                >
                  {dict.links.info}
                </FeatureLink>
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
