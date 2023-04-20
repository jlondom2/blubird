import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AddProject } from "../addProject/AddProject";
import { showModal1 } from "../../../store/addProject/addProjectSlice";

export const GetStarted = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
  };

  const { modal1, modal2 } = useSelector((state) => state.addProject);

  const handleShowCompany = () => {
    dispatch(showModal1());
  };

  return (
    <>
      <Modal
        show={show}
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

      <AddProject />
    </>
  );
};
