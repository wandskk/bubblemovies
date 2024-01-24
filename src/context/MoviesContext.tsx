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

  const getNowPlayingMovies = React.useCallback(async () => {
    const allMovies = await MoviesServices.getNowPlayingMovies();
    setData(allMovies);
  }, []);

  React.useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);

  return (
    <MoviesContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
