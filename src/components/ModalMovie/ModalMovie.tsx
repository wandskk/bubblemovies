import React from "react";
import Modal from "../Modal/Modal";
import { Movie } from "../../types/movie.types";
import styles from "../../styles/ModalMovie/ModalMovie.module.scss";
import { date } from "../../resources/helpers/date/date";
import { MoviesContext } from "../../context/MoviesContext";

interface ModalMovieProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

const ModalMovie: React.FC<ModalMovieProps> = ({ movie, isOpen, onClose }) => {
  const context = React.useContext(MoviesContext);
  const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  const genres = movie.genre_ids
    .map((genre) => context?.genres.find((g) => g.id === genre))
    .map((g) => g?.name);

  const renderGenres = () => {
    return genres.map((genre) => (
      <span className={styles.modalMovie__genre} key={genre}>
        {genre}
      </span>
    ));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className={styles.modalMovie}
        style={{
          backgroundImage: `url(${assetsUrl + movie.backdrop_path})`,
        }}
      >
        <div className={styles.modalMovie__content}>
          <img
            className={styles.modalMovie__poster}
            src={assetsUrl + movie.poster_path}
          />

          <div className={styles.modalMovie__details}>
            <h3 className={styles.modalMovie__title}>{movie.title}</h3>

            <p className={styles.modalMovie__year}>
              {date.getYear(movie.release_date)}
            </p>

            <small className={styles.modalMovie__overview}>
              {movie.overview}
            </small>

            <p className={styles.modalMovie__genres}>{renderGenres()}</p>

            <div className={styles.modalMovie__actions}>
              <a href="" role="button" className={styles.modalMovie__action}>
                Watch Trailer
              </a>

              <button className={styles.modalMovie__action} onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMovie;
