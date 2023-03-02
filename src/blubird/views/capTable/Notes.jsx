import { Offcanvas } from "react-bootstrap";

export const Notes = ({ show, hide }) => {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={hide}
        placement='end'
        backdrop='static'
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className='offcanvas-body'>
            <div className='d-flex align-items-center justify-content-between'>
              <h5>Notes</h5>
              <a
                href='#'
                className='fs-5'
              >
                <i className='fa-solid fa-circle-plus'></i>
              </a>
            </div>

            <div className='note-box'>
              <p>
                <small>00/00/0000</small>
              </p>
              <h6>This is a note</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptas amet illo ut, blanditiis perferendis excepturi
                provident minus inventore dolorum natus sit officia porro eius
                ducimus. Alias officia soluta autem!
              </p>
            </div>

            <div className='note-box'>
              <p>
                <small>00/00/0000</small>
              </p>
              <h6>This is a note</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptas amet illo ut, blanditiis perferendis excepturi
                provident minus inventore dolorum natus sit officia porro eius
                ducimus. Alias officia soluta autem!
              </p>
            </div>

            <div className='note-box'>
              <p>
                <small>00/00/0000</small>
              </p>
              <h6>This is a note</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                voluptas amet illo ut, blanditiis perferendis excepturi
                provident minus inventore dolorum natus sit officia porro eius
                ducimus. Alias officia soluta autem!
              </p>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
