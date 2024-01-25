import React from "react";
import { Movie } from "../../types/movie.types";
import { date } from "../../resources/helpers/date/date";
import styles from "../../styles/MovieItem/MovieItem.module.scss";
import { MoviesContext } from "../../context/MoviesContext";

interface MovieItemProps {
  movie: Movie;
}

const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const context = React.useContext(MoviesContext);
  const genres = movie.genre_ids
    .map((genre) => context?.genres.find((g) => g.id === genre))
    .map((g) => g?.name)
    .join(" | ");

  return (
    <div className={styles.movieItem}>
      <div className={styles.movieItem__header}>
        {movie.featured && (
          <span className={styles.movieItem__featured}>Featured</span>
        )}
        <img
          className={styles.movieItem__poster}
          src={assetsUrl + movie.poster_path}
          alt=""
          draggable={false}
        />
      </div>
      <div className={styles.movieItem__footer}>
        <h4 className={styles.movieItem__title}>{movie.title}</h4>
        <p className={styles.movieItem__details}>
          {date.getYear(movie.release_date)} - {genres}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
