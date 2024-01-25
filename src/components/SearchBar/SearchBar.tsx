import React from "react";
import styles from "../../styles/SearchBar/SearchBar.module.scss";
import { MoviesContext } from "../../context/MoviesContext";

const SearchBar: React.FC = () => {
  const context = React.useContext(MoviesContext);
  const [search, setSearch] = React.useState<string | undefined>(
    context?.search
  );

  React.useEffect(() => {
    if (context) {
      context.setSearch(search || "");
    }
  }, [context, search]);

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search here"
        value={search || ""}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className={styles.searchBar__field}
      />
    </div>
  );
};

export default SearchBar;
