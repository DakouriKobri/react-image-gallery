import { useSearchValue } from './hooks/useSearchValue';

export default function SearchForm() {
  const { handleSearchValue } = useSearchValue();

  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;

    if (!searchValue) return;
    handleSearchValue(searchValue);

    event.currentTarget.reset();
  }

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}
