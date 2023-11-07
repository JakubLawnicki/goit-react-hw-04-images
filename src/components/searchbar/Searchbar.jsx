import PropTypes from 'prop-types';
import styles from './searchbar.module.css';

export function Searchbar({
  onSubmit,
  search,
  setSearch,
  setImageList,
  setCurrentPage,
  setTotalHits,
  setLoading,
}) {
  return (
    <header className={styles.searchbar}>
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <button type="submit" className={styles.button}>
          <span className={styles['button-label']}>Search</span>
        </button>

        <input
          className={styles.input}
          onChange={e => {
            setSearch((search = e.target.value));
            setImageList([]);
            setCurrentPage(1);
            setTotalHits(0);
            setLoading(false);
          }}
          type="text"
          autoComplete="off"
          value={search}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  search: PropTypes.string,
  setSearch: PropTypes.func,
  setImageList: PropTypes.func,
  setCurrentPage: PropTypes.func,
  setTotalHits: PropTypes.func,
  setLoading: PropTypes.func,
};
