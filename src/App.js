import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";
import MovieBox from "./MovieBox";
import MovieGrid from './MovieGrid'

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=44c327a909613dc46bc70a8c7e59ea18`;

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(url);
      setMovies(result.data.results);
      setIsLoading(false);
      console.log(result.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
        <Header />
        <MovieGrid movies={movies} />
      </div>
  );
}

export default App;
