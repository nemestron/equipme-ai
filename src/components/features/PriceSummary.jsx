import React from 'react';
import Button from '../common/Button';
import Container from '../layout/Container';
import { RefreshCw, ArrowRight } from 'lucide-react';

/**
 * PriceSummary Component
 */
const PriceSummary = ({ 
  totalCost = 0, 
  budget = 0, 
  itemCount = 0, 
  onGenerate, 
  isLoading 
}) => {
  const isOverBudget = totalCost > budget;
  const percentage = Math.min((totalCost / budget) * 100, 100);
  
  const formatMoney = (amount) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  const progressColor = isOverBudget ? 'bg-red-500' : 'bg-green-500';
  const textColor = isOverBudget ? 'text-red-600' : 'text-green-600';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
      <div className="w-full h-1 bg-slate-100">
        <div 
          className={`h-full transition-all duration-500 ease-out ${progressColor}`}
          style={{ width: percentage + '%' }}
        />
      </div>

      <Container>
        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">
                {formatMoney(totalCost)}
              </span>
              <span className="text-sm text-slate-500 font-medium">
                 / {formatMoney(budget)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-700">{itemCount} items</span>
              <span className="text-slate-300">|</span>
              <span className={`font-medium ${textColor}`}>
                {isOverBudget ? 'Over Budget' : 'Within Budget'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-sm text-slate-500">
              Not happy with this result?
            </span>
            
            <Button 
              onClick={onGenerate} 
              isLoading={isLoading}
              variant="secondary"
              className="hidden sm:flex"
            >
              <RefreshCw size={16} className="mr-2" />
              Regenerate
            </Button>

            <Button 
              onClick={onGenerate} 
              isLoading={isLoading}
              className="sm:hidden"
            >
              <RefreshCw size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PriceSummary;
