import React from 'react';

/**
 * Card Component
 * Purpose: Container for content with consistent styling
 */
const Card = ({ children, className = '', hoverable = false, ...props }) => {
  const baseStyles = 'bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden';
  const hoverStyles = hoverable 
    ? 'transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer' 
    : '';

  return (
    <div 
      className={`
        ${baseStyles} 
        ${hoverStyles} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
