import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const GetStarted = ({ show }) => {
  const [showCompanyInfo, setshowCompanyInfo] = useState(false);

  const [showUserAccess, setshowUserAccess] = useState(false);

  const [first, setFirst] = useState(show);

  const navigate = useNavigate();

  const handleClose = () => {
    setFirst(false);
  };

  const handleShowCompany = () => {
    setshowCompanyInfo(true);
    setFirst(false);
  };

  const handleCloseCompany = () => {
    setshowCompanyInfo(false);
    setFirst(false);
  };

  const handleShowUserAccess = () => {
    setshowUserAccess(true);
    setFirst(false);
    setshowCompanyInfo(false);
  };

  const handleCloseUserAccess = () => {
    setshowUserAccess(false);
    setFirst(false);
    setshowCompanyInfo(false);
  };
  return (
    <>
      <Modal
        show={first}
        onHide={handleClose}
        className='text-white'
        size='md'
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <div className='modal-body'>
            <p className='text-center'>
              <img
                src='/assets/start.png'
                width='90'
                alt=''
              />
            </p>
            <h4>Congrats! Let's get started</h4>
            <p>Let's create your first project. It's super simple.</p>

            <p>
              <a
                href='#'
                onClick={handleShowCompany}
                className='btn btn-primary'
              >
                Set Up Now
              </a>
            </p>
            <p className='mt-3'>
              <Link
                to='/'
                className='text-white'
              >
                <strong>Skip</strong>
              </Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showCompanyInfo}
        onHide={handleCloseCompany}
        className='text-white'
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <div className='modal-body'>
            <h4>Company Information</h4>
            <p>Enter the legal entity and the name for this project</p>

            <form action=''>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Legal Entity'
                    />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Project Name'
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 mx-auto'>
                  <div className='mt-3 d-grid'>
                    <a
                      href='#'
                      onClick={handleShowUserAccess}
                      className='btn btn-primary'
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showUserAccess}
        onHide={handleCloseUserAccess}
        className='text-white'
        size='md'
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <div className='modal-body'>
            <h4>User Access</h4>
            <p className='mb-5'>Select users to grant access to this project</p>

            <div className='user-access-box'>
              <strong>Billington, Corey</strong>
              <div className='d-flex align-items-center gap-3'>
                <span className='badge owner'>OWNER</span>
                <div className='user-icon-check'>
                  <i className='fas fa-check-circle'></i>
                </div>
              </div>
            </div>

            <div className='user-access-box'>
              <strong className='text-muted'>Worrel, George</strong>
              <div className='d-flex align-items-center gap-3'>
                <div className='user-icon-check'>
                  <a href='#'>
                    <i className='fas fa-plus-circle text-muted'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='user-access-box'>
              <strong className='text-muted'>Davis, Jason</strong>
              <div className='d-flex align-items-center gap-3'>
                <div className='user-icon-check'>
                  <a href='#'>
                    <i className='fas fa-plus-circle text-muted'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-md-8 mx-auto'>
                <div className='d-grid'>
                  <a
                    href=''
                    onClick={() => navigate("/tokenomics-first-time")}
                    className='btn btn-primary'
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
