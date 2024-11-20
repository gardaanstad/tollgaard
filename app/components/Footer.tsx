import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Kontakt</h4>
          <p>Email: post@tollgaarden.no</p>
          <p>Telefon: +47 123 45 678</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Adresse</h4>
          <p>Kirkestredet 12</p>
          <p>3263 Larvik</p>
        </div>
      </div>
    </footer>
  )
} 