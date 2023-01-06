import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./ProfileStatus.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import EditProfile from "../EditProfile/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearCart, logoutUser } from "../../redux/actions";

function ProfileStatus({ showModal, closeModal }) {
  const { user, isAuthenticated, logout } = useAuth0();
  const dispatch = useDispatch();
  const actualUser = useSelector((state) => state.user);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(actualUser));
  }, [actualUser]);

  const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);

  function toggleEditProfileModal() {
    setEditProfileModalVisible(!editProfileModalVisible);
  }
  const logoutu = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
  };

  const handleLogOut = () => {
    logout();
    dispatch(clearCart());
  };

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
            variant="primary"
            onClick={() => handleLogOut()}
          >
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (Object.keys(actualUser).length !== 0) {
    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <img
                src={actualUser.data.searchUser.profileImage}
                alt="profile-img"
                className="profile-img-card"
                width="240px"
                height="240px"
              />
            </div>
            <br />
            <h1>Username: {actualUser.data.searchUser.username}</h1>
            <h3>
              Name:{actualUser.data.searchUser.firstname}{" "}
              {actualUser.data.searchUser.lastname}
            </h3>

            <h4>{actualUser.data.searchUser.email}</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
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
            onClick={() => logoutu()}
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
