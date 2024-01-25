import { SetStateAction } from "react";
import { Movie } from "./movie.types";
import { Genre } from "./genre.types";

export interface MoviesContextProps {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
    genres: Genre[];
    search: string;
    featured: boolean;
    selected: string;
    loading: boolean;
    setSearch: React.Dispatch<SetStateAction<string>>;
    setSelected: React.Dispatch<SetStateAction<string>>;
    setFeatured: React.Dispatch<SetStateAction<boolean>>;
}