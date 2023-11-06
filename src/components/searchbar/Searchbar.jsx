import PropTypes from 'prop-types';
import styles from './searchbar.module.css';

export function Searchbar({ onSubmit, inputValue, change }) {
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
            change(e.target.value);
          }}
          type="text"
          autoComplete="off"
          value={inputValue}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  inputValue: PropTypes.string,
  change: PropTypes.func,
};
