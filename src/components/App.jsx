import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Loader } from './loader/Loader';
import { useState } from 'react';
import axios from 'axios';

export function App() {
  const [search, setSearch] = useState('');
  const [imageList, setImageList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const key = '39408745-32e39ba950214e66e33847e97';

  const onSubmit = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://pixabay.com/api/?q=${search}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const array = response.data.hits;
    const total = response.data.totalHits;
    const newArray = array.map(item => {
      return {
        id: item.id,
        imgUrl: item.webformatURL,
        largeImgUrl: item.largeImageURL,
      };
    });
    setImageList(imageList.concat(newArray));
    setTotalHits(total);
    setLoading(false);
  };

  const getMoreImages = async page => {
    const current = page + 1;
    const response = await axios.get(
      `https://pixabay.com/api/?q=${search}&page=${current}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const array = response.data.hits;
    const newArray = array.map(item => {
      return {
        id: item.id,
        imgUrl: item.webformatURL,
        largeImgUrl: item.largeImageURL,
      };
    });
    setImageList(imageList.concat(newArray));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar
        onSubmit={onSubmit}
        setSearch={setSearch}
        search={search}
        setImageList={setImageList}
        setLoading={setLoading}
        setCurrentPage={setCurrentPage}
        setTotalHits={setTotalHits}
      />
      {loading ? (
        <Loader />
      ) : (
        <ImageGallery
          imageList={imageList}
          setCurrentPage={setCurrentPage}
          getMoreImages={getMoreImages}
          currentPage={currentPage}
          totalHits={totalHits}
          modal={modal}
          setModal={setModal}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}
