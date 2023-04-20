import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal1,
  closeModal2,
  showModal2,
} from "../../../store/addProject/addProjectSlice";

export const AddProject = () => {
  const { modal1, modal2 } = useSelector((state) => state.addProject);

  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(closeModal1());
  };

  const hideModal2 = () => {
    dispatch(closeModal2());
  };

  const handleShowUserAccess = (params) => {
    dispatch(showModal2());
  };
  return (
    <>
      <Modal
        show={modal1}
        onHide={hideModal}
        className='text-white'
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <div className='modal-body'>
            <h4>Company Information</h4>
            <p>Enter the legal entity and the name for this project</p>

            <form action=''>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Legal Entity'
                    />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Project Name'
                    />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 mx-auto'>
                  <div className='mt-3 d-grid'>
                    <a
                      href='#'
                      onClick={handleShowUserAccess}
                      className='btn btn-primary'
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={modal2}
        onHide={hideModal2}
        className='text-white'
        size='md'
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <div className='modal-body'>
            <h4>User Access</h4>
            <p className='mb-5'>Select users to grant access to this project</p>

            <div className='user-access-box'>
              <strong>Billington, Corey</strong>
              <div className='d-flex align-items-center gap-3'>
                <span className='badge owner'>OWNER</span>
                <div className='user-icon-check'>
                  <i className='fas fa-check-circle'></i>
                </div>
              </div>
            </div>

            <div className='user-access-box'>
              <strong className='text-muted'>Worrel, George</strong>
              <div className='d-flex align-items-center gap-3'>
                <div className='user-icon-check'>
                  <a href='#'>
                    <i className='fas fa-plus-circle text-muted'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='user-access-box'>
              <strong className='text-muted'>Davis, Jason</strong>
              <div className='d-flex align-items-center gap-3'>
                <div className='user-icon-check'>
                  <a href='#'>
                    <i className='fas fa-plus-circle text-muted'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-md-8 mx-auto'>
                <div className='d-grid'>
                  <a
                    href=''
                    onClick={() => navigate("/tokenomics-first-time")}
                    className='btn btn-primary'
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
