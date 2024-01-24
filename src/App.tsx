import "./styles.css";
import MoviesList from "./components/MovieList/MoviesList";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
