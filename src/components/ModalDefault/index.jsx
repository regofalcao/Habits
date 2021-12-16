import ReactModal from "react-modal";

import { useState, useEffect } from "react";

import "./styles.css";

const ModalDefault = ({ isOpen, setIsOpen, children }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          color: "#333",
          borderRadius: "8px",
          border: "none",
          padding: "35px 28px",
        },
        overlay: {
          backgroundColor: "rgba(51,51,51,0.5)",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default ModalDefault;
