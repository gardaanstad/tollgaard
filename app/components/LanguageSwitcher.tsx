'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { routes } from '../lib/routes'
import styles from './LanguageSwitcher.module.css'

const getEquivalentPath = (currentPath: string, fromLang: 'en' | 'no', toLang: 'en' | 'no') => {
  // Handle home page
  if (currentPath === '/' || currentPath === '/en') {
    return toLang === 'en' ? '/en' : '/'
  }

  // Remove language prefix for English paths
  const pathWithoutLang = currentPath.replace(/^\/en/, '')
  
  // Find the route key by matching the path
  const routeKey = Object.entries(routes[fromLang]).find(([, path]) => 
    path.endsWith(pathWithoutLang)
  )?.[0]

  if (!routeKey) return toLang === 'en' ? '/en' : '/'
  
  return routes[toLang][routeKey as keyof typeof routes['en']]
}

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  
  // Pre-calculate the target path
  const targetPath = isEnglish 
    ? getEquivalentPath(pathname, 'en', 'no')
    : getEquivalentPath(pathname, 'no', 'en')

  return (
    <Link 
      href={targetPath}
      className={`${styles.languageSwitch} ${className || ''}`}
      aria-label={isEnglish ? 'Switch to Norwegian' : 'Switch to English'}
      prefetch={true}
    >
      <Image
        src={isEnglish ? '/icons/norway.svg' : '/icons/uk.svg'}
        alt={isEnglish ? 'Norwegian flag' : 'UK flag'}
        width={33}
        height={24}
        className={styles.flagIcon}
        priority={true}
      />
    </Link>
  )
} 