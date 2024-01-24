import { SetStateAction } from "react";
import { Movie } from "./movie.types";
import { Genre } from "./genre.types";

export interface MoviesContextProps {
    data: Movie[];
    genres: Genre[];
    setData: React.Dispatch<SetStateAction<[]>>;
}