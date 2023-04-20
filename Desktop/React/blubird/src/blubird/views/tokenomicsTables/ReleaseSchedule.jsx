export const ReleaseSchedule = () => {
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
      <div className='main-table table-responsive my-4'>
        {/*  <!-- main table  --> */}

        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Period</th>
              <th scope='col'>Seed Sale</th>
              <th scope='col'>Private Sale</th>
              <th scope='col'>Treasury</th>

              <th scope='col'>Team</th>
              <th scope='col'>Advisors</th>
              <th scope='col'>Public Sale</th>
              <th scope='col'>Marketing</th>
              <th scope='col'>Floating Liquidity</th>
              <th scope='col'>In-Game Rewards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope='row'>00</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!-- RELEASE SCHEDULE TABLE END--> */}
    </>
  );
};
