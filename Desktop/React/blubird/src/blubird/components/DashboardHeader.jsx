import { Link, NavLink } from "react-router-dom";

function DashboardHeader() {
  return (
    <>
      <div className='d-md-flex align-items-center justify-content-between'>
        <div>
          <div className='logo-bo mb-4'>
            <NavLink to='/'>
              <img
                src='/assets/logo.png'
                width='140'
                alt='BluBird'
              />
            </NavLink>
          </div>

          <div className='main-menu text-center d-lg-flex align-items-center mb-3 mb-md-0'>
            <div>
              <NavLink
                to='/'
                className='menu-item'
              >
                <i className='fa-solid fa-square-poll-vertical me-2'></i>
                Tokenomics
              </NavLink>

              <NavLink
                to='/captable'
                className='menu-item'
              >
                <i className='fa-solid fa-square-poll-vertical me-2'></i>
                Cap Table
              </NavLink>

              <NavLink
                to='/deployment'
                className='menu-item'
              >
                <i className='fa-solid fa-square-poll-vertical me-2'></i>
                Deployment
                <i className='fa-solid fa-lock text-orange ms-2'></i>
              </NavLink>
            </div>
          </div>
        </div>

        <div>
          <div className='top-base-box d-xl-flex align-items-center justify-content-between'>
            <div className='mx-3 mb-3 mb-xl-0'>
              <p className='small mb-0'>Initial Market Cap</p>
              <p className='mb-0'>
                <strong>$00,000,000,000</strong>
              </p>
            </div>

            <div className='mx-3 mb-3 mb-xl-0'>
              <p className='small mb-0'>LP</p>
              <p className='mb-0'>
                <strong>$00,000,000,000</strong>
              </p>
            </div>

            <div className='mx-3 mb-3 mb-xl-0'>
              <p className='small mb-0'>Market Cap - LP</p>
              <p className='mb-0'>
                <strong>$00,000,000,000</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default DashboardHeader;
