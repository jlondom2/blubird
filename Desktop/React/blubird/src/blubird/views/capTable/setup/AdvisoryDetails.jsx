import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModals } from "../../../../store/captable/captableSlice";

export const AdvisoryDetails = () => {
  const { advisoryDetailsModal } = useSelector((state) => state.captable);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        show={advisoryDetailsModal}
        onHide={() => dispatch(closeModals())}
        className='text-white'
      >
        <Modal.Header closeButton>
          <Modal.Title>Cap Table Setup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='progress-steps'>
            <div className='step done'>
              <div className='step-circle'></div>
              <span className='label'>Token Details</span>
            </div>

            <div className='step done'>
              <div className='step-circle'></div>
              <span className='label'>Round Details</span>
            </div>
            <div className='step done'>
              <div className='step-circle'></div>
              <span className='label'>Team Details</span>
            </div>
            <div className='step done'>
              <div className='step-circle'></div>
              <span className='label'>Advisory Details</span>
            </div>
          </div>

          <form action=''>
            <div className='mb-3'>
              <h6>
                <strong>Advisory Details</strong>
              </h6>
              <p>How many tokens allocated (or % of total)</p>
              <input
                type='text'
                placeholder='Enter Amount of Rounds'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <p>How many advisors have allocation?</p>
              <select
                name=''
                className='form-select'
                id=''
              >
                <option value=''>Select Amount of Advisors</option>
                <option value=''>1-10</option>
                <option value=''>11-100</option>
                <option value=''>100+</option>
              </select>
            </div>

            <div className='mb-3 mt-4'>
              <p>Advisor Details</p>
              <div className='mb-3'>
                <input
                  type='text'
                  placeholder='Enter Team Member Name'
                  className='form-control'
                />
              </div>

              <div className='mb-3'>
                <input
                  type='text'
                  placeholder='Enter Member Role'
                  className='form-control'
                />
              </div>

              <div className='mb-3'>
                <input
                  type='text'
                  placeholder='Ente Percentaje of Total Supply'
                  className='form-control'
                />
              </div>
            </div>

            <div className='mb-3 mt-4'>
              <p>Advisor Vesting Schedule</p>

              <div className='input-badge mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter %'
                />
                <span>TGE</span>
              </div>

              <div className='input-badge mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Amount'
                />
                <span>MONTH CLIFF</span>
              </div>

              <div className='input-badge mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Amount'
                />
                <span>MONTH VESTING</span>
              </div>

              <div className='input-badge mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Amount'
                />
                <span>PAYOUT FREQUENCY</span>
              </div>
            </div>

            <div className='mb-3'>
              <select
                name=''
                className='form-select'
                id=''
              >
                <option value=''>Select Payout Time Frame</option>
                <option value=''>Time 1</option>
                <option value=''>Time 2</option>
              </select>
            </div>

            <div className='d-grid mt-5'>
              <a
                href='#'
                className='btn btn-primary btn-block'
              >
                SUBMIT
              </a>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
