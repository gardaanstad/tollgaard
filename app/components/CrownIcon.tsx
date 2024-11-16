import Image from 'next/image';

export function CrownIcon() {
  return (
    <Image 
      src="/crown.svg" 
      alt="Crown icon" 
      layout="fixed" 
      width={50} 
      height={50}
    />
  );
} 