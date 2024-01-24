import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { Movie } from "../../types/movie.types";

interface MoviesListProps {}

const MoviesList: React.FC<MoviesListProps> = () => {
  const movies: Movie[] = [];
  
  const moviesItems = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return <div className="movies-list">{moviesItems}</div>;
};

export default MoviesList;
