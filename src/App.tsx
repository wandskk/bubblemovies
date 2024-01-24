import "./styles.css";
import MoviesList from "./components/MovieList/MoviesList";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />        
        <main>
          <Routes>
            <Route path="/" element={<MoviesList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
