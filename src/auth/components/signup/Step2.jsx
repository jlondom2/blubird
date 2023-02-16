import React from "react";
import { Link } from "react-router-dom";

export const Step2 = ({ register }) => {
  return (
    <>
      <div
        className='modal fade'
        id='sign_up_2'
        aria-hidden='true'
        aria-labelledby='sign_up'
        tabIndex='-1'
      >
        <div className='modal-dialog modal-dialog-centered modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'></div>
            <div className='modal-body text-white text-center'>
              <p>
                <img
                  src='/assets/logo.png'
                  width='180'
                  alt=''
                />
              </p>
              <h2 className='fw-light mt-5'>Welcome!2</h2>
              <p>Get Started - it's FREE. Simply enter your email.</p>

              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='name@example.com'
                  {...register("signup_email", {
                    required: true,
                  })}
                />
                <label>Email address</label>
              </div>

              <div className='d-grid mb-3'>
                <button
                  data-bs-toggle='modal'
                  href='#sign_up_2'
                  className='btn btn-primary'
                >
                  CONTINUE
                </button>
              </div>

              {/*   <p className='mb-3'>OR</p>

              <p>
                <a href='#'>
                  <img
                    src='/assets/continue-google.png'
                    width='200'
                    alt=''
                  />
                </a>
              </p> */}

              <p>
                Already have an account yet?{" "}
                <Link
                  data-bs-dismiss='modal'
                  to='/login'
                >
                  Sign In!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
