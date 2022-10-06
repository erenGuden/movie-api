import React from "react";
import MovieBox from "./MovieBox";

const MovieGrid = ({ movies }) => {
  return <section className="cards-class">
    {movies.map((movieReq)=>(
        <MovieBox key={movieReq.id} movie={movieReq} />
    ))}
  </section>
};

export default MovieGrid;

