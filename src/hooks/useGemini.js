import { useState, useCallback } from 'react';
import { generateBundle as fetchBundle } from '../services/geminiService';

/**
 * Hook for AI Generation
 * Manages loading, error, and data states for the Gemini API interactions.
 */
export const useGemini = () => {
  const [bundle, setBundle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateBundle = useCallback(async (goal, budget) => {
    setIsLoading(true);
    setError(null);
    setBundle(null); // Clear previous results immediately

    try {
      const result = await fetchBundle(goal, budget);
      setBundle(result);
      return result;
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setBundle(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    bundle,
    isLoading,
    error,
    generateBundle,
    reset
  };
};
