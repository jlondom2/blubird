import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/addProject/addProjectSlice";

export const AddProject = () => {
  const { showModal } = useSelector((state) => state.addProject);

  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={hideModal}
        className='text-white'
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='progress-steps'>
            <div className='step done'>
              <div className='step-circle'></div>
              <span className='label'>Name & Privacy</span>
            </div>

            <div className='step'>
              <div className='step-circle'></div>
              <span className='label'>TBD</span>
            </div>
            <div className='step'>
              <div className='step-circle'></div>
              <span className='label'>TBD</span>
            </div>
          </div>

          <div className='project-pic my-5 text-center'>
            <a href='#'>
              <img
                src='./assets/n-icon.png'
                width='80'
                alt=''
              />
            </a>
          </div>

          <form action=''>
            <div className='mb-3'>
              <input
                type='text'
                placeholder='Token Name'
                className='form-control'
              />
            </div>

            <div className='d-grid'>
              <button
                type='submit'
                className='btn btn-primary btn-block'
              >
                NEXT
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
