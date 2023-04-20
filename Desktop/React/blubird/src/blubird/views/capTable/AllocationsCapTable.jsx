import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Sidebar } from "../capTableSidebar/Sidebar";
import { Notes } from "./Notes";

export const AllocationsCapTable = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  return (
    <>
      {/* <!-- ToolBar STARTS --> */}

      <div className='toolbar mt-4 d-md-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <div className='me-5'>
            <a
              href='#'
              className='fs-6'
            >
              <i className='me-2 fa-solid fa-chevron-down'></i>Allocations
            </a>
          </div>

          <div className='toolbar-tools mt-3 mt-md-0'>
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

        <div>
          <a
            href='#'
            data-bs-toggle='modal'
            data-bs-target='#add_allocation'
            className='fs-6'
          >
            <i className='fa-solid fa-circle-plus'></i>
          </a>
        </div>
      </div>

      {/* <!-- ToolBar END --> */}

      {/*  <!-- CAP TABLE TABLE START --> */}
      <div className='main-table table-responsive my-4'>
        {/*  <!-- main table  --> */}

        <table className='table'>
          {/*   <!-- TABLE HEADER FOR EXPANDED VERSION --> */}
          {/* <thead>
                  <tr>
                    <th scope="col">
                      <small>Personal Information</small> <br />
                      <strong>Individual</strong>
                    </th>
                    <th style="border-right: 1px solid" scope="col"></th>
                    <th scope="col">
                      <small>Proposed Amounts</small> <br />
                      <strong>Seed Ant. Requested</strong>
                    </th>
                    <th scope="col">Seed Amt. Approved</th>
                    <th scope="col">Request Private</th>
                    <th scope="col">Approved Private</th>
                    <th scope="col">Total Proposed Amt.</th>
                    <th scope="col">Tokens Allocated (Seed)</th>
                  </tr>
                </thead>  */}

          {/* <!-- TABLE HEAD FOR EXPANDED VERSION ENDS --> */}
          <thead>
            <tr>
              <th scope='col'>Individual</th>
              <th scope='col'></th>
              <th scope='col'>Seed Ant. Requested</th>
              <th scope='col'>Seed Amt. Approved</th>
              <th scope='col'>Request Private</th>
              <th scope='col'>Approved Private</th>
              <th scope='col'>Total Proposed Amt.</th>
              <th scope='col'>Tokens Allocated (Seed)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope='row'>First Name, Last Name</td>
              <td>
                <div className='cap-table-icons d-flex justify-content-between'>
                  <a
                    role='button'
                    onClick={() => setShowSidebar(true)}
                  >
                    <i className='fa-solid fa-up-right-and-down-left-from-center'></i>
                  </a>
                  <a
                    role='button'
                    onClick={() => setShowNotes(true)}
                  >
                    <i className='fa-solid fa-file-invoice'></i>
                  </a>

                  <Notes
                    show={showNotes}
                    hide={setShowNotes}
                  />

                  <OverlayTrigger
                    placement='top'
                    delay={{ show: 50, hide: 40 }}
                    overlay={
                      <Tooltip id='button-tooltip-2'>
                        Missing following: SAFT KYC Incomplete
                      </Tooltip>
                    }
                  >
                    <a
                      role='button'
                      clasnamme='text-info'
                    >
                      <i className='fa-solid text-info fa-circle-exclamation'></i>
                    </a>
                  </OverlayTrigger>

                  <Sidebar
                    show={showSidebar}
                    hide={setShowSidebar}
                  />
                </div>
              </td>

              <td>$00,000,000,000</td>
              <td>$00,000,000,000</td>
              <td>$00,000,000,000</td>
              <td>$00,000,000,000</td>
              <td>$00,000,000,000</td>
              <td>00,000,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*             <!-- CAP TABLE TABLE END--> */}
    </>
  );
};
