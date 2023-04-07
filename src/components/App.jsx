import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Searchbar from './SearchBar/Searchbar';

const API_KEY = '32273532-93ec3ca64628767a4a46a9f0b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadClick = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    if (query !== '') {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };
  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && <Button onClick={handleLoadClick} />}
    </div>
  );
};
