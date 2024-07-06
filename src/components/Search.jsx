import { IoSearchSharp } from "react-icons/io5";

import styles from "./Search.module.css";

function Search({ value, setSearchValue, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Item"
        value={value}
        onChange={(e) => setSearchValue(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default Search;
