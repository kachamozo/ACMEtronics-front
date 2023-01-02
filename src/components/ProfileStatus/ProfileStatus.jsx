import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ProfileStatus.css";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

function ProfileStatus({ showModal, closeModal }) {
  // const user = useSelector((state) => userProfile.state);

  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}

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
        <Button
          className="btn-sucess"
          variant="primary"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileStatus;
