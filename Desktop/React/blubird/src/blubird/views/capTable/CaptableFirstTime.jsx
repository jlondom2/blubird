import React from "react";

export const CaptableFirst = () => {
  return (
    <>
      <div className='mt-5'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <div className='setup-box mt-5'>
              <div className='text-end'>
                <button
                  type='button'
                  class='btn-close btn-close-white'
                  aria-label='Close'
                ></button>
              </div>
              <h4 className='mb-4'>Cap Table Setup</h4>

              <p className='mb-1'>
                <strong>Quick Setup</strong>
              </p>
              <p>Want to quickly and easily set up your tokenomics?</p>
              <div className='d-grid mb-5 gap-3'>
                <a
                  href='#'
                  className='btn btn-primary'
                >
                  Import From Tokenomics
                </a>

                <a
                  href='#'
                  className='btn btn-primary'
                >
                  Upload CSV
                </a>
              </div>

              <p>
                Need the CSV template?{" "}
                <a
                  href='#'
                  className='text-white'
                >
                  {" "}
                  <strong>Download</strong>
                </a>
              </p>

              <p className='mb-1'>
                <strong>Manual Setup</strong>
              </p>
              <p>Need to manually input your cap table?</p>

              <div className='d-grid mb-5 gap-3'>
                <a
                  href='#'
                  className='btn btn-primary'
                >
                  Manually Set-up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
