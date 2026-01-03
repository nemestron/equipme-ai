import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Loader Component
 * Purpose: Displays a spinning loading indicator
 * Props:
 * - size: 'sm' | 'md' | 'lg' (default: 'md')
 * - className: string (for custom positioning/colors)
 */
const Loader = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={lex items-center justify-center  + className}>
      <Loader2 className={nimate-spin text-brand-600  + sizeClasses[size]} />
    </div>
  );
};

export default Loader;
