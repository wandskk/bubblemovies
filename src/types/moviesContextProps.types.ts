import { SetStateAction } from "react";
import { Movie } from "./movie.types";

export interface MoviesContextProps {
    data: Movie[];
    setData: React.Dispatch<SetStateAction<[]>>;
}