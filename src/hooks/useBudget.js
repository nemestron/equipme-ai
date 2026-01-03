import { useLocalStorage } from './useLocalStorage';
import { APP_CONFIG } from '../utils/constants';
import { formatCurrency } from '../utils/formatCurrency';

/**
 * Hook for Budget Management
 * Integrates persistence and validation.
 */
export const useBudget = () => {
  const [budget, setBudget] = useLocalStorage('equipme_budget', APP_CONFIG.DEFAULT_BUDGET);

  // Validation Logic
  const isValidBudget = 
    budget >= APP_CONFIG.MIN_BUDGET && 
    budget <= APP_CONFIG.MAX_BUDGET;

  // Safe Setter
  const updateBudget = (value) => {
    const numValue = Number(value);
    if (!isNaN(numValue)) {
      setBudget(numValue);
    }
  };

  return {
    budget,
    setBudget: updateBudget,
    formattedBudget: formatCurrency(budget),
    isValidBudget,
    min: APP_CONFIG.MIN_BUDGET,
    max: APP_CONFIG.MAX_BUDGET,
    step: APP_CONFIG.BUDGET_STEP
  };
};
