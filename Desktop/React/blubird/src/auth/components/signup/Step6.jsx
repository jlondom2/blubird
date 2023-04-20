import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleShow6 } from "../../../store/ui/signUpModalsSlice";
import Modal from "react-bootstrap/Modal";
import { addFields } from "../../../store/auth/signupSlice";
import { startRegister } from "../../../store/auth/thunks";

const schema6 = yup.object().shape({
  /* what_brings: yup.array().min(1).of(yup.string().required()).required(), */
});

export const Step6 = ({ props }) => {
  const dispatch = useDispatch();

  const {
    register: register_signup_fields_6,
    formState: { errors: errors24 },
    handleSubmit: handleSubmit_signup_6,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema6),
  });

  /* const onSubmitSignUp = (data) => {
    const { manage_first } = data;
    dispatch(addFields(manage_first));
    reset();
    dispatch(handleClose());
    dispatch(startRegister());
  }; */

  const onSubmitSignUp = (data) => {
    const { invite_link, invite_email_1, invite_email_2, allow_automative } =
      data;
    dispatch(addFields(invite_link));
    dispatch(addFields(invite_email_1));
    dispatch(addFields(invite_email_2));
    dispatch(addFields(allow_automative));
    reset();
    dispatch(handleClose());
    dispatch(startRegister());
  };

  return (
    <>
      <Modal
        show={props}
        id='sign_up'
      >
        <Modal.Body className='text-white text-start'>
          <p>
            <img
              src='/assets/logo.png'
              width='100'
              alt=''
            />
          </p>

          <p className='fs-4 fw-light'>Yay!, We're almost there...</p>

          <form
            onSubmit={handleSubmit_signup_6(onSubmitSignUp)}
            className='form-login'
          >
            <div className='mt-3'>
              <p>Invite with link (anyone with blubird.io email)</p>
              <input
                type='text'
                className='form-control'
                defaultValue='https://www.invitelink.com'
                {...register_signup_fields_6("invite_link", {})}
              />
            </div>

            <div className='mt-3'>
              <p>Invite with email</p>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Email Here'
                {...register_signup_fields_6("invite_email_1", {})}
              />
            </div>

            <div className='mt-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Email Here'
                {...register_signup_fields_6("invite_email_2", {})}
              />
            </div>

            <div className='mt-3 d-none'>
              <p>
                <a href='#'>
                  <i className='fa-solid fa-plus me-2'></i> Add Another
                </a>
              </p>
            </div>

            <div className='form-check form-check-inline mt-3 mb-4'>
              <input
                className='form-check-input'
                type='checkbox'
                id='allow_automative'
                defaultValue='Allow automative Sign up'
                {...register_signup_fields_6("allow_automative", {})}
              />
              <label
                className='form-check-label'
                htmlFor='allow_automative'
              >
                <small>
                  Allow automative signups with an
                  <strong>@blubird.io</strong> email address
                </small>
              </label>
            </div>

            <div className='d-md-flex align-items-center justify-content-around mb-3'>
              <div className=''>
                <a
                  role='button'
                  type='submit'
                  className='text-white'
                >
                  Skip this for now
                </a>
              </div>

              <div className=''>
                <button
                  type='submit'
                  className='btn btn-primary'
                >
                  Invite
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* MODAL 2 */}
    </>
  );
};
