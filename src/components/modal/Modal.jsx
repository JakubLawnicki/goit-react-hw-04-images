import PropTypes from 'prop-types';
import styles from './modal.module.css';

export function Modal({ largeUrl, modal, setModal }) {
  if (modal) {
    return (
      <div
        className={styles.overlay}
        onClick={e => {
          e.stopPropagation();
          setModal(false);
        }}
      >
        <div className={styles.modal}>
          <img src={largeUrl} alt="" />
        </div>
      </div>
    );
  }
  return null;
}

Modal.propTypes = {
  largeUrl: PropTypes.string,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
};
