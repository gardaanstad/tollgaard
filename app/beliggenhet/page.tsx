import styles from './page.module.css'

export default function Location() {
  return (
    <div className={styles.locationContainer}>
      <h1>Finn oss i Larvik</h1>
      
      <div className={styles.locationContent}>
        <div className={styles.locationInfo}>
          <section className={styles.infoSection}>
            <h2>Beliggenhet</h2>
            <p>
              Tollgaarden Gjestegaard ligger sentralt plassert på Tollerodden i Larvik, 
              med kort avstand til alle byens fasiliteter:
            </p>
            <ul>
              <li>3 minutter til barnevennlig badestrand</li>
              <li>Kort rusletur til Fritzøe Brygge</li>
              <li>200 meter til Larvik jernbanestasjon</li>
              <li>1 km til Color Line fergeterminal</li>
              <li>Larvik Sjøfartsmuseum rett over gaten</li>
            </ul>
          </section>

          <section className={styles.infoSection}>
            <h2>Transport</h2>
            <p>
              <strong>Fra Oslo:</strong> 2 timer med tog eller bil<br />
              <strong>Fra Torp Lufthavn:</strong> 30 minutter med bil<br />
              <strong>Fra København:</strong> Direkte ferge til Larvik
            </p>
          </section>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16415.523397105375!2d10.036539959296508!3d59.04970994863902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646e999c76c0e6d%3A0x1b3e753d2a1172f4!2sToldgaarden%20Gjestegaard!5e0!3m2!1sen!2sno!4v1731706638192!5m2!1sen!2sno"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
} 