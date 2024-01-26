import React from "react";
import { MoviesContext } from "../../context/MoviesContext";
import styles from "../../styles/Filters/Filters.module.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Genre } from "../../types/genre.types";

const Filters = () => {
  const context = React.useContext(MoviesContext);
  const [selected, setSelected] = React.useState<string>("0");
  const [featured, setFeatured] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (context) {
      context.setFeatured(featured);
    }
  }, [context, featured]);

  React.useEffect(() => {
    if (context) {
      context.setSelected(selected);
    }
  }, [context, selected]);

  return (
    <div className={`${styles.filters} container`}>
      <div className={styles.filter__select}>
        <label htmlFor="genre">Filter by genre: </label>
        <select
          value={selected}
          className={styles.filter__select__field}
          onChange={(e) => setSelected(e.target.value)}
          id="genre"
        >
          <option value="0">All Genres</option>
          {context?.genres.map((option: Genre) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <ToggleSwitch
        id="toggle"
        text="Show featured"
        value={featured}
        onChange={(e) => setFeatured(e.target.checked)}
      />
    </div>
  );
};

export default Filters;
