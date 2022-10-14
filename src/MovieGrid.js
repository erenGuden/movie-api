
import React from "react";
import MovieBox from "./MovieBox";

const MovieGrid = ({ movies }) => {
  return (	
    <section className="cards-class">
      {movies.map((movieReq) => (
        <MovieBox key={movieReq.id} movie={movieReq} />
      ))}
      {!movies.length && (
        <div className="result-class">
          No Movies Found...
        </div>
      )}
    </section>
  );
};

export default MovieGrid;