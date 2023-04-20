import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModals,
  showTeamDetails,
} from "../../../../store/captable/captableSlice";

export const RoundDetails = () => {
  const { roundDetailsModal } = useSelector((state) => state.captable);
  const dispatch = useDispatch();

  const showTeam = () => {
    dispatch(showTeamDetails());
  };

  return (
    <>
      <Modal
        show={roundDetailsModal}
        onHide={() => dispatch(closeModals())}
        className='text-white'
      >
        <Modal.Header closeButton>
          <Modal.Title>Cap Table Setup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*  <!-- PROGRESS STEPS --> */}
          <div className='progress-steps'>
            <div className='step done'>
              <div className='step-circle'></div>
              <span className='label'>Token Details</span>
            </div>

            <div className='step done'>
              <div className='step-circle'></div>
              <span className='label'>Round Details</span>
            </div>
            <div className='step'>
              <div className='step-circle'></div>
              <span className='label'>Team Details</span>
            </div>
            <div className='step'>
              <div className='step-circle'></div>
              <span className='label'>Advisory Details</span>
            </div>
          </div>

          <form action=''>
            <div className='mb-3'>
              <h6>
                <strong>Round Details</strong>
              </h6>
              <p>How Many Rounds?</p>
              <input
                type='text'
                placeholder='Enter Amount of Rounds'
                className='form-control'
              />
            </div>

            <div className='mb-3 mt-4'>
              <p>Name</p>
              <select
                name=''
                className='form-select'
                id=''
              >
                <option value=''>Select Round Name</option>
                <option value='1'>Round Name 1</option>
                <option value='2'>Round Name 2</option>
              </select>
            </div>

            <div className='mb-3'>
              <p>Token Amounts</p>
              <input
                type='text'
                placeholder='Enter Amount or Percentaje'
                className='form-control'
              />
            </div>

            <div className='mb-3 mt-4'>
              <p>Round Vesting Schedule</p>

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
                onClick={showTeam}
                role='button'
                className='btn btn-primary btn-block'
              >
                NEXT
              </a>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
