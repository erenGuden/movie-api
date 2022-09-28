import React from "react";

const IMG = "https://image.tmdb.org/t/p/w500";
const MovieBox = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={IMG + movie.poster_path} alt="" />
        </div>
        <div className="card-back">
          <h1>{movie.title}</h1>
          <ul>
            <li>
              <strong>Release date:</strong> {movie.release_date}
            </li>
            <li>
              <strong>Score:</strong> {movie.popularity}
            </li>
            <li>
              <strong>Overview:</strong> {movie.overview}
            </li>
            <li>
              <strong>Count:</strong> {movie.vote_count}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
