import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { MoviesContext } from "../../context/MoviesContext";
import styles from "../../styles/MoviesList/MoviesList.module.scss";

const MoviesList = () => {
  const movies = React.useContext(MoviesContext);
  console.log(movies);

  const renderMoviesList = () => {
    return (
      movies &&
      movies.data.map((movie) => (
        <React.Fragment key={movie.id}>
          <MovieItem movie={movie} />
        </React.Fragment>
      ))
    );
  };

  return (
    <section className={`${styles.moviesList} container`}>
      <header className={styles.moviesList__header}>
        <h1 className={styles.moviesList__title}>Popular movies</h1>

        <div className={styles.moviesList__toggle}>
          <input type="checkbox" id="featured" />
          <label htmlFor="featured">Featured</label>
        </div>
      </header>

      <div className={styles.moviesList__grid}>{renderMoviesList()}</div>
    </section>
  );
};

export default MoviesList;
