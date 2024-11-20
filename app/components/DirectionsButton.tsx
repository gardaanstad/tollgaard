import styles from './DirectionsButton.module.css'

export function DirectionsButton() {
  const handleClick = () => {
    // Google Maps URL for directions to Tollgaarden
    const destination = 'Tollgaarden+Gjestegaard+Larvik+Norway'
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button 
      onClick={handleClick}
      className={styles.directionsButton}
    >
      Få veibeskrivelse
      <svg 
        width="14" 
        height="14" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.directionIcon}
      >
        <path 
          d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 .553-.894L9 2m0 18l6-3m-6 3V2m6 15l5.447-2.724A1 1 0 0 0 21 13.382V2.618a1 1 0 0 0-.553-.894L15 0v17z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
} 