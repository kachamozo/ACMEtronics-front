// import React from "react";
// import { Modal, Button } from "react-bootstrap";
// import "./EditProfile.css";
// import { useAuth0 } from "@auth0/auth0-react";

// function EditProfile({ showModal, closeModal }) {
//   const { user, updateUser, isAuthenticated, loginWithRedirect } = useAuth0();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // update user information
//       await updateUser({
//         name: event.target.name.value,
//         email: event.target.email.value,
//       });

//       // user information was successfully updated
//       closeModal();
//     } catch (error) {
//       console.error("Error updating user information:", error);
//     }
//   };

//   const handleEditLinkClick = () => {
//     // Call the `loginWithRedirect` function with the desired options to redirect the user to the Auth0 login page
//     loginWithRedirect({
//       screen_hint: "change_password", // Display the change password screen
//       prompt: "login", // Force the user to login again
//     });
//   };

//   if (!isAuthenticated) {
//     return <p>You must be logged in to edit your profile.</p>;
//   }

//   return (
//     <Modal show={showModal} onHide={closeModal}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Profile</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             className="input"
//             type="text"
//             id="name"
//             defaultValue={user.name}
//           />
//           <br />
//           <label htmlFor="email">Email:</label>
//           <input
//             className="input"
//             type="email"
//             id="email"
//             defaultValue={user.email}
//           />
//           <br />
//           <label htmlFor="password">New password:</label>
//           <input className="input" type="password" id="password" />
//         </form>
//         <a href="#" onClick={handleEditLinkClick}>
//           Change password
//         </a>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" className="green_btn" onClick={closeModal}>
//           Cancel
//         </Button>
//         <Button variant="primary" type="submit" className="green_btn">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditProfile;

import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./EditProfile.css";
import { useAuth0 } from "@auth0/auth0-react";

function EditProfile({ showModal, closeModal }) {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleEditLinkClick = () => {
    // Call the `loginWithRedirect` function with the desired options to redirect the user to the Auth0 login page
    loginWithRedirect({
      screen_hint: "change_password", // Display the change password screen
      prompt: "none", // Force the user to login again
    });
  };

  if (!isAuthenticated) {
    return <p>You must be logged in to edit your profile.</p>;
  }

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <a href="#" onClick={handleEditLinkClick}>
          Change password
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="green_btn" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfile;
