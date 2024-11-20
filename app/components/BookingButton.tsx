import Link from 'next/link'
import styles from './BookingButton.module.css'

interface BookingButtonProps {
  onClick?: () => void
  className?: string
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export function BookingButton({ onClick, className = '', href, children, icon }: BookingButtonProps) {
  return (
    <Link 
      href={href}
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${styles.bookingButton} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon || (
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
      )}
    </Link>
  )
} 