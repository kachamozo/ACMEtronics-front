import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ProfileStatus.css";
import { useSelector } from "react-redux";

function ProfileStatus({ showModal, closeModal }) {
  // const user = useSelector((state) => user.state);

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <p>Name: {user.name}</p>
        <p>Email: {user.email}</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-sucess" variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button className="btn-sucess" variant="primary">
          Edit information
        </Button>
        <Button className="btn-sucess" variant="primary">
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileStatus;
