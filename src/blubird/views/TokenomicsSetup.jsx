import { Link } from "react-router-dom";

export const TokenomicsSetup = () => {
  return (
    <>
      <h4 className='text-white mt-5'>Tokenomics Setup</h4>

      <div className='row text-white mt-5'>
        <div className='col-lg-6'>
          <h6>
            <strong>Quick Setup</strong>
          </h6>
          <p>Want to quickly and easily setup your tokenomics?</p>

          <div className='d-grid mb-5'>
            <Link
              to='/tokenomic-quick-setup'
              className='btn btn-primary btn-block'
            >
              Star Quick Setup
            </Link>
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
    </>
  );
};
