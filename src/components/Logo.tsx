import React from 'react';
import { getAssetUrl } from '../utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'hero',
  alt = 'NEXE GROUP AB – Officiell webbplats',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-10 w-auto max-w-[180px] sm:max-w-[220px]',
    md: 'h-12 sm:h-16 md:h-18 w-auto max-w-[260px] sm:max-w-[340px]',
    lg: 'h-16 sm:h-22 md:h-26 w-auto max-w-[360px] sm:max-w-[460px]',
    hero: 'h-20 sm:h-28 md:h-36 lg:h-40 w-auto max-w-[88vw] sm:max-w-md md:max-w-xl lg:max-w-2xl',
  };

  const logoSrc = getAssetUrl('nexe-logo-official.png');

  return (
    <div
      className={`notranslate inline-flex items-center justify-center select-none ${className}`}
      translate="no"
    >
      <img
        src={logoSrc}
        alt={alt}
        className={`${sizeClasses[size]} object-contain block transition-transform duration-300 drop-shadow-xs`}
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
