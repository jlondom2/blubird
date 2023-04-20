import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AddAllocation } from "../tokenomicsModals/AddAllocation";
import { QuickSetup } from "../tokenomicsSetup/QuickSetup";
import { GetStarted } from "../tokenomicsFirstTime/GetStarted";

export const NoDemo = () => {
  const [showQuick, setShowQuick] = useState(false);

  const [show, setShow] = useState(true);

  const handleQuickSetup = () => {
    setShowQuick(true);
  };

  return (
    <>
      <div className='mt-5'>
        <div className='row text-center'>
          <div className='col-md-6 mx-auto'>
            <div className='notification d-flex align-items-center justify-content-between mx-auto'>
              <div>
                <i className='fas fa-check-circle fs-4 text-white'></i>
              </div>
              <div className='text-start'>
                <h6 className='mb-0'>Project Created</h6>
                <p className='mb-0'>
                  <small>Your project has been successfully created.</small>
                </p>
              </div>
              <div>
                <button
                  type='button'
                  className='btn-close btn-close-white'
                  aria-label='Close'
                ></button>
              </div>
            </div>
          </div>
        </div>

        <div className='row mb-5'>
          <div className='col-md-8 mx-auto'>
            <div className='setup-box mt-5'>
              <div className='text-end'>
                <button
                  type='button'
                  className='btn-close btn-close-white'
                  aria-label='Close'
                ></button>
              </div>
              <h4 className='mb-4'>Tokenomics Setup</h4>

              <p className='mb-1'>
                <strong>Quick Setup</strong>
              </p>
              <p>Want to quickly and easily set up your tokenomics?</p>
              <div className='d-grid mb-5'>
                <a
                  href='#'
                  className='btn btn-primary'
                  onClick={handleQuickSetup}
                >
                  Start Quick Setup
                </a>
              </div>

              <p className='mb-1'>
                <strong>Advanced Setup</strong>
              </p>
              <p>Want or need more advanced tokenomic details?</p>

              <div className='d-grid mb-5'>
                <a
                  href='#'
                  className='btn btn-primary'
                >
                  Start Advanced Setup
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetStarted
        show={show}
        setShow={setShow}
      />

      <QuickSetup
        show={showQuick}
        setShow={setShowQuick}
      />
    </>
  );
};
