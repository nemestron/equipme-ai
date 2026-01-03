import React from 'react';
import Input from '../common/Input';
import { Search, AlertCircle } from 'lucide-react';
import { POPULAR_GOALS } from '../../utils/constants';

const GoalInput = ({ value, onChange, disabled }) => {
  const isTooShort = value.length > 0 && value.length < 3;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          label="What do you want to do?"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g., Start Vlogging, Build a PC, Go Camping..."
          disabled={disabled}
          className={`pl-12 py-4 text-lg shadow-sm transition-colors 
            dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500
            ${isTooShort ? 'border-amber-300 focus:border-amber-500' : ''}`}
          aria-invalid={isTooShort}
        />
        <Search 
          className="absolute left-4 top-[2.85rem] text-slate-400" 
          size={22} 
        />
        <div className="absolute right-3 top-[2.5rem]">
           <span className="text-xs font-semibold px-2 py-1 rounded-md uppercase tracking-wider border
             text-brand-600 bg-brand-50 border-brand-100
             dark:text-brand-400 dark:bg-brand-900/30 dark:border-brand-800">
             AI Powered
           </span>
        </div>
      </div>

      {isTooShort && (
        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm animate-fadeIn">
          <AlertCircle size={14} />
          <span>Please enter at least 3 characters.</span>
        </div>
      )}

      <div>
        <p className="text-xs font-medium mb-2 uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Popular Ideas
        </p>
        <div className="flex flex-wrap gap-2">
          {POPULAR_GOALS.map((goal) => (
            <button
              key={goal}
              onClick={() => onChange(goal)}
              disabled={disabled}
              className="px-3 py-1.5 text-sm rounded-full border transition-all duration-200
                bg-white border-slate-200 text-slate-600 
                hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 
                focus:outline-none focus:ring-2 focus:ring-brand-500
                dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300
                dark:hover:bg-slate-700 dark:hover:text-white"
            >
              {goal}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GoalInput;
