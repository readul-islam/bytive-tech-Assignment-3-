import React from "react";
import ModalView from "./ModalView";

const Modal = ({ handleSubmit, selectedUser }) => {
  return (
    <>
      <ModalView selectedUser={selectedUser} handleSubmit={handleSubmit} />
    </>
  );
};

export default Modal;
