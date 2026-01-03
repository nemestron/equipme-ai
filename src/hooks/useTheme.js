import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('equipme_theme', 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both to ensure clean slate
    root.classList.remove('light', 'dark');
    
    // Add the active theme
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
