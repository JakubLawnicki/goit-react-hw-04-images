import PropTypes from 'prop-types';
import styles from './imageGallery.module.css';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Button } from 'components/button/Button';
import { Modal } from 'components/modal/Modal';

export function ImageGallery({
  list,
  load,
  more,
  page,
  total,
  modal,
  openModal,
  closeModal,
  selectedImage,
}) {
  const renderLoadMoreButton = () => {
    if (total > 12) {
      return <Button load={load} more={more} page={page} />;
    }
  };

  return (
    <>
      <ul className={styles.gallery}>
        {list.map(image => {
          console.log(image);
          return (
            <div key={image.id}>
              <ImageGalleryItem
                id={image.id}
                url={image.imgUrl}
                openModal={() => openModal(image)}
              />
              <Modal
                largeUrl={selectedImage.largeImgUrl}
                modal={modal}
                closeModal={closeModal}
              />
            </div>
          );
        })}
      </ul>
      {renderLoadMoreButton()}
    </>
  );
}

ImageGallery.propTypes = {
  list: PropTypes.array,
  load: PropTypes.func,
  more: PropTypes.func,
  page: PropTypes.number,
  total: PropTypes.number,
  modal: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  selectedImage: PropTypes.object,
};
