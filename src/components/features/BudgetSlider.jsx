import React from 'react';

/**
 * BudgetSlider Component
 * Purpose: Allows user to select a budget constraint.
 * Features: Visual range input, currency formatting, min/max labels.
 */
const BudgetSlider = ({ value, onChange, min = 100, max = 5000, step = 50 }) => {
  
  // Local currency formatter
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate percentage for background gradient effect (optional visual polish)
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-end mb-4">
        <label htmlFor="budget-slider" className="text-sm font-medium text-slate-700">
          Your Budget
        </label>
        <div className="text-2xl font-bold text-brand-600 tracking-tight">
          {formatMoney(value)}
        </div>
      </div>

      <div className="relative h-6 flex items-center">
        <input
          id="budget-slider"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="
            w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer
            accent-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20
          "
        />
      </div>

      <div className="flex justify-between mt-2 text-xs font-medium text-slate-400">
        <span>{formatMoney(min)}</span>
        <span>{formatMoney(max / 2)}</span>
        <span>{formatMoney(max)}+</span>
      </div>
    </div>
  );
};

export default BudgetSlider;
