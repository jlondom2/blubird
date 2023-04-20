import { useState } from "react";
import { Modal } from "react-bootstrap";

import { useForm } from "react-hook-form";

export const AdvanceSetup = ({ show, setShow }) => {
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
          <Modal.Title>Tokenomics Advance Setup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-body'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio expedita vel quisquam. Quam, rerum soluta, quis
              laboriosam facere tempore id hic pariatur fuga aperiam modi, eaque
              culpa ipsum dolore! Voluptas?
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
