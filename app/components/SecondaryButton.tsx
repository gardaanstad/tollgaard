import Link from 'next/link'
import styles from './Button.module.css'
import { NewTabIcon } from './icons'

interface SecondaryButtonProps {
  onClick?: () => void
  className?: string
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export function SecondaryButton({ 
  onClick, 
  className = '', 
  href, 
  children, 
  icon = <NewTabIcon />,
}: SecondaryButtonProps) {
  return (
    <Link 
      href={href}
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${styles.button} ${styles.secondary} ${className}`}
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