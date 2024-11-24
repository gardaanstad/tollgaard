import React from 'react'
import { Suspense } from 'react'
import { headers } from 'next/headers'
import styles from './page.module.css'
import { RoomCard } from '../components/RoomCard'
import { Divider } from '../components/Divider'
import { apartmentsDictionary } from '../dictionaries'

const images = [
  {
    id: 0,
    images: ['/room-1-1.webp', '/room-1-2.webp', '/room-1-3.webp']
  },
  {
    id: 1,
    images: ['/room-2-1.webp', '/room-2-2.webp', '/room-2-3.webp']
  },
  {
    id: 2,
    images: ['/room-3-1.webp', '/room-3-2.webp', '/room-3-3.webp']
  },
  {
    id: 3,
    images: ['/room-4-1.webp', '/room-4-2.webp', '/room-4-3.webp']
  },
  {
    id: 4,
    images: ['/room-5-1.webp', '/room-5-2.webp', '/room-5-3.webp']
  },
  {
    id: 5,
    images: ['/room-6-1.webp', '/room-6-2.webp', '/room-6-3.webp']
  }
]

export const metadata = {
  title: 'Leiligheter | Tollgaarden Gjestegaard',
  description: 'Sentrale og komfortable leiligheter i Larvik'
}

export default async function Apartments() {
  const headersList = await headers()
  const lang = (headersList.get('x-lang') || 'no') as 'en' | 'no'
  const dict = apartmentsDictionary[lang]

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>{dict.title}</h1>
              <p>{dict.subtitle}</p>
            </div>
          </div>
        </section>

        <section className={styles.roomsList}>
          <Suspense fallback={<div>Loading...</div>}>
            {dict.rooms.map((room, index) => (
              <React.Fragment key={index}>
                <RoomCard 
                  room={room}
                  images={images[index].images}
                  checkAvailabilityText={dict.checkAvailability}
                  lang={lang}
                />
                {index < dict.rooms.length - 1 && <Divider mode="mobile" className={styles.divider} />}
              </React.Fragment>
            ))}
          </Suspense>
        </section>
      </main>
    </div>
  )
} 