export const ReleaseScheduleEmpty = () => {
  return (
    <>
      {/* <!-- ToolBar Release Schedule STARTS --> */}

      <div className='toolbar mt-5 d-md-flex justify-content-between'>
        <div className='d-md-flex align-items-center'>
          <div className='me-5'>
            <a
              href='#'
              className='fs-6'
            >
              <i className='me-2 fa-solid fa-chevron-down'></i>Release Schedule
            </a>
          </div>
        </div>

        <div className='mt-3 mt-md-0'>
          {/*  * TODO: Add Allocation MODAL */}
          <a
            role='button'
            className='fs-6'
          >
            <i className='fa-solid fa-circle-plus'></i>
          </a>
        </div>
      </div>

      {/* <!-- ToolBar Release Schedule END --> */}

      {/* <!-- RELEASE SCHEDULE TABLE START --> */}
      <div className='mt-5'>
        <p className='text-white'>
          <strong>You have no releases assigned. Please add some</strong>
        </p>

        <p>
          <a
            href='#'
            className='btn btn-primary'
          >
            Add Releases
          </a>
        </p>
      </div>
      {/* <!-- RELEASE SCHEDULE TABLE END--> */}
    </>
  );
};
