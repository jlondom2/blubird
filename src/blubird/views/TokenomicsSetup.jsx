import { useState } from "react";
import { Link } from "react-router-dom";
import { QuickSetup } from "./tokenomicsSetup/QuickSetup";

export const TokenomicsSetup = () => {
  const [quickSetup, setQuickSetup] = useState(false);

  const handleQuickSetup = () => {
    setQuickSetup(true);
  };
  return (
    <>
      <h4 className='text-white mt-5'>Tokenomics Setup</h4>

      <div className='row text-white mt-5'>
        <div className='col-lg-4'>
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
            <a
              href='#'
              className='btn btn-primary btn-block'
            >
              Start Advanced Setup
            </a>
          </div>
        </div>
      </div>

      {quickSetup && (
        <QuickSetup
          setShow={setQuickSetup}
          show={quickSetup}
        />
      )}
    </>
  );
};
