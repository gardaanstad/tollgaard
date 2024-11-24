import { headers } from 'next/headers'
import styles from './page.module.css'
import { SecondaryButton } from '../components/SecondaryButton'
import { Divider } from '../components/Divider'
import { NewTabIcon } from '../components/icons'
import { locationDictionary } from '../dictionaries'

export default async function Location() {
  const headersList = await headers()
  const lang = (headersList.get('x-lang') || 'no') as 'en' | 'no'
  const dict = locationDictionary[lang]

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.leftContent}>
              <div className={styles.heroText}>
                <h1>{dict.title}</h1>
                <p>{dict.description}</p>
              </div>
              <Divider mode="mobile" />
              <div className={styles.transportInfo}>
                <h2>{dict.transport.title}</h2>
                <ul>
                  {dict.transport.items.map((item, index) => (
                    <li key={index}>
                      <strong>{item.duration}</strong> {item.description}
                    </li>
                  ))}
                </ul>
                <SecondaryButton 
                  href="https://www.google.com/maps/dir/?api=1&destination=Toldgaarden+Gjestegaard+Larvik"
                  className={styles.directionsButton}
                  icon={<NewTabIcon />}
                  >
                    {dict.getDirections}
                  </SecondaryButton>
              </div>
            </div>
            <Divider mode="mobile" />
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16415.523397105375!2d10.036539959296508!3d59.04970994863902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646e999c76c0e6d%3A0x1b3e753d2a1172f4!2sToldgaarden%20Gjestegaard!5e0!3m2!1sen!2sno!4v1731706638192!5m2!1sen!2sno"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 