import MoviesSectionList from "./components/MoviesSectionList/MoviesSectionList";
import Header from "./components/Header/Header";
import { MoviesStorage } from "./context/MoviesContext";
import "./styles.css";

export default function App() {    
  return (
    <>
      <MoviesStorage>
        <Header />
        <MoviesSectionList sectionTitle="Popular" type="popular" />
        <MoviesSectionList sectionTitle="Now playing" type="nowPlaying" />
        <MoviesSectionList sectionTitle="Top rated" type="topRated" />
        <MoviesSectionList sectionTitle="Upcoming" type="upcoming" />
      </MoviesStorage>
    </>
  );
}
