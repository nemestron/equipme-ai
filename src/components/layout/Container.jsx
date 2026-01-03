import React from 'react';

/**
 * Container Component
 * Purpose: Centralizes max-width and horizontal padding constraints.
 */
const Container = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
