import React from "react";
import Modal from "./Modal";

const IMG = "https://image.tmdb.org/t/p/w500";
const MovieBox = ({ movie }) => {
  return (
    <div className="card-class">
      <div className="card-inner-class">
        <div className="card-front-class">
          <img src={IMG + movie.poster_path} alt="" />
        </div>
        <div className="card-back-class">
          <h1>{movie.title}</h1>
          <ul style={{ padding: '0px' }}>
            <li>
              <strong>Release date:</strong> {movie.release_date}
            </li>
            <li>
              <strong>Language: </strong>
              {movie.original_language}
            </li>
            <li>
              <strong>Score:</strong> {movie.vote_average}
            </li>
          </ul>
          <Modal movie={movie }/>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
