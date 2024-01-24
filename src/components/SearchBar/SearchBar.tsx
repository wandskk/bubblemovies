import React from "react";
import styles from "../../styles/SearchBar/SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search here your favorite movie"
        className={styles.searchBar__field}
      />
    </div>
  );
};

export default SearchBar;
