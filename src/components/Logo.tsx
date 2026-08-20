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
    sm: 'h-8 sm:h-9 md:h-10 max-w-[180px]',
    md: 'h-11 sm:h-12 md:h-14 max-w-[240px]',
    lg: 'h-16 sm:h-18 md:h-20 max-w-[320px]',
    hero: 'h-24 sm:h-32 md:h-40 lg:h-48 max-w-[480px]',
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
