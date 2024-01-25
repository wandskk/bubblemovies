import React from "react";
import Modal from "../Modal/Modal";
import { Movie } from "../../types/movie.types";
import styles from "../../styles/ModalMovie/ModalMovie.module.scss";

interface ModalMovieProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

const ModalMovie: React.FC<ModalMovieProps> = ({ movie, isOpen, onClose }) => {
  const assetsUrl = process.env.THEMOVIEDB_URL;

  if (isOpen) {
    console.log(movie);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalMovie__content}></div>
    </Modal>
  );
};

export default ModalMovie;
