import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AddAllocation } from "../tokenomicsModals/AddAllocation";

export const Allocations = () => {
  const [showAddAllocation, setShowAddAllocation] = useState(false);

  const handleShowAddAllocation = () => {
    setShowAddAllocation(true);
  };

  const [toggleAllocations, setToggleAllocations] = useState(true);
  const handleToggleAllocations = () => {
    setToggleAllocations(!toggleAllocations);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked((current) => !current);
  };

  return (
    <>
      {/*  <!-- ToolBar STARTS --> */}
      <div className='row mt-4'>
        <div className='col-md-8 mx-auto'>
          <div className='notification d-flex align-items-center justify-content-between mx-auto bg-info'>
            <div className='d-flex gap-3 align-items-center'>
              <div>
                <i className='fas fa-check-circle fs-4 text-white'></i>
              </div>
              <div className='text-start'>
                <h6 className='mb-0'>Demo Project Loaded</h6>
                <p className='mb-0'>
                  <small>
                    We have loaded a demo project for you to view. You can
                    create your own project (or delete the demo) from the
                    project menu
                  </small>
                </p>
              </div>
            </div>
            <div>
              <button
                type='button'
                className='btn-close btn-close-white'
                aria-label='Close'
              ></button>
            </div>
          </div>
        </div>
      </div>

      <div className='toolbar mt-4 d-md-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <div className='me-5'>
            <a
              role='button'
              onClick={handleToggleAllocations}
              className='fs-6'
            >
              {toggleAllocations ? (
                <FontAwesomeIcon
                  className='me-2'
                  icon='fa-solid fa-chevron-right'
                />
              ) : (
                <FontAwesomeIcon
                  className='me-2'
                  icon='fa-solid fa-chevron-down'
                />
              )}
              Allocations
            </a>
          </div>

          <div className='toolbar-tools'>
            <a
              href='#'
              className='mx-2'
            >
              <i className='fa-solid fa-magnifying-glass'></i>
            </a>
            <a
              href='#'
              className='mx-2'
            >
              <i className='fa-solid fa-bars'></i>
            </a>
            <a
              href='#'
              className='mx-2'
            >
              <i className='fa-solid fa-eye-slash'></i>
            </a>
            <a
              href='#'
              className='mx-2'
            >
              <i className='fa-solid fa-cloud-arrow-down'></i>
            </a>
          </div>
        </div>

        <div className='mt-3 mt-md-0'>
          {/*  * TODO: Add Allocation MODAL */}
          <a
            role='button'
            onClick={handleShowAddAllocation}
            className='fs-6'
          >
            <i className='fa-solid fa-circle-plus'></i>
          </a>

          <AddAllocation
            setShow={setShowAddAllocation}
            show={showAddAllocation}
          />
        </div>
      </div>

      {/* <!-- ToolBar END --> */}

      <div
        className={`main-table table-responsive my-4 ${
          toggleAllocations ? "show-box" : "hidden"
        } `}
      >
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th scope='col'>Bucket</th>
              <th scope='col'>Total Supply</th>
              <th scope='col'>% Total</th>
              <th scope='col'>Circ. Supply</th>
              <th scope='col'>% Total</th>
              <th scope='col'>Price</th>
              <th scope='col'>Amount Raised</th>
              <th scope='col'>Payment Length</th>
              <th scope='col'>Lockup Period</th>
              <th scope='col'>Immediate Release %</th>
              <th scope='col'>Subsequent Release %</th>
              <th
                className='text-center'
                scope='col'
              >
                <a
                  href='#'
                  className='fs-6'
                >
                  <i className='fa-solid fa-ellipsis-vertical'></i>
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={`${isChecked ? "row-bg" : ""}`}>
              <td>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox1'
                    value={isChecked}
                    onChange={handleChange}
                  />
                </div>
              </td>
              <td scope='row'>Seed Sale</td>
              <td>00,000,000,000</td>
              <td>00%</td>
              <td>00,000,000,000</td>
              <td>00%</td>
              <td>00,000,000,000</td>
              <td>00,000,000,000</td>
              <td>00</td>
              <td>00</td>
              <td>00%</td>
              <td>00%</td>
              <td className='text-center'>
                <a
                  href='#'
                  className='fs-6'
                >
                  <i className='fa-solid fa-ellipsis-vertical'></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
