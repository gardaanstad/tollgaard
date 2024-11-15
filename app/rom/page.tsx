'use client';

import Image from 'next/image';
import styles from './page.module.css';

export default function Rooms() {
  const rooms = [
    {
      title: 'Nr. 1 - Ettromsleilighet Standard',
      description: 'Koselig og praktisk leilighet perfekt for par.',
      capacity: '2 personer',
      beds: ['1 stor dobbeltseng'],
      amenities: ['Minikjøkken', 'WiFi', 'TV', 'Kjøleskap']
    },
    {
      title: 'Nr. 2 - Leilighet med 1 soverom',
      description: 'Komfortabel leilighet med separat soverom.',
      capacity: 'Opptil 4 personer',
      beds: [
        'Soverom: 1 dobbeltseng',
        'Stue: 1 sovesofa'
      ],
      amenities: ['Separat soverom', 'Kjøkken', 'WiFi', 'TV']
    },
    {
      title: 'Nr. 3 - Ettromsleilighet med loft',
      description: 'Sjarmerende leilighet over to plan med god plass.',
      capacity: 'Opptil 6 personer',
      beds: [
        '2 enkeltsenger',
        '1 sovesofa',
        '1 stor dobbeltseng'
      ],
      amenities: ['To etasjer', 'Kjøkken', 'WiFi', 'TV', 'Oppvaskmaskin']
    },
    {
      title: 'Nr. 4 - Ettromsleilighet over 2 plan',
      description: 'Moderne leilighet fordelt over to etasjer.',
      capacity: 'Opptil 4 personer',
      beds: [
        '1 sovesofa',
        '1 stor dobbeltseng'
      ],
      amenities: ['To etasjer', 'Kjøkken', 'WiFi', 'TV']
    },
    {
      title: 'Nr. 5 - Leilighet med balkong',
      description: 'Romslig leilighet med egen balkong og flott utsikt.',
      capacity: 'Opptil 5 personer',
      beds: [
        'Soverom: 1 stor dobbeltseng',
        'Stue: 2 sovesofaer'
      ],
      amenities: ['Balkong', 'Kjøkken', 'WiFi', 'TV', 'Vaskemaskin']
    }
  ];

  return (
    <div className={styles.roomsContainer}>
      <h1>Våre Rom</h1>
      <div className={styles.roomsList}>
        {rooms.map((room, index) => (
          <div key={index} className={styles.roomItem}>
            <div className={styles.roomImage}>
              <Image
                src={`/room-${(index % 6) + 1}.webp`} // room-1.webp, room-2.webp, etc.
                alt={room.title}
                width={300}
                height={200}
                objectFit="cover"
              />
            </div>
            <div className={styles.roomInfo}>
              <h2>{room.title}</h2>
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
              <a 
                href="https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html#availability_target" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookLink}
              >
                Se tilgjengelighet
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.newTabIcon}
                >
                  <path 
                    d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 