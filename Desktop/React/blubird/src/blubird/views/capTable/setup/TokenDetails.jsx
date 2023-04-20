import { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModals,
  showRoundDetails,
} from "../../../../store/captable/captableSlice";

export const TokenDetails = () => {
  const { tokenDetailsModal } = useSelector((state) => state.captable);
  const dispatch = useDispatch();

  const showNext = () => {
    dispatch(showRoundDetails());
  };

  return (
    <>
      <Modal
        show={tokenDetailsModal}
        className='text-white'
        onHide={() => dispatch(closeModals())}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cap Table Setup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*   <!-- PROGRESS STEPS --> */}
          <div className='progress-steps'>
            <div className='step done'>
              <div className='step-circle'></div>
              <span className='label'>Token Details</span>
            </div>

            <div className='step'>
              <div className='step-circle'></div>
              <span className='label'>Round Details</span>
            </div>
            <div className='step'>
              <div className='step-circle'></div>
              <span className='label'>Team Details</span>
            </div>
            <div className='step'>
              <div className='step-circle'></div>
              <span className='label'>Advisory Details</span>
            </div>
          </div>

          {/*  <!-- END PROGRESS STEPS --> */}

          {/*  <!-- FORM --> */}
          <form action=''>
            <div className='mb-3'>
              <h6>
                <strong>Token Details</strong>
              </h6>
              <p>Token Ticker</p>
              <input
                type='text'
                placeholder='Enter Tocken Ticker'
                className='form-control'
              />
            </div>

            <div className='mb-3 mt-4'>
              <p>Token Supply</p>
              <input
                type='text'
                placeholder='Enter Token Supply'
                className='form-control'
              />
            </div>

            <div className='mb-3 mt-4'>
              <p>Can People Earn Comission?</p>
              <select
                name=''
                className='form-select'
                id=''
              >
                <option value=''>Yes</option>
                <option value=''>No</option>
              </select>
            </div>

            <div className='d-grid mt-5'>
              <a
                role='button'
                onClick={showNext}
                className='btn btn-primary btn-block'
              >
                NEXT
              </a>
            </div>
          </form>
          {/*    <!-- END FORM --> */}
        </Modal.Body>
      </Modal>
    </>
  );
};
