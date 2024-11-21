'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images?: string[];
}

const defaultImages = [
  '/tollgaard_1.webp',
  '/tollgaard_2.webp',
  '/tollgaard_3.webp',
];

export default function ImageCarousel({ images = defaultImages }: ImageCarouselProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    setIsLoaded(true);
    
    if (window.innerWidth > 768) {
      setCurrentIndex(images.length);
    }

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [images.length]);

  // Desktop functionality
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isTransitioning || isMobile) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isTransitioning || isMobile) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  useEffect(() => {
    if (isMobile) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    
    if (!shouldAnimate) {
      wrapper.style.transform = `translateX(-${images.length * 100}%)`;
      setShouldAnimate(true);
      return;
    }

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      
      if (currentIndex >= images.length * 2) {
        wrapper.style.transition = 'none';
        setCurrentIndex(images.length);
        wrapper.style.transform = `translateX(-${images.length * 100}%)`;
        // Force a reflow before re-enabling transitions
        void wrapper.offsetHeight;
        wrapper.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      } else if (currentIndex <= 0) {
        wrapper.style.transition = 'none';
        setCurrentIndex(images.length);
        wrapper.style.transform = `translateX(-${images.length * 100}%)`;
        // Force a reflow before re-enabling transitions
        void wrapper.offsetHeight;
        wrapper.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      }
    };

    wrapper.addEventListener('transitionend', handleTransitionEnd);
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    return () => {
      wrapper?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, shouldAnimate, isMobile, images.length]);

  // Mobile scroll handling
  const handleScroll = useCallback(() => {
    if (!isMobile || !wrapperRef.current) return;
    const index = Math.round(wrapperRef.current.scrollLeft / wrapperRef.current.offsetWidth);
    setCurrentIndex(index);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const scrollElement = wrapperRef.current;
    if (!scrollElement) return;

    scrollElement.addEventListener('scroll', handleScroll);
    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, [isMobile, handleScroll]);

  const getActiveDotIndex = () => {
    if (isMobile) return currentIndex;
    return ((currentIndex - images.length) % images.length + images.length) % images.length;
  };

  if (isMobile === null || !isLoaded) {
    return <div className={styles.carousel} />;
  }

  return (
    <div className={styles.carousel}>
      {!isMobile && (
        <button 
          className={`${styles.carouselButton} ${styles.prevButton}`}
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      
      <div 
        className={`${styles.imageWrapper} ${isMobile ? styles.mobileWrapper : ''}`}
        ref={wrapperRef}
        style={!isMobile ? {
          transition: shouldAnimate ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          transform: `translateX(-${currentIndex * 100}%)`
        } : undefined}
      >
        {(isMobile ? images : extendedImages).map((src, index) => (
          <div key={`${src}-${index}`} className={styles.imageContainer}>
            <Image
              src={src}
              alt={`Tollgaarden Gjestegaard ${(isMobile ? index + 1 : (index % images.length) + 1)}`}
              fill
              priority={isMobile ? index === 0 : index === images.length}
              sizes="100vw"
              className={styles.carouselImage}
            />
          </div>
        ))}
      </div>

      {!isMobile && (
        <button 
          className={`${styles.carouselButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Next image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === getActiveDotIndex() ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
} 