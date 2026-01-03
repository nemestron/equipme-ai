import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { Info } from 'lucide-react';

const BudgetSlider = ({ value, onChange, min, max, step }) => {
  // Edge Case Logic: Detect if budget is at the absolute minimum
  const isMinBudget = value <= min;

  const handleSliderChange = (e) => {
    onChange(Number(e.target.value));
  };

  // Calculate progress percentage for the slider background
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-4">
      {/* Header with Value Display */}
      <div className="flex justify-between items-end">
        <label htmlFor="budget-slider" className="text-sm font-medium text-slate-700">
          Your Budget
        </label>
        <div className="text-2xl font-bold text-brand-600">
          {formatCurrency(value)}
        </div>
      </div>

      {/* Range Input Container */}
      <div className="relative h-6 flex items-center">
        {/* Custom Track Background */}
        <div className="absolute w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-500 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* The Actual Input */}
        <input
          id="budget-slider"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label="Budget Slider"
        />

        {/* Custom Thumb (Visual Only - follows progress) */}
        <div 
          className="absolute h-5 w-5 bg-white border-2 border-brand-500 rounded-full shadow-md pointer-events-none transition-all duration-150 ease-out"
          style={{ left: `calc(${progress}% - 10px)` }}
        />
      </div>

      {/* Labels & Edge Case Warnings */}
      <div className="flex justify-between text-xs text-slate-400 font-medium">
        <span>{formatCurrency(min)}</span>
        <span>{formatCurrency(max)}+</span>
      </div>

      {/* Minimum Budget Warning */}
      {isMinBudget && (
        <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100 text-amber-700 text-xs animate-fadeIn">
          <Info size={14} className="mt-0.5 shrink-0" />
          <p>
            With a strict budget of {formatCurrency(min)}, recommendations may be limited to essential items only.
          </p>
        </div>
      )}
    </div>
  );
};

export default BudgetSlider;
