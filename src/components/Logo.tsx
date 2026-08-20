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
  size = 'md',
  variant = 'default',
}) => {
  const sizeClasses = {
    sm: 'h-9 sm:h-10 md:h-11 max-w-[220px]',
    md: 'h-14 sm:h-16 md:h-20 max-w-[320px]',
    lg: 'h-24 sm:h-32 md:h-40 max-w-[500px]',
    hero: 'h-36 sm:h-48 md:h-60 lg:h-72 xl:h-80 max-w-[92vw] sm:max-w-2xl lg:max-w-3xl',
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
        alt="NEXE GROUP AB"
        className={`${sizeClasses[size]} w-auto object-contain transition-all duration-300 block drop-shadow-md`}
        referrerPolicy="no-referrer"
        loading="eager"
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
