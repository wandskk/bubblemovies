import React from "react";
import MoviesSectionList from "./components/MoviesSectionList/MoviesSectionList";
import Header from "./components/Header/Header";
import { MoviesStorage } from "./context/MoviesContext";
import "./styles.css";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Filters from "./components/Filters/Filters";

const App = () => {
  return (
    <>
      <MoviesStorage>
        <Header />
        <Loading />
        <Filters />
        <MoviesSectionList sectionTitle="Popular" type="popular" />
        <MoviesSectionList sectionTitle="Now playing" type="nowPlaying" />
        <MoviesSectionList sectionTitle="Top rated" type="topRated" />
        <MoviesSectionList sectionTitle="Upcoming" type="upcoming" />
        <Footer />
      </MoviesStorage>
    </>
  );
};

export default App;
