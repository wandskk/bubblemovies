import React, { useState } from "react";
import styles from "../../styles/SearchBar/SearchBar.module.scss";
import { MoviesContext } from "../../context/MoviesContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const SearchBar: React.FC = () => {
  const context = React.useContext(MoviesContext);
  const [search, setSearch] = React.useState<string | undefined>(
    context?.search
  );
  const [featured, setFeatured] = useState<boolean>(false);

  React.useEffect(() => {
    if (context) {
      context.setSearch(search || "");
    }
  }, [context, search]);

  React.useEffect(() => {
    if (context) {
      context.setFeatured(featured);
    }
  }, [context, featured]);

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search here"
        value={search || ""}
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        }}
        className={styles.searchBar__field}
      />
      <ToggleSwitch
        id="toggle"
        text="Show featured"
        value={featured}
        onChange={(e) => setFeatured(e.target.checked)}
      />
    </div>
  );
};

export default SearchBar;
