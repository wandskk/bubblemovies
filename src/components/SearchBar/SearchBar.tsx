import React from "react";
import styles from "../../styles/SearchBar/SearchBar.module.scss";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search here"
      className={styles.searchBar}
    />
  );
};

export default SearchBar;
