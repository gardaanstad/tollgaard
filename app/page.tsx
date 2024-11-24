import { Suspense } from 'react'
import { headers } from 'next/headers'
import styles from "./page.module.css";
import ClientImageCarousel from './components/ClientImageCarousel';
import { FeatureLink } from './components/FeatureLink'
import { ReviewScore } from './components/ReviewScore'
import { PrimaryButton } from './components/PrimaryButton'
import { NewTabIcon } from './components/icons'
import { Divider } from "./components/Divider";
import { homeDictionary } from './dictionaries'

// Add metadata
export const metadata = {
  title: 'Tollgaarden Gjestegaard',
  description: 'Sentrale leiligheter i Larvik',
}

export default async function Home() {
  const headersList = await headers()
  const lang = (headersList.get('x-lang') || 'no') as 'en' | 'no'
  const dict = homeDictionary[lang]
  
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
              <Suspense fallback={<div className={styles.imagePlaceholder} />}>
                <ClientImageCarousel />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
