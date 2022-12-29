import React from "react";
import "./ProfileStatus.css";

function ProfileStatus({ showModal, closeModal }) {
  if (!showModal) return null;

  return (
    <div class="modal">
      <div class="modal-header">
        <h2>User Information</h2>
      </div>
      <div class="modal-body">{/* Add user information here  */}</div>
      <div class="modal-footer">
        <button id="logout-button" onClick={closeModal}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileStatus;
