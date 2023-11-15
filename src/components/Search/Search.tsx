import { SearchProps } from 'global';
import styles from './Search.module.scss';
import useSearch from 'hooks/useSearch';

const Search = ({ data, onLocationSelected }: SearchProps) => {
  const {
    searchTerm,
    filteredData,
    showList,
    handleInputChange,
    handleInputClick,
    handleBlur,
    handleItemClick,
  } = useSearch({ data, onLocationSelected });

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={handleInputClick}
        onBlur={handleBlur}
      />
      {showList && (
        <ul className={styles.ul}>
          {filteredData.map((item: string) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;