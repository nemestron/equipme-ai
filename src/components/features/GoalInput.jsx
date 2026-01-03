import React from 'react';
import { Search } from 'lucide-react';
import Card from '../common/Card';

/**
 * GoalInput Component
 * Purpose: Primary user input for defining the product search goal.
 * Features: Large typography, icon prefix, card-like container.
 */
const GoalInput = ({ value, onChange, disabled = false }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <label 
        htmlFor="goal-input" 
        className="block text-sm font-medium text-slate-700 mb-2 ml-1"
      >
        What do you want to do?
      </label>
      
      <div className="relative group">
        {/* Icon Prefix */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
        </div>

        {/* Hero Input */}
        <input
          id="goal-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="
            block w-full pl-12 pr-4 py-4
            bg-white border-2 border-slate-200 rounded-xl
            text-lg md:text-xl font-medium text-slate-900 placeholder-slate-400
            shadow-sm transition-all duration-200
            focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 focus:outline-none
            disabled:bg-slate-50 disabled:text-slate-500
          "
          placeholder="e.g., Start Vlogging, Home Office Setup..."
        />
        
        {/* Helper Text (optional visual flair) */}
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2 py-1 rounded hidden sm:block">
            AI Powered
          </span>
        </div>
      </div>
    </div>
  );
};

export default GoalInput;
