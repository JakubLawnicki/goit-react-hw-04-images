import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

export function ImageGalleryItem({ id, url, openModal }) {
  return (
    <li
      id={id}
      className={styles['gallery-item']}
      onClick={() => {
        openModal();
      }}
    >
      <img src={url} alt="" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  openModal: PropTypes.func,
};
