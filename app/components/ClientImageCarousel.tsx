'use client';

import dynamic from 'next/dynamic';
import styles from "../page.module.css";

const ImageCarousel = dynamic(() => import('./ImageCarousel'), {
  loading: () => <div className={styles.heroImageWrapper}>Loading...</div>,
  ssr: false
});

export default function ClientImageCarousel() {
  return <ImageCarousel />;
} 