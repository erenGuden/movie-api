import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const IMG = "https://image.tmdb.org/t/p/w500";
const MovieBox = ({ movie }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
              <strong>Language: </strong>
              {movie.original_language}
            </li>
            <li>
              <strong>Score:</strong> {movie.vote_average}
            </li>
            <div className="card-body"></div>
            <button type="button" className="btn btn-dark" onClick={handleShow}>
              View Overview
            </button>
            <Modal show={show} onHide={handleClose} >
              <Modal.Header closeButton>
                <Modal.Title>
                  <h3>{movie.title}</h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{movie.overview}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            {/* <li>
              <strong>Overview:</strong> {movie.overview}
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
