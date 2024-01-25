import React, { ReactNode } from "react";
import { MoviesServices } from "../services/modules/movies";
import { MoviesContextProps } from "../types/moviesContextProps.types";

export const MoviesContext = React.createContext<
  MoviesContextProps | undefined
>(undefined);

interface MoviesStorageProps {
  children: ReactNode;
}

export const MoviesStorage: React.FC<MoviesStorageProps> = ({ children }) => {
  const [genres, setGenres] = React.useState<[]>([]);
  const [nowPlaying, setNowPlaying] = React.useState<[]>([]);
  const [popular, setPopular] = React.useState<[]>([]);
  const [topRated, setTopRated] = React.useState<[]>([]);
  const [upcoming, setUpcoming] = React.useState<[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [featured, setFeatured] = React.useState<boolean>(false);

  console.log(featured)

  const getNowPlayingMovies = React.useCallback(async () => {
    const allMovies = await MoviesServices.getNowPlayingMovies();
    setNowPlaying(allMovies);
  }, []);

  const getPopularMovies = React.useCallback(async () => {
    const allMovies = await MoviesServices.getPopularMovies();
    setPopular(allMovies);
  }, []);

  const getTopRatedMovies = React.useCallback(async () => {
    const allMovies = await MoviesServices.getTopRatedMovies();
    setTopRated(allMovies);
  }, []);

  const getUpcomingMovies = React.useCallback(async () => {
    const allMovies = await MoviesServices.getUpcomingMovies();
    setUpcoming(allMovies);
  }, []);

  const getAllGenres = React.useCallback(async () => {
    const allGenres = await MoviesServices.getAllGenres();
    setGenres(allGenres);
  }, []);

  React.useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);

  React.useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  React.useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);

  React.useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);

  React.useEffect(() => {
    getAllGenres();
  }, [getAllGenres]);

  return (
    <MoviesContext.Provider
      value={{
        nowPlaying,
        popular,
        topRated,
        upcoming,
        genres,
        search, 
        featured, 
        setSearch,
        setFeatured
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
