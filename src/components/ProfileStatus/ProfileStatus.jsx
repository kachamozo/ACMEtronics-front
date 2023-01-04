import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./ProfileStatus.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import EditProfile from "../EditProfile/EditProfile";

function ProfileStatus({ showModal, closeModal }) {
  const { user, isAuthenticated, logout } = useAuth0();

  const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);

  function toggleEditProfileModal() {
    setEditProfileModalVisible(!editProfileModalVisible);
  }

  if (isAuthenticated) {
    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="green_btn"
            variant="secondary"
            onClick={closeModal}
          >
            Close
          </Button>

          <Button
            className="green_btn"
            variant="primary"
            onClick={toggleEditProfileModal}
          >
            Edit Profile
          </Button>
          <Button
            className="green_btn"
            variant="primary"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </Modal.Footer>
        {editProfileModalVisible && (
          <EditProfile
            showModal={editProfileModalVisible}
            closeModal={toggleEditProfileModal}
          />
        )}
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Wlecome, Login to your account or Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Button className="green_btn" onClick={closeModal}>
              <Link to="/login" className="link-to">
                Login
              </Link>
            </Button>
            <Button className="green_btn" onClick={closeModal}>
              <Link to="/signup" className="link-to">
                Sign Up
              </Link>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ProfileStatus;
