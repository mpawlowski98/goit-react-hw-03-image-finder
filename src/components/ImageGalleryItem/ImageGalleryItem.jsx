import React from 'react';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <div>
          <img
            src={webformatURL}
            alt={webformatURL}
            className={css.ImageGalleryItemImage}
          />
        </div>
      </li>
    </>
  );
};

export default ImageGalleryItem;
