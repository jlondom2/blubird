import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleShow4 } from "../../../store/ui/signUpModalsSlice";
import Modal from "react-bootstrap/Modal";
import { addFields } from "../../../store/auth/signupSlice";

const schema3 = yup.object().shape({
  /*  what_brings: yup.array().min(1).of(yup.string().required()).required(), */
});

export const Step3 = ({ props }) => {
  const dispatch = useDispatch();

  const {
    register: register_signup_fields_3,
    formState: { errors: errors23 },
    handleSubmit: handleSubmit_signup_3,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema3),
  });

  const onSubmitSignUp = (data) => {
    const { what_brings, role } = data;
    dispatch(addFields(what_brings));
    dispatch(addFields(role));

    dispatch(handleShow4());
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
            onSubmit={handleSubmit_signup_3(onSubmitSignUp)}
            className='form-login'
          >
            <div>
              <p className='fs-5 fw-light'>
                Hey, what <strong>brings you</strong> here today?
              </p>
              <div
                className='login-tags mb-3'
                role='group'
              >
                <input
                  type='radio'
                  className='btn-check'
                  id='btncheck1'
                  autoComplete='off'
                  value='Project'
                  {...register_signup_fields_3("what_brings", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='btncheck1'
                >
                  Project
                </label>
                <input
                  type='radio'
                  className='btn-check'
                  id='btncheck2'
                  autoComplete='off'
                  value='VC Firms'
                  {...register_signup_fields_3("what_brings", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='btncheck2'
                >
                  VC Firms
                </label>
                <input
                  type='radio'
                  className='btn-check'
                  id='btncheck3'
                  autoComplete='off'
                  value='Advisor'
                  {...register_signup_fields_3("what_brings", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='btncheck3'
                >
                  Advisor
                </label>
              </div>
            </div>

            <div>
              <p className='fs-5 fw-light'>
                What describes your <strong>current role?</strong>
              </p>
              <div
                className='login-tags mb-3'
                role='group'
              >
                <input
                  type='radio'
                  className='btn-check'
                  id='btncheck11'
                  autoComplete='off'
                  value='Business Owner'
                  {...register_signup_fields_3("role", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='btncheck11'
                >
                  Business Owner
                </label>
                <input
                  type='radio'
                  className='btn-check'
                  id='btncheck22'
                  autoComplete='off'
                  value='Team Member'
                  {...register_signup_fields_3("role", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='btncheck22'
                >
                  Team Member
                </label>
                <input
                  type='radio'
                  className='btn-check'
                  id='btncheck33'
                  autoComplete='off'
                  value='Director'
                  {...register_signup_fields_3("role", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='btncheck33'
                >
                  Director
                </label>

                <input
                  type='radio'
                  className='btn-check'
                  id='btncheck44'
                  autoComplete='off'
                  value='C-Level'
                  {...register_signup_fields_3("role", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='btncheck44'
                >
                  C-Level
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
