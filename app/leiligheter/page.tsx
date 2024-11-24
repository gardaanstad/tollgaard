import React from 'react'
import { headers } from 'next/headers'
import styles from './page.module.css'
import { RoomCard } from '../components/RoomCard'
import { Divider } from '../components/Divider'

const dictionary = {
  no: {
    title: 'Våre Leiligheter',
    subtitle: 'Alle leilighetene har TV, kjøkken og gratis WiFi.',
    checkAvailability: 'Sjekk tilgjengelighet',
    rooms: [
      {
        title: 'Ettromsleilighet standard',
        description: 'Koselig og praktisk leilighet perfekt for par.',
        capacity: '2 personer',
        beds: [
          '1 stor dobbeltseng'
        ],
        amenities: ['Kjøkken', 'TV']
      },
      {
        title: 'Leilighet med 1 soverom',
        description: 'Komfortabel leilighet med separat soverom.',
        capacity: 'Opptil 4 personer',
        beds: [
          '1 dobbeltseng',
          '1 sovesofa'
        ],
        amenities: ['Kjøkken', 'Separat soverom', 'TV']
      },
      {
        title: 'Ettromsleilighet med loft',
        description: 'Sjarmerende leilighet over to plan.',
        capacity: 'Opptil 6 personer',
        beds: [
          '2 enkeltsenger',
          '1 dobbeltseng',
          '1 sovesofa'
        ],
        amenities: ['Kjøkken', 'TV']
      },
      {
        title: 'Ettromsleilighet over 2 plan',
        description: 'Moderne leilighet fordelt over to etasjer.',
        capacity: 'Opptil 4 personer',
        beds: [
          '1 stor dobbeltseng',
          '1 sovesofa'
        ],
        amenities: ['Kjøkken', 'TV']
      },
      {
        title: 'Ettromsleilighet over 2 plan',
        description: 'Moderne leilighet fordelt over to etasjer.',
        capacity: 'Opptil 4 personer',
        beds: [
          '1 stor dobbeltseng',
          '1 sovesofa'
        ],
        amenities: ['Kjøkken', 'TV']
      },
      {
        title: 'Leilighet med balkong',
        description: 'Romslig leilighet med egen balkong.',
        capacity: 'Opptil 5 personer',
        beds: [
          '1 stor dobbeltseng',
          '2 sovesofaer'
        ],
        amenities: ['Balkong', 'Kjøkken', 'TV']
      }
    ]
  },
  en: {
    title: 'Our Apartments',
    subtitle: 'All apartments have TV, kitchen and free WiFi.',
    checkAvailability: 'Check availability',
    rooms: [
      {
        title: 'Standard Studio Apartment',
        description: 'Cozy and practical apartment perfect for couples.',
        capacity: '2 people',
        beds: [
          '1 large double bed'
        ],
        amenities: ['Kitchen', 'TV']
      },
      {
        title: '1 Bedroom Apartment',
        description: 'Comfortable apartment with separate bedroom.',
        capacity: 'Up to 4 people',
        beds: [
          '1 double bed',
          '1 sofa bed'
        ],
        amenities: ['Kitchen', 'Separate bedroom', 'TV']
      },
      {
        title: 'Studio with Loft',
        description: 'Charming two-level apartment.',
        capacity: 'Up to 6 people',
        beds: [
          '2 single beds',
          '1 double bed',
          '1 sofa bed'
        ],
        amenities: ['Kitchen', 'TV']
      },
      {
        title: 'Two-Level Studio',
        description: 'Modern apartment spread over two floors.',
        capacity: 'Up to 4 people',
        beds: [
          '1 large double bed',
          '1 sofa bed'
        ],
        amenities: ['Kitchen', 'TV']
      },
      {
        title: 'Two-Level Studio',
        description: 'Modern apartment spread over two floors.',
        capacity: 'Up to 4 people',
        beds: [
          '1 large double bed',
          '1 sofa bed'
        ],
        amenities: ['Kitchen', 'TV']
      },
      {
        title: 'Apartment with Balcony',
        description: 'Spacious apartment with private balcony.',
        capacity: 'Up to 5 people',
        beds: [
          '1 large double bed',
          '2 sofa beds'
        ],
        amenities: ['Balcony', 'Kitchen', 'TV']
      }
    ]
  }
}

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

export default async function Apartments() {
  const headersList = await headers()
  const lang = (headersList.get('x-lang') || 'no') as 'en' | 'no'
  const dict = dictionary[lang]

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
          {dict.rooms.map((room, index) => (
            <React.Fragment key={index}>
              <RoomCard 
                room={room}
                images={images[index].images}
                checkAvailabilityText={dict.checkAvailability}
                lang={lang}
              />
              {index < dict.rooms.length - 1 && <Divider mode="mobile" />}
            </React.Fragment>
          ))}
        </section>
      </main>
    </div>
  )
} 