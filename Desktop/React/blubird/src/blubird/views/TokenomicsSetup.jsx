import { useState } from "react";
import { Link } from "react-router-dom";
import { QuickSetup } from "./tokenomicsSetup/QuickSetup";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AdvanceSetup } from "./tokenomicsSetup/AdvanceSetup";

export const TokenomicsSetup = () => {
  const [quickSetup, setQuickSetup] = useState(false);
  const [advanceSetup, setAdvanceSetup] = useState(false);
  const [show, setShow] = useState(true);
  const { setupDone } = useSelector((state) => state.tokenomics);

  if (!setupDone) {
  }

  const handleQuickSetup = () => {
    setQuickSetup(true);
  };

  const handleAdvanceSetup = () => {
    setAdvanceSetup(true);
  };

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
            <div className='row text-white'>
              <div className='col-lg-12'>
                <h6>
                  <strong>Quick Setup</strong>
                </h6>
                <p>Want to quickly and easily setup your tokenomics?</p>

                <div className='d-grid mb-5'>
                  <button
                    onClick={handleQuickSetup}
                    className='btn btn-primary btn-block'
                  >
                    Star Quick Setup
                  </button>
                </div>

                <h6 className='mt-3'>
                  <strong>Advanced Setup</strong>
                </h6>
                <p>Want or need more advanced tokenomic details?</p>

                <div className='d-grid'>
                  <button
                    onClick={handleAdvanceSetup}
                    className='btn btn-primary btn-block'
                  >
                    Start Advanced Setup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {quickSetup && (
        <QuickSetup
          setShow={setQuickSetup}
          show={quickSetup}
        />
      )}

      {advanceSetup && (
        <AdvanceSetup
          setShow={setAdvanceSetup}
          show={advanceSetup}
        />
      )}
    </>
  );
};
