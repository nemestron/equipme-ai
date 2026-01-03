import React from 'react';

/**
 * Input Component
 * Purpose: Text entry with integrated label and validation state
 * Props:
 * - label: string (optional)
 * - error: string (optional error message)
 * - helperText: string (optional guidance)
 */
const Input = ({ 
  label, 
  error, 
  helperText, 
  className = '', 
  id, 
  type = 'text',
  ...props 
}) => {
  // Generate a random ID if none provided, to link label to input
  const inputId = id || 'input-' + Math.random().toString(36).substr(2, 9);

  return (
    <div className={w-full  + className}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          id={inputId}
          type={type}
          className={
            w-full px-4 py-2 rounded-lg border bg-white
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-0
            disabled:bg-slate-50 disabled:text-slate-500
             + (error 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
              : 'border-slate-300 focus:border-brand-500 focus:ring-brand-100') + 
          }
          {...props}
        />
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600 animate-fadeIn">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-slate-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
