'use client';

import React from 'react';
import styles from './page.module.css';
import ImageCarousel from '../components/ImageCarousel';
import { BookingButton } from '../components/BookingButton';
import { MobileDivider } from '../components/MobileDivider';

export default function Rooms() {
  const rooms = [
    {
      title: 'Ettromsleilighet standard',
      description: 'Koselig og praktisk leilighet perfekt for par.',
      capacity: '2 personer',
      beds: [
        '1 stor dobbeltseng'
      ],
      amenities: ['Kjøkken', 'TV'],
      images: [
        '/room-1-1.webp',
        '/room-1-2.webp',
        '/room-1-3.webp',
      ]
    },
    {
      title: 'Leilighet med 1 soverom',
      description: 'Komfortabel leilighet med separat soverom.',
      capacity: 'Opptil 4 personer',
      beds: [
        '1 dobbeltseng',
        '1 sovesofa'
      ],
      amenities: ['Kjøkken', 'Separat soverom', 'TV'],
      images: [
        '/room-2-1.webp',
        '/room-2-2.webp',
        '/room-2-3.webp',
      ]
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
      amenities: ['Kjøkken', 'TV'],
      images: [
        '/room-3-1.webp',
        '/room-3-2.webp',
        '/room-3-3.webp',
      ]
    },
    {
      title: 'Ettromsleilighet over 2 plan',
      description: 'Moderne leilighet fordelt over to etasjer.',
      capacity: 'Opptil 4 personer',
      beds: [
        '1 stor dobbeltseng',
        '1 sovesofa'
      ],
      amenities: ['Kjøkken', 'TV'],
      images: [
        '/room-4-1.webp',
        '/room-4-2.webp',
        '/room-4-3.webp',
      ]
    },
    {
      title: 'Ettromsleilighet over 2 plan',
      description: 'Moderne leilighet fordelt over to etasjer.',
      capacity: 'Opptil 4 personer',
      beds: [
        '1 stor dobbeltseng',
        '1 sovesofa'
      ],
      amenities: ['Kjøkken', 'TV'],
      images: [
        '/room-5-1.webp',
        '/room-5-2.webp',
        '/room-5-3.webp',
      ]
    },
    {
      title: 'Leilighet med balkong',
      description: 'Romslig leilighet med egen balkong.',
      capacity: 'Opptil 5 personer',
      beds: [
        '1 stor dobbeltseng',
        '2 sovesofaer'
      ],
      amenities: ['Balkong', 'Kjøkken', 'TV'],
      images: [
        '/room-6-1.webp',
        '/room-6-2.webp',
        '/room-6-3.webp',
      ]
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Våre Leiligheter</h1>
              <p>
                Alle leilighetene har TV, kjøkken, og gratis WiFi.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.roomsList}>
          {rooms.map((room, index) => (
            <React.Fragment key={index}>
              <div className={styles.roomItem}>
                <div className={styles.roomImage}>
                  <ImageCarousel images={room.images} />
                </div>
                <div className={styles.roomInfo}>
                  <h2 className={styles.roomTitle}>
                    {room.title}
                  </h2>
                  <p className={styles.description}>{room.description}</p>
                  <p className={styles.capacity}>{room.capacity}</p>
                  <div className={styles.beds}>
                    {room.beds.map((bed, i) => (
                      <p key={i}>{bed}</p>
                    ))}
                  </div>
                  <div className={styles.amenities}>
                    {room.amenities.map((amenity, i) => (
                      <span key={i} className={styles.amenity}>{amenity}</span>
                    ))}
                  </div>
                  <BookingButton 
                    href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html#availability_target"
                    className={styles.roomBookingButton}
                  >
                    Sjekk tilgjengelighet
                  </BookingButton>
                </div>
              </div>
              {index < rooms.length - 1 && <MobileDivider />}
            </React.Fragment>
          ))}
        </section>
      </main>
    </div>
  );
} 