import React from "react";
import { Modal } from "react-bootstrap";

export const CryptoModal = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-white'>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-white'>
          <p>Connect your wallet to the Blubird platform</p>

          <div className='wallet-list'>
            <a
              href='#'
              className='wallet-btn'
            >
              <img
                src='/assets/meta.png'
                width='32'
                alt=''
              />
              <span className='ms-2'>MetaMask</span>
            </a>

            <a
              href='#'
              className='wallet-btn'
            >
              <img
                src='/assets/walletc.png'
                width='32'
                alt=''
              />
              <span className='ms-2'>Wallet Connect</span>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
