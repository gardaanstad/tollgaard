'use client';

import styles from '../page.module.css';

export function MobileBookingButton() {
  return (
    <button 
      onClick={() => window.location.href = 'https://www.booking.com/hotel/no/toldgaarden-gjestegaard.no.html'}
      className={styles.mobileBookingButton}
    >
      <div className={styles.mobileBookingText}>
        <span className={styles.mobileBookingMain}>Reserver rom</span>
        <span className={styles.mobileBookingSubtitle}>på Booking.com</span>
      </div>
    </button>
  );
} 