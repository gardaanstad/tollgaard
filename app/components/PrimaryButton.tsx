import Link from 'next/link'
import styles from './PrimaryButton.module.css'

interface PrimaryButtonProps {
  href: string
  children: React.ReactNode
  external?: boolean
}

export function PrimaryButton({ href, children, external = false }: PrimaryButtonProps) {
  const linkProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <Link 
      href={href}
      className={styles.primaryButton}
      {...linkProps}
    >
      {children}
    </Link>
  )
} 