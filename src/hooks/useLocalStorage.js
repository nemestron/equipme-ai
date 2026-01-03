import { useState, useEffect } from 'react';

/**
 * Hook to persist state in localStorage.
 * @param {string} key - Storage key
 * @param {any} initialValue - Default value if nothing in storage
 */
export const useLocalStorage = (key, initialValue) => {
  // 1. Lazy Initialization
  // We only read from localStorage once on mount to avoid performance hit.
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // 2. Sync to Storage
  // Whenever the state changes, update localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};
