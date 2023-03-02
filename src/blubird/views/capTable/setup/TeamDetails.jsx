import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModals } from "../../../../store/captable/captableSlice";

export const TeamDetails = () => {
  const { teamDetailsModal } = useSelector((state) => state.captable);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        show={teamDetailsModal}
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
            <div className='step'>
              <div className='step-circle'></div>
              <span className='label'>Advisory Details</span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
