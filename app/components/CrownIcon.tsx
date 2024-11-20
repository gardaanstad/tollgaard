import Image from 'next/image';

export function CrownIcon() {
  return (
    <Image 
      src="/crown.svg" 
      alt="Crown icon" 
      width={50} 
      height={50}
      style={{
        width: '50px',
        height: '50px'
      }}
    />
  );
} 