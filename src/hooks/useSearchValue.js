// NPM Packages
import { useContext } from 'react';

// Local Files
import { SearchContext } from '../context/SearchContext';

export function useSearchValue() {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error('SearchContext was used outside SearchProvider.');
  return context;
}
