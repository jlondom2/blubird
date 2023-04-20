import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleShow6 } from "../../../store/ui/signUpModalsSlice";
import Modal from "react-bootstrap/Modal";
import { addFields } from "../../../store/auth/signupSlice";
import { startRegister } from "../../../store/auth/thunks";

const schema5 = yup.object().shape({
  /* what_brings: yup.array().min(1).of(yup.string().required()).required(), */
});

export const Step5 = ({ props }) => {
  const dispatch = useDispatch();

  const {
    register: register_signup_fields_5,
    formState: { errors: errors24 },
    handleSubmit: handleSubmit_signup_5,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema5),
  });

  /* const onSubmitSignUp = (data) => {
    const { manage_first } = data;
    dispatch(addFields(manage_first));
    reset();
    dispatch(handleClose());
    dispatch(startRegister());
  }; */

  const onSubmitSignUp = (data) => {
    dispatch(handleShow6());
  };

  return (
    <>
      <Modal
        show={props}
        id='sign_up'
        size='sm'
      >
        <Modal.Body className='text-white text-start'>
          <p className='mt-5 mb-4'>
            <img
              src='/assets/logo.png'
              width='100'
              alt=''
            />
          </p>

          <form
            onSubmit={handleSubmit_signup_5(onSubmitSignUp)}
            className='form-login'
          >
            <div>
              <p className='fs-5 fw-light'>
                Select what you'd like to <strong>manage first</strong>
              </p>
              <div
                className='login-tags mb-3'
                role='group'
              >
                <input
                  type='radio'
                  className='btn-check'
                  id='manage_first'
                  autoComplete='off'
                  value='Tokenomics'
                  {...register_signup_fields_5("manage_first", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='manage_first'
                >
                  Tokenomics
                </label>

                <input
                  type='radio'
                  className='btn-check'
                  id='manage_first_2'
                  autoComplete='off'
                  value='Cap Table'
                  {...register_signup_fields_5("manage_first", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='manage_first_2'
                >
                  Cap Table
                </label>

                <input
                  type='radio'
                  className='btn-check'
                  id='manage_first_3'
                  autoComplete='off'
                  value='Token Deployment'
                  {...register_signup_fields_5("manage_first", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='manage_first_3'
                >
                  Token Deployment
                </label>

                <input
                  type='radio'
                  className='btn-check'
                  id='manage_first_4'
                  autoComplete='off'
                  value='Token Deployment'
                  {...register_signup_fields_5("manage_first", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='manage_first_4'
                >
                  Company Profile
                </label>

                <input
                  type='radio'
                  className='btn-check'
                  id='manage_first_5'
                  autoComplete='off'
                  value='Token Deployment'
                  {...register_signup_fields_5("manage_first", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='manage_first_5'
                >
                  Team Members
                </label>
              </div>
            </div>

            <div className='d-grid mb-3'>
              <button
                type='submit'
                className='btn btn-primary'
              >
                CONTINUE
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* MODAL 2 */}
    </>
  );
};
