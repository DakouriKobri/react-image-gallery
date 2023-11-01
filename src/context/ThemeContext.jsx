// NPM Packages
import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function getInitialDarkMode() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  return localStorage.getItem('darkTheme') ?? prefersDarkMode.toString();
}

function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(getInitialDarkMode())
  );

  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    localStorage.setItem('darkTheme', newDarkTheme);
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
