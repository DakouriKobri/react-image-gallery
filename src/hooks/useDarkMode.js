// NPM Packages
import { useContext } from 'react';

// Local Files
import { ThemeContext } from '../context/ThemeContext';

export function useDarkMode() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext was used outside ThemeProvider.');
  return context;
}
