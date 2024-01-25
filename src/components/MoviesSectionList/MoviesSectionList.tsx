import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { MoviesContext } from "../../context/MoviesContext";
import styles from "../../styles/MoviesSectionList/MoviesSectionList.module.scss";

interface MoviesSectionListProps {
  sectionTitle: string;
  type: "nowPlaying" | "popular" | "topRated" | "upcoming";
}

const MoviesSectionList: React.FC<MoviesSectionListProps> = ({
  sectionTitle,
  type,
}) => {
  const context = React.useContext(MoviesContext);

  const typesData = {
    nowPlaying: context?.nowPlaying,
    popular: context?.popular,
    topRated: context?.topRated,
    upcoming: context?.upcoming,
  };

  let data = typesData[type];

  data = data
    ?.filter((movie) =>
      context?.search && context?.search.length > 0
        ? movie.title.toLowerCase().includes(context.search.toLowerCase())
        : true
    )
    .filter((movie) => (context?.featured ? movie.featured : true))
    .filter((movie) => {
      if (context?.selected === "0") {
        return true;
      } else {
        return movie.genre_ids.toString().includes(context?.selected || "0");
      }
    });

  if (data?.length === 0) return null;
  return (
    <section className={`${styles.moviesSectionList} container`}>
      <header className={styles.moviesSectionList__header}>
        <h2 className={styles.moviesSectionList__title}>{sectionTitle}</h2>
      </header>

      <div className={styles.moviesSectionList__scroll}>
        <div className={styles.moviesSectionList__scroll__content}>
          {data &&
            data.length > 0 &&
            data.map((movie) => (
              <React.Fragment key={movie.id}>
                <MovieItem movie={movie} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesSectionList;
