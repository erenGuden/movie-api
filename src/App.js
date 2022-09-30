import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";
import MovieGrid from "./MovieGrid";
import Search from "./Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
 
  const apiKey = "44c327a909613dc46bc70a8c7e59ea18";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&query`;
    const fetchMovies = async () => {
      const result = await axios(url);
      setMovies(result.data.results);
      console.log(result.data.results);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
    const searchMovies = async () => {
      if (!query) return;
      console.log("search");
      const searchResult = await axios(searchUrl + query);
      setMovies(searchResult.data.results);
      console.log(searchResult.data.results);
    };
    searchMovies();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <MovieGrid movies={movies} />
    </div>
  );
}

export default App;
