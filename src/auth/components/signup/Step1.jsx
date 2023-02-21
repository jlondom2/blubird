import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { handleShow2, handleClose } from "../../../store/ui/signUpModalsSlice";
import { addFields } from "../../../store/auth/signupSlice";
import Modal from "react-bootstrap/Modal";

const schema = yup.object().shape({
  signup_email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
});

export const Step1 = ({ props }) => {
  const dispatch = useDispatch();

  const {
    register: register_signup_fields,
    formState: { isSubmitting, isDirty, isValid, errors: errors2 },
    handleSubmit: handleSubmit_signup,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmitSignUp = (data) => {
    dispatch(handleShow2());

    dispatch(addFields(data));
  };

  return (
    <>
      <Modal
        show={props}
        id='sign_up'
        size='sm'
        onHide={() => dispatch(handleClose())}
      >
        <Modal.Body className='text-white text-center'>
          <p>
            <img
              src='/assets/logo.png'
              width='180'
              alt=''
            />
          </p>
          <h2 className='fw-light mt-5'>Welcome!</h2>
          <p>Get Started - it's FREE. Simply enter your email.</p>

          <form
            onSubmit={handleSubmit_signup(onSubmitSignUp)}
            className='form-login'
          >
            <div className='form-floating mb-3'>
              <input
                className='form-control'
                type='email'
                placeholder='name@example.com'
                {...register_signup_fields("signup_email", {
                  required: true,
                  minLength: 4,
                })}
              />
              <label>Email address</label>
              <div className='errors'>{errors2.signup_email?.message}</div>
            </div>

            <div className='d-grid mb-3'>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={!isDirty || !isValid}
              >
                CONTINUE
              </button>
            </div>
          </form>

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
        </Modal.Body>
      </Modal>

      {/* MODAL 2 */}
    </>
  );
};
