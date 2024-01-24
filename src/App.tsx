import MoviesList from "./components/MovieList/MoviesList";
import Header from "./components/Header/Header";
import BannerTop from "./components/BannerTop/BannerTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesStorage } from "./context/MoviesContext";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MoviesStorage>
          <Header />
          <BannerTop />
          <Routes>
            <Route path="/" element={<MoviesList />} />
          </Routes>
        </MoviesStorage>
      </BrowserRouter>
    </>
  );
}
