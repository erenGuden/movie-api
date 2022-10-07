import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

const ModalComponent = ({ movie }) => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <>
      <button type="button" className="btn btn-dark" onClick={toggleModal}>
        View More
      </button>
      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Overview</strong>
          <p>{movie.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
