import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleShow3 } from "../../../store/ui/signUpModalsSlice";
import Modal from "react-bootstrap/Modal";
import { addFields } from "../../../store/auth/signupSlice";

const schema2 = yup.object().shape({
  full_name: yup.string().max(255).required("Field Required"),
  password: yup.string().min(6).required("Password Required"),
  account_name: yup.string().max(255).required("Field Required"),
});

export const Step2 = ({ props }) => {
  const dispatch = useDispatch();

  const {
    register: register_signup_fields_2,
    formState: { isDirty2, isValid2, errors: errors22 },
    handleSubmit: handleSubmit_signup_2,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema2),
  });

  const onSubmitSignUp = (data) => {
    const { full_name, password, account_name, agree_terms } = data;

    dispatch(addFields(full_name));
    dispatch(addFields(password));
    dispatch(addFields(account_name));
    dispatch(addFields(agree_terms));
    dispatch(handleShow3());
  };

  return (
    <>
      <Modal
        show={props}
        id='sign_up'
        size='sm'
      >
        <Modal.Body className='text-white text-center'>
          <p>
            <img
              src='/assets/logo.png'
              width='180'
              alt=''
            />
          </p>
          <h4 className='fw-light mt-5'>Set up your Account</h4>
          <p>Fill in your profile details</p>

          <form
            onSubmit={handleSubmit_signup_2(onSubmitSignUp)}
            className='form-login'
          >
            <div className='form-floating mb-3'>
              <input
                className='form-control'
                type='text'
                placeholder='your name'
                {...register_signup_fields_2("full_name", {
                  required: true,
                })}
              />
              <label>Full Name</label>
              <div className='errors'>{errors22.full_name?.message}</div>
            </div>

            <div className='form-floating mb-3'>
              <input
                className='form-control'
                type='text'
                placeholder='password'
                {...register_signup_fields_2("password", {
                  required: true,
                })}
              />
              <label>Create A Password</label>
              <div className='errors'>{errors22.password?.message}</div>
            </div>

            <div className='form-floating mb-3'>
              <input
                className='form-control'
                type='text'
                placeholder='account name'
                {...register_signup_fields_2("account_name", {
                  required: true,
                })}
              />
              <label>Enter an Account Name</label>
              <div className='errors'>{errors22.account_name?.message}</div>
            </div>

            <div className='form-check form-check-inline mt-3 mb-4'>
              <input
                className='form-check-input'
                type='checkbox'
                required
                {...register_signup_fields_2("agree_terms", { required: true })}
              />
              <label className='fs-6 form-check-label'>
                <small>
                  I agree to the <Link to='/'>Terms of Service</Link> and
                  <Link to='/'>Privacy Policy</Link>
                </small>
              </label>
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
