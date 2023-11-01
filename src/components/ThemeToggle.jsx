// NPM Packages
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

// Local Files
import { useDarkMode } from '../hooks/useDarkMode';

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useDarkMode();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" type="button" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}
