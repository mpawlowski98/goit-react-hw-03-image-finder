import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import css from './styles.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />;
      })}
    </ul>
  );
};

export default ImageGallery;
