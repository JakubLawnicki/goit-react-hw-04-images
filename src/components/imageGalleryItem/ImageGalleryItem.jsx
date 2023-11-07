import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

export function ImageGalleryItem({
  id,
  url,
  setModal,
  image,
  setSelectedImage,
}) {
  return (
    <li
      id={id}
      className={styles['gallery-item']}
      onClick={() => {
        setModal(true);
        setSelectedImage(image);
      }}
    >
      <img src={url} alt="" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  setModal: PropTypes.func,
  image: PropTypes.object,
  setSelectedImage: PropTypes.func,
};
