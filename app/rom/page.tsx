'use client';

import styles from './page.module.css';
import ImageCarousel from '../components/ImageCarousel';
import Link from 'next/link';

export default function Rooms() {
  const rooms = [
    {
      title: 'Nr. 1 - Ettromsleilighet Standard',
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
      title: 'Nr. 2 - Leilighet med 1 soverom',
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
      title: 'Nr. 3 - Ettromsleilighet med loft',
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
      title: 'Nr. 4 - Ettromsleilighet over 2 plan',
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
      title: 'Nr. 5 - Ettromsleilighet over 2 plan',
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
      title: 'Nr. 6 - Leilighet med balkong',
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
                Vi tilbyr 6 unike leiligheter, alle med TV, WiFi og eget kjøkken.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.roomsList}>
          {rooms.map((room, index) => (
            <Link 
              key={index}
              href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html#availability_target"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.roomLink}
            >
              <div className={styles.roomItem}>
                <div className={styles.roomImage}>
                  <ImageCarousel images={room.images} />
                </div>
                <div className={styles.roomInfo}>
                  <h2 className={styles.roomTitle}>
                    {room.title}
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.titleIcon}
                    >
                      <path 
                        d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
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
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
} 