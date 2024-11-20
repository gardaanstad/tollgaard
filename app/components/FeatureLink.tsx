import Link from 'next/link'
import styles from './FeatureLink.module.css'

interface FeatureLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function FeatureLink({ href, children, className = '', external = false }: FeatureLinkProps) {
  const linkProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <Link 
      href={href}
      className={`${styles.featureLink} ${className}`}
      {...linkProps}
    >
      {children}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M5 12H19M19 12L12 5M19 12L12 19" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
} 