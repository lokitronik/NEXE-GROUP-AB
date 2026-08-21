import React from 'react';
import logoTransparent from '../assets/images/nexe-group-logo-transparent.png';
import logoLight from '../assets/images/nexe-group-logo-light.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'default' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'hero',
  variant = 'default',
}) => {
  const sizeClasses = {
    sm: 'h-7 sm:h-9 md:h-10 max-w-[180px] sm:max-w-[220px]',
    md: 'h-10 sm:h-12 md:h-16 max-w-[240px] sm:max-w-[300px]',
    lg: 'h-16 sm:h-22 md:h-28 max-w-[320px] sm:max-w-[420px]',
    hero: 'h-24 sm:h-32 md:h-44 lg:h-52 xl:h-56 max-w-[85vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl',
  };

  const imageSrc = variant === 'light' ? logoLight : logoTransparent;
  const fallbackFileName =
    variant === 'light'
      ? 'nexe-group-logo-light.png'
      : 'nexe-group-logo-transparent.png';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={imageSrc}
        alt="NEXE GROUP AB – Företagsgrupp och specialiserade verksamheter"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 block drop-shadow-sm`}
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
        onError={(e) => {
          const target = e.currentTarget;
          const fallbackUrl = `${import.meta.env.BASE_URL}${fallbackFileName}`;
          if (!target.src.endsWith(fallbackFileName)) {
            target.src = fallbackUrl;
          }
        }}
      />
    </div>
  );
};
