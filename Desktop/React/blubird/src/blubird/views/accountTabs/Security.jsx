import { useState } from "react";
import { TwoFactorModal } from "./TwoFactorModal";

export const Security = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };
  return (
    <>
      <div className='container mt-4'>
        <h5 className='mb-3'>Security</h5>
        <p className='mb-1'>
          <strong>Two Factor Authentication</strong>
        </p>

        <p>
          Two-Factor authentication (2FA for short) is a good way to add an
          extra layer of security to your Hypengine account to make sure that
          only you have the ability to log in. When this is turned on you will
          need to enter the code from your authenticator app every time you
          login.
        </p>

        <div>
          <a
            href='#'
            onClick={handleModal}
            className='btn btn-primary'
          >
            ENABLE 2FA
          </a>

          <TwoFactorModal
            show={modal}
            setShow={setModal}
          />
        </div>

        <form
          action=''
          className='form-profile mb-5 mt-5'
        >
          <div className='row'>
            <div className='col-md-12'>
              <p className='mb-1'>
                <strong>Password</strong>
              </p>

              <p>Update your password to keep your account safe and secure.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='mb-3 form-icon'>
                <input
                  type='text'
                  placeholder='Enter Current Password'
                  className='form-control'
                />
                <a href=''>
                  <i className='fas fa-eye'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='mb-3 form-icon'>
                <input
                  type='text'
                  placeholder='Enter New Password'
                  className='form-control'
                />
                <a href=''>
                  <i className='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='mb-3 form-icon'>
                <input
                  type='text'
                  placeholder='Confirm New Password'
                  className='form-control'
                />
                <a href=''>
                  <i className='fas fa-eye'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-md-12'>
              <button className='btn btn-primary'>UPDATE PASSWORD</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
