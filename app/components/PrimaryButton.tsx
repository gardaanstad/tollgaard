import Link from 'next/link'
import styles from './Button.module.css'
import { NewTabIcon } from './icons'

interface PrimaryButtonProps {
  onClick?: () => void
  className?: string
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export function PrimaryButton({ 
  onClick, 
  className = '', 
  href, 
  children, 
  icon = <NewTabIcon />,
}: PrimaryButtonProps) {
  return (
    <Link 
      href={href}
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${styles.button} ${styles.primary} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}
    </Link>
  )
} 