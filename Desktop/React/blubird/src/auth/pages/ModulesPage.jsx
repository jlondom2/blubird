import { useNavigate } from "react-router-dom";
import NavBarLogin from "../components/NavBarLogin";

import { useSelector, useDispatch } from "react-redux";

export const ModulesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-primary'>
        <NavBarLogin />

        <div id='layoutAuthentication'>
          <div id='layoutAuthentication_content'>
            <div className='container'>
              <div className='row justify-content-center py-5'>
                <div className='text-white text-center mb-4'>
                  <h1 className='fw-light mt-5 mb-3'>Available Modules</h1>
                  <p>
                    <strong>Select your modules</strong>
                  </p>
                </div>

                <div className='col-md-8 mx-auto'>
                  <div className='module-box d-lg-flex justify-content-between align-items-start'>
                    <div className='module-info'>
                      <h3>Basic</h3>
                      <p>
                        For teams that need to create project plans with
                        confidence. Can go two lines{" "}
                        <a href='#'>Package Details</a>
                      </p>
                      <p>
                        <small className='text-muted'>
                          Per user, per month billed anually or $00.00 billed
                          monthly
                        </small>
                      </p>
                    </div>
                    <div className='d-flex align-items-center gap-3 ms-2 '>
                      <h5 className='me-2 mb-0'>
                        <strong className='me-2'>$00.00</strong>
                        <span className='text-muted ms-2'>
                          <s>$0.00</s>
                        </span>
                      </h5>

                      <button className='btn btn-primary '>ADD TO CART</button>
                    </div>
                  </div>

                  <div className='module-box d-lg-flex justify-content-between align-items-start'>
                    <div className='module-info'>
                      <h3>Basic</h3>
                      <p>
                        For teams that need to create project plans with
                        confidence. Can go two lines{" "}
                        <a href='#'>Package Details</a>
                      </p>
                      <p>
                        <small className='text-muted'>
                          Per user, per month billed anually or $00.00 billed
                          monthly
                        </small>
                      </p>
                    </div>
                    <div className='d-flex align-items-center gap-3 ms-2 '>
                      <h5 className='me-2 mb-0'>
                        <strong className='me-2'>$00.00</strong>
                        <span className='text-muted ms-2'>
                          <s>$0.00</s>
                        </span>
                      </h5>

                      <button className='btn btn-primary'>ADD TO CART</button>
                    </div>
                  </div>

                  <div className='module-box d-lg-flex justify-content-between align-items-start'>
                    <div className='module-info'>
                      <h3>Basic</h3>
                      <p>
                        For teams that need to create project plans with
                        confidence. Can go two lines{" "}
                        <a href='#'>Package Details</a>
                      </p>
                      <p>
                        <small className='text-muted'>
                          Per user, per month billed anually or $00.00 billed
                          monthly
                        </small>
                      </p>
                    </div>
                    <div className='d-flex align-items-center gap-3 ms-2 '>
                      <h5 className='me-2 mb-0'>
                        <strong className='me-2'>$00.00</strong>
                        <span className='text-muted ms-2'>
                          <s>$0.00</s>
                        </span>
                      </h5>

                      <button className='btn btn-primary '>ADD TO CART</button>
                    </div>
                  </div>

                  <div className='text-center row'>
                    <div className='col-md-6 mx-auto'>
                      <div className='d-grid'>
                        <button
                          className='btn btn-primary'
                          onClick={() => navigate("/checkout")}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
