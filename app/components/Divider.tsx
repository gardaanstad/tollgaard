import styles from './Divider.module.css'
import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
  mode?: 'mobile'
}

export function Divider({ className, mode }: DividerProps) {
  return (
    <div 
      className={cn(
        styles.divider,
        mode === 'mobile' && styles.mobileOnly,
        className
      )} 
    />
  )
} 