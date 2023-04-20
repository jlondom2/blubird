import { Link } from "react-router-dom";

function LayoutSideNav({ handleLogout }) {
  return (
    <div id='layoutSidenav_nav_2'>
      <nav
        className='sb-sidenav accordion sb-sidenav-dark'
        id='sidenavAccordion'
      >
        <div className='sb-sidenav-menu'>
          <div className='nav p-3 text-center'>
            <a
              href='#'
              className='mb-4'
            >
              <img
                src='/assets/dashboard.png'
                width='40'
                alt=''
              />
            </a>

            <a
              href='#'
              className='mb-4 fs-4 position-relative'
            >
              <i className='fa-solid fa-bell'></i>

              <span className='noti-bagde position-absolute top-0 start-80 translate-middle border-light rounded-circle'>
                <span className='visually-hidden'>Notifications unread</span>
              </span>
            </a>
          </div>
        </div>
        <div className='sb-sidenav-footer text-center'>
          {/*  <!-- Default dropend button --> */}
          <div className='dropend'>
            <a
              href='#'
              className='dropdown-toggle fs-5'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i className='fa-solid fa-circle-user'></i>
            </a>
            <ul className='dropdown-menu p-4'>
              {/*  <!-- Dropdown menu links --> */}
              <h6 className='mb-2'>
                <strong>Account</strong>
              </h6>

              <div className='mb-3'>
                <Link to='/profile'>
                  <i className='fa-solid fa-circle-user me-1'></i> Profile
                </Link>
              </div>

              <div className='mb-3'>
                <a href='#'>
                  <i className='fa-solid fa-cloud-sun'></i> Mode
                </a>
              </div>

              <div className='mb-0'>
                <a
                  role='button'
                  onClick={handleLogout}
                >
                  <i className='fa-solid fa-right-from-bracket'></i> Logout
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LayoutSideNav;
