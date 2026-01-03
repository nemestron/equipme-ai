import { APP_CONFIG } from './constants';

/**
 * Validates the user's goal input.
 * * @param {string} goal - The user's input string
 * @returns {Object} - { isValid: boolean, error: string|null }
 */
export const validateGoal = (goal) => {
  // 1. Check existence
  if (!goal || typeof goal !== 'string') {
    return { 
      isValid: false, 
      error: 'Please enter a goal.' 
    };
  }

  const trimmedGoal = goal.trim();

  // 2. Check minimum length
  if (trimmedGoal.length < APP_CONFIG.MIN_GOAL_LENGTH) {
    return { 
      isValid: false, 
      error: \Goal must be at least \ characters.\ 
    };
  }

  // 3. Check maximum length
  if (trimmedGoal.length > APP_CONFIG.MAX_GOAL_LENGTH) {
    return { 
      isValid: false, 
      error: \Goal cannot exceed \ characters.\ 
    };
  }

  // 4. Basic sanitization (prevent script injection risk in display)
  // Note: React escapes by default, but good to be safe for API
  const sanitized = trimmedGoal.replace(/[<>]/g, '');

  return { 
    isValid: true, 
    value: sanitized,
    error: null 
  };
};
