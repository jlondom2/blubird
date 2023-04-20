import { useState } from "react";
import { Modal } from "react-bootstrap";
import { QuickSetupForm } from "./QuickSetupForm";
import { useForm } from "react-hook-form";

export const QuickSetup = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className='text-white'
      >
        <Modal.Header closeButton>
          <Modal.Title>Tokenomics Setup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-body'>
            <QuickSetupForm />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
