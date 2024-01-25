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
  const [selected, setSelected] = React.useState<string>("0");
  const [loading, setLoading] = React.useState<boolean>(false);

  const getData = React.useCallback(async () => {
    setLoading(true);
    const genresMovies = await MoviesServices.getAllGenres();
    const popularMovies = await MoviesServices.getPopularMovies();
    const topRatedMovies = await MoviesServices.getTopRatedMovies();
    const nowPlayingMovies = await MoviesServices.getNowPlayingMovies();
    const upcomingMovies = await MoviesServices.getUpcomingMovies();

    setGenres(genresMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setNowPlaying(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    setLoading(false);
  }, []);

  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <MoviesContext.Provider
      value={{
        nowPlaying,
        popular,
        topRated,
        upcoming,
        genres,
        search,
        selected,
        featured,
        loading,
        setSelected,
        setSearch,
        setFeatured,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
