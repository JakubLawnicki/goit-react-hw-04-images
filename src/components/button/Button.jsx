import PropTypes from 'prop-types';
import styles from './button.module.css';

export function Button({ setCurrentPage, getMoreImages, currentPage }) {
  return (
    <button
      onClick={() => {
        setCurrentPage(currentPage + 1);

        getMoreImages(currentPage);
      }}
      type="button"
      className={styles['load-button']}
    >
      Load more
    </button>
  );
}

Button.propTypes = {
  setCurrentPage: PropTypes.func,
  getMoreImages: PropTypes.func,
  currentPage: PropTypes.number,
};
