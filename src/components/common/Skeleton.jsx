import React from 'react';

/**
 * Skeleton Component
 * Purpose: Loading placeholder with pulse effect
 */
const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse bg-slate-200 rounded-md ${className}`}
      {...props}
    />
  );
};

export default Skeleton;
