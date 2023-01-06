import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./EditProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser, deleteUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function EditProfile({ showModal, closeModal }) {
  const actualUser = useSelector((state) => state.user.data.searchUser);
  console.log(actualUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(actualUser);

  console.log(userData);

  useEffect(() => {
    if (
      Object.keys(actualUser).length !== 0 &&
      Object.keys(userData).length !== 0
    ) {
      setUserData(actualUser);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      id: userData.id,
      firstname: userData.firstname,
      lastname: userData.lastname,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      profileImage: userData.profileImage,
    };
    console.log(userData.id);
    // dispatch(updateUser({ id: userData.id, updatedUser }));
    dispatch(updateUser(userData.id, updatedUser));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleDelete = () => {
    dispatch(deleteUser(userData.id));
    navigate("/home");
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>First Name: </Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="First Name"
              value={userData.firstname}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Last Name: </Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={userData.lastname}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>

          <br />
          <Form.Group>
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <br />

          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={(event) => handleChange(event)}
            />{" "}
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <br />

          <Form.Group>
            <Form.Label>Profile Image: </Form.Label>
            <Form.Control
              type="text"
              name="profileImage"
              placeholder="Profile Image"
              value={userData.profileImage}
              onChange={(event) => handleChange(event)}
            />{" "}
            {userData.profileImage && (
              <img
                src={userData.profileImage}
                alt="Profile pic"
                height="120px"
                width="120px"
              />
            )}
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={() => handleDelete()}>
          Delete Account
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfile;
