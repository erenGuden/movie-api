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
    getPopularMovies();
  }, [currentPage]);

  useEffect(() => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
    const searchMovies = async () => {
      if (!query) return getPopularMovies();
      const searchResult = await axios(searchUrl + query);
      setMovies(searchResult.data.results);
    };
    searchMovies();
  }, [query]);

  const getPopularMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&query&page=${currentPage}`;
    const fetchMovies = async () => {
      const result = await axios(url);
      setMovies(result.data.results);
    };
    fetchMovies();
  };

  const handlePageChange = (pageNumber = totalPages) =>
    setCurrentPage(pageNumber);

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
