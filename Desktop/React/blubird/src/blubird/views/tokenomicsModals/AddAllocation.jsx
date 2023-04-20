import { Modal } from "react-bootstrap";

export const AddAllocation = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        size='lg'
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <div className='text-white'>
            <h1 className='modal-title fs-5'>Add Allocation</h1>
            <p className='mb-0'>Input your allocation details</p>
          </div>
        </Modal.Header>

        <div className='modal-body'>
          {/*  <!-- FORM --> */}
          <form action=''>
            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <input
                    type='text'
                    placeholder='Enter Name'
                    className='form-control'
                  />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <input
                    type='text'
                    placeholder='Enter $ Total '
                    className='form-control'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <input
                    type='text'
                    placeholder='Enter Price'
                    className='form-control'
                  />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <input
                    type='text'
                    placeholder='Enter Immediate % Release '
                    className='form-control'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <select className='form-select'>
                    <option>Select Vesting Schedule</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <select className='form-select'>
                    <option>Select Lock-Up period</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <input
                    type='text'
                    placeholder='Sort Order'
                    className='form-control'
                  />
                </div>
              </div>
            </div>

            <div className='d-grid'>
              <button
                type='submit'
                className='btn btn-primary btn-block'
              >
                SUBMIT
              </button>
            </div>
          </form>
          {/*  <!-- END FORM --> */}
        </div>
      </Modal>
    </>
  );
};
