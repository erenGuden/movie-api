import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";
import MovieGrid from "./MovieGrid";
import Search from "./Search";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 500;
  const apiKey = "44c327a909613dc46bc70a8c7e59ea18";

  useEffect(() => {
    query
      ? getSearchedMovie()
      : getPopularMovies();
  }, [currentPage, query]);

  const getSearchedMovie = async () => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${currentPage}`;
    const searchResult = await axios(searchUrl);
    setMovies(searchResult.data.results);
  }

  const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&query&page=${currentPage}`;
    const result = await axios(url);
    setMovies(result.data.results);
  };

  const handlePageChange = (e, pageNumber = totalPages) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <div className="main-class">
      <div className="container-class">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <MovieGrid movies={movies} />
        <Pagination currentPage={currentPage} onClick={handlePageChange} />
      </div>
    </div>
  );
}

export default App;
