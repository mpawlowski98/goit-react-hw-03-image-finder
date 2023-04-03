import React from 'react';
import css from './styles.css';
const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <div>
          <img
            src={webformatURL}
            alt={webformatURL}
            className={css.ImageGalleryItem}
          />
        </div>
      </li>
    </>
  );
};

export default ImageGalleryItem;
