import { headers } from 'next/headers'
import styles from './Footer.module.css'

const dictionary = {
  no: {
    contact: {
      title: 'Kontakt',
      email: 'Email: post@tollgaard.no',
      phone: 'Telefon: +47 952 73 052'
    },
    address: {
      title: 'Adresse',
      street: 'Kirkestredet 12',
      city: '3263 Larvik'
    }
  },
  en: {
    contact: {
      title: 'Contact',
      email: 'Email: post@tollgaard.no',
      phone: 'Phone: +47 952 73 052'
    },
    address: {
      title: 'Address',
      street: 'Kirkestredet 12',
      city: '3263 Larvik'
    }
  }
}

export async function Footer() {
  const headersList = await headers()
  const lang = (headersList.get('x-lang') || 'no') as 'en' | 'no'
  const dict = dictionary[lang]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>{dict.contact.title}</h4>
          <p>{dict.contact.email}</p>
          <p>{dict.contact.phone}</p>
        </div>
        <div className={styles.footerSection}>
          <h4>{dict.address.title}</h4>
          <p>{dict.address.street}</p>
          <p>{dict.address.city}</p>
        </div>
      </div>
    </footer>
  )
} 