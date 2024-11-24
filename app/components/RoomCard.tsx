'use client'
import React from 'react'
import styles from './RoomCard.module.css'
import ImageCarousel from './ImageCarousel'
import { SecondaryButton } from './SecondaryButton'
import { NewTabIcon } from './icons'

interface RoomCardProps {
  room: {
    title: string
    description: string
    capacity: string
    beds: string[]
    amenities: string[]
  }
  images: string[]
  checkAvailabilityText: string
  lang: 'en' | 'no'
}

export function RoomCard({ room, images, checkAvailabilityText, lang }: RoomCardProps) {
  return (
    <div className={styles.roomItem}>
      <div className={styles.roomImage}>
        <ImageCarousel images={images} />
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
        <SecondaryButton 
          href={`https://www.booking.com/hotel/no/toldgaarden-gjestegaard.${lang}.html#availability_target`}
          className={styles.roomBookingButton}
          icon={<NewTabIcon />}
        >
          {checkAvailabilityText}
        </SecondaryButton>
      </div>
    </div>
  )
} 