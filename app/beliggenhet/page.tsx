import styles from './page.module.css'
import { BookingButton } from '../components/BookingButton'

export default function Location() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Finn oss i Larvik</h1>
              <p>
                Tollgaarden ligger sentralt plassert på Tollerodden i Larvik.
                Innen 5 minutters gange finner du en barnevennlig badestrand, Fritzøe Brygge, 
                Bølgen kino og kulturhus, et titalls restauranter og kaféer, og Larvik jernbanestasjon. 
                Du finner også Larvik Sjøfartsmuseum og Herregården rett over gata.
              </p>
              <div className={styles.transportInfo}>
                <h2>Transport</h2>
                <ul>
                  <li><strong>5 minutter</strong> med bil unna fergeterminalen</li>
                  <li><strong>30 minutter</strong> med tog eller bil fra Torp Lufthavn</li>
                  <li><strong>2 timer</strong> med tog eller bil fra Oslo S</li>
                </ul>
                <BookingButton 
                  href="https://www.google.com/maps/dir/?api=1&destination=Toldgaarden+Gjestegaard+Larvik"
                  className={styles.directionsButton}
                >
                  Få veibeskrivelse
                </BookingButton>
              </div>
            </div>
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