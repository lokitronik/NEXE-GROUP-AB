import React from 'react';
import logoImage from '../assets/images/nexe_group_logo_1787214239871.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-10 md:h-12 max-w-[200px]',
    md: 'h-14 md:h-16 max-w-[260px]',
    lg: 'h-20 md:h-24 max-w-[340px]',
    hero: 'h-24 sm:h-28 md:h-36 lg:h-40 max-w-[420px]',
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoImage}
        alt="NEXE GROUP AB"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 block`}
        referrerPolicy="no-referrer"
        loading="eager"
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== '/nexe-group-logo.jpg' && !target.src.endsWith('/nexe-group-logo.jpg')) {
            target.src = '/nexe-group-logo.jpg';
          }
        }}
      />
    </div>
  );
};
