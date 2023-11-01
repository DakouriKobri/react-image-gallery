// NPM Packages
import { useQuery } from '@tanstack/react-query';

// Local Files
import { getSearchImages } from './api';
import { useSearchValue } from './hooks/useSearchValue';

export default function Gallery() {
  const { searchValue } = useSearchValue();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['images', searchValue],
    queryFn: () => getSearchImages(searchValue),
  });

  if (isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );

  if (isError)
    return (
      <section className="image-container">
        <h4>Problem loading images</h4>
      </section>
    );

  if (data.length < 1)
    return (
      <section className="image-container">
        <h4>No image found</h4>
      </section>
    );

  const imagesList = data.map((item) => {
    const { id, alt_description } = item;
    const url = item?.urls?.regular;
    return <img className="img" key={id} src={url} alt={alt_description} />;
  });

  return <section className="image-container">{imagesList}</section>;
}
