import React from "react";

function LayoutSideNav1() {
  return (
    <>
      <div id='layoutSidenav_nav'>
        <nav
          className='sb-sidenav accordion sb-sidenav-dark'
          id='sidenavAccordion'
        >
          <div className='sb-sidenav-menu'>
            <div className='nav p-3'>
              <h4 className='text-white mb-3'>Projects</h4>

              <p className='text-white mb-4'>My Projects</p>

              <div className='sidenav-projects'>
                <a
                  href='#'
                  className='project-box d-flex align-items-center'
                >
                  <div className='me-2'>
                    <img
                      src='./assets/project_img.png'
                      width='30'
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='mb-0'>Project One</p>
                  </div>
                </a>
              </div>

              <div className='project-actions p-1 mt-2'>
                <a
                  href=''
                  data-bs-toggle='modal'
                  data-bs-target='#add_project'
                  className='d-flex align-items-center mb-2'
                >
                  <i className='fa-solid fa-circle-plus me-2'></i>
                  <span> Add Project</span>
                </a>

                <a
                  href='#'
                  className='d-flex align-items-center mb-2'
                >
                  <img
                    src='./assets/export_projects_white.png'
                    width='13'
                    className='me-2'
                    alt=''
                  />
                  <span> Browse All Projects</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default LayoutSideNav1;
