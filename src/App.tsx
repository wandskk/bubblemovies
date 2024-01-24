import MoviesList from "./components/MoviesList/MoviesList";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesStorage } from "./context/MoviesContext";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MoviesStorage>
          <Header />
          <Routes>
            <Route path="/" element={<MoviesList />} />
          </Routes>
        </MoviesStorage>
      </BrowserRouter>
    </>
  );
}
