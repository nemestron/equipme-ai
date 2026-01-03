/**
 * Formats a number as USD currency.
 * Handles edge cases like null, undefined, or string inputs.
 * * @param {number|string} amount - The value to format
 * @returns {string} - Formatted string (e.g., ",200.00")
 */
export const formatCurrency = (amount) => {
  // 1. Handle non-numeric inputs gracefully
  if (amount === null || amount === undefined) {
    return '.00';
  }

  const numericAmount = Number(amount);

  // 2. Fallback for invalid numbers
  if (isNaN(numericAmount)) {
    return '.00';
  }

  // 3. Standard formatting
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0, 
  }).format(numericAmount);
};
