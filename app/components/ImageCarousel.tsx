'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

const images = [
  '/tollgaard_main.webp',
  '/tollgaard_2.webp',
  '/tollgaard_3.webp',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(images.length);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedImages = [...images, ...images, ...images];

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  useEffect(() => {
    if (!wrapperRef.current) return;
    
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      
      if (currentIndex >= images.length * 2) {
        if (wrapperRef.current) {
          wrapperRef.current.style.transition = 'none';
          wrapperRef.current.style.transform = `translateX(-${images.length * 100}%)`;
          setCurrentIndex(images.length);
          wrapperRef.current.offsetHeight;
          wrapperRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        }
      } else if (currentIndex <= 0) {
        if (wrapperRef.current) {
          wrapperRef.current.style.transition = 'none';
          wrapperRef.current.style.transform = `translateX(-${images.length * 100}%)`;
          setCurrentIndex(images.length);
          wrapperRef.current.offsetHeight;
          wrapperRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        }
      }
    };

    wrapperRef.current.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      wrapperRef.current?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className={styles.carousel}>
      <button 
        className={`${styles.carouselButton} ${styles.prevButton}`}
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M19 12H5M5 12L12 19M5 12L12 5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      <div 
        className={styles.imageWrapper} 
        ref={wrapperRef}
        style={{ transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {extendedImages.map((src, index) => (
          <Image
            key={`${src}-${index}`}
            src={src}
            alt={`Tollgaarden Gjestegaard ${(index % images.length) + 1}`}
            fill
            priority={index === images.length}
            className={styles.carouselImage}
          />
        ))}
      </div>

      <button 
        className={`${styles.carouselButton} ${styles.nextButton}`}
        onClick={goToNext}
        aria-label="Next image"
      >
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
      </button>
    </div>
  );
} 