import React from 'react';

const Input = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = 'text', 
  error, 
  disabled,
  className = '' 
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-4 py-2 rounded-lg border bg-white 
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-0
          disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed
          ${error 
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
            : 'border-slate-200 focus:border-brand-500 focus:ring-brand-200 hover:border-brand-200'
          }
          ${className}
        `}
      />
      {error && (
        <p className="text-sm text-red-600 animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
