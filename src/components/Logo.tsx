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
  variant = 'light',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 md:h-10 max-w-[200px]',
    md: 'h-12 sm:h-14 md:h-16 max-w-[280px]',
    lg: 'h-20 sm:h-24 md:h-28 max-w-[420px]',
    hero: 'h-28 sm:h-36 md:h-44 lg:h-52 xl:h-60 max-w-[90vw] sm:max-w-xl md:max-w-2xl',
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
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-500 block drop-shadow-xl`}
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
