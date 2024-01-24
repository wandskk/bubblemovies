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
  const [data, setData] = React.useState<[]>([]);
  const [genres, setGenres] = React.useState<[]>([]);

  const getNowPlayingMovies = React.useCallback(async () => {
    const allMovies = await MoviesServices.getNowPlayingMovies();
    setData(allMovies);
  }, []);

  const getAllGenres = React.useCallback(async () => {
    const allGenres = await MoviesServices.getAllGenres();
    setGenres(allGenres);
  }, []);

  React.useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);

  React.useEffect(() => {
    getAllGenres();
  }, [getAllGenres]);

  return (
    <MoviesContext.Provider
      value={{
        data,
        genres,
        setData,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
