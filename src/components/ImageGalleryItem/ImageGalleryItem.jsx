import React from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <div onClick={handleImageClick}>
          <img
            src={webformatURL}
            alt={webformatURL}
            className={css.ImageGalleryItemImage}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            imageUrl={largeImageURL}
          />
        </div>
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};
export default ImageGalleryItem;
