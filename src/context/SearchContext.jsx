// NPM Packages
import { createContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState('banana');

  function handleSearchValue(value) {
    setSearchValue(value);
  }

  return (
    <SearchContext.Provider value={{ searchValue, handleSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
