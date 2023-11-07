import PropTypes from 'prop-types';
import styles from './imageGallery.module.css';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Button } from 'components/button/Button';
import { Modal } from 'components/modal/Modal';

export function ImageGallery({
  imageList,
  setCurrentPage,
  getMoreImages,
  currentPage,
  totalHits,
  modal,
  setModal,
  selectedImage,
  setSelectedImage,
}) {
  const renderLoadMoreButton = () => {
    if (totalHits > 12) {
      return (
        <Button
          setCurrentPage={setCurrentPage}
          getMoreImages={getMoreImages}
          currentPage={currentPage}
        />
      );
    }
  };

  return (
    <>
      <ul className={styles.gallery}>
        {imageList.map(image => {
          return (
            <div key={image.id}>
              <ImageGalleryItem
                id={image.id}
                url={image.imgUrl}
                setModal={setModal}
                image={image}
                setSelectedImage={setSelectedImage}
              />
              <Modal
                largeUrl={selectedImage.largeImgUrl}
                modal={modal}
                setModal={setModal}
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
  imageList: PropTypes.array,
  setCurrentPage: PropTypes.func,
  getMoreImages: PropTypes.func,
  currentPage: PropTypes.number,
  totalHits: PropTypes.number,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  setSelectedImage: PropTypes.func,
  selectedImage: PropTypes.object,
};
