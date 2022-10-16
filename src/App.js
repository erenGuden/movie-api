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
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState();
  const apiKey = "44c327a909613dc46bc70a8c7e59ea18";

  useEffect(() => {
    setCurrentPage(1);
    query 
      ? getSearchedMovie() 
      : getPopularMovies();
  }, [query]);

  const getSearchedMovie = async (page = 1) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;
    const searchResult = await axios(searchUrl);
    setMovies(searchResult.data.results);
    setTotalPages(searchResult.data.total_pages);
  };

  const getPopularMovies = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&query&page=${page}`;
    const result = await axios(url);
    setMovies(result.data.results);
  };

  const handlePageChange = (e, pageNumber = totalPages) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
    query 
      ? getSearchedMovie(pageNumber) 
      : getPopularMovies(pageNumber);
  };

  return (
    <div className="main-class">
      <div className="container-class">
        <Header />
        <Search getQuery={setQuery} />
        <MovieGrid movies={movies} />
        <Pagination currentPage={currentPage} onClick={handlePageChange} />
      </div>
    </div>
  );
}

export default App;
