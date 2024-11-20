import Link from 'next/link'
import styles from './ReviewScore.module.css'

interface ReviewScoreProps {
  score: string
  label: string
  href: string
}

export function ReviewScore({ score, label, href }: ReviewScoreProps) {
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.scoreLink}
    >
      <span className={styles.scoreNumber}>{score}</span>
      <span className={styles.scoreLabel}>{label}</span>
    </Link>
  )
} 