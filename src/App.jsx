import Gallery from './Gallery';
import SearchForm from './SearchForm';
import ThemeToggle from './components/ThemeToggle';
import HeadingPrimary from './components/HeadingPrimary';

function App() {
  return (
    <>
      <ThemeToggle />
      <HeadingPrimary>Unsplash Images</HeadingPrimary>
      <SearchForm />
      <Gallery />
    </>
  );
}

export default App;
