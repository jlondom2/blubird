import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { handleClose, handleShow5 } from "../../../store/ui/signUpModalsSlice";
import Modal from "react-bootstrap/Modal";
import { addFields } from "../../../store/auth/signupSlice";

const schema4 = yup.object().shape({
  /* what_brings: yup.array().min(1).of(yup.string().required()).required(), */
});

export const Step4 = ({ props }) => {
  const dispatch = useDispatch();

  const {
    register: register_signup_fields_4,
    formState: { errors: errors24 },
    handleSubmit: handleSubmit_signup_4,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema4),
  });

  const onSubmitSignUp = (data) => {
    const { team_people, company_people } = data;
    dispatch(addFields(team_people));
    dispatch(addFields(company_people));

    dispatch(handleShow5());
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
            onSubmit={handleSubmit_signup_4(onSubmitSignUp)}
            className='form-login'
          >
            <div>
              <p className='fs-5 fw-light'>
                How many people are on your <strong>team</strong> ?
              </p>
              <div
                className='login-tags mb-3'
                role='group'
              >
                <input
                  type='radio'
                  className='btn-check'
                  id='team1'
                  autoComplete='off'
                  value='1-10'
                  {...register_signup_fields_4("team_people", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='team1'
                >
                  1-10
                </label>
                <input
                  type='radio'
                  className='btn-check'
                  id='team2'
                  autoComplete='off'
                  value='10-50'
                  {...register_signup_fields_4("team_people", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='team2'
                >
                  10-50
                </label>
                <input
                  type='radio'
                  className='btn-check'
                  id='team3'
                  autoComplete='off'
                  value='50+'
                  {...register_signup_fields_4("team_people", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='team3'
                >
                  50+
                </label>
              </div>
            </div>

            <div>
              <p className='fs-5 fw-light'>
                How many people wotk at your <strong>company?</strong>
              </p>
              <div
                className='login-tags mb-3'
                role='group'
              >
                <input
                  type='radio'
                  className='btn-check'
                  id='people1'
                  autoComplete='off'
                  value='1-10'
                  {...register_signup_fields_4("company_people", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='people1'
                >
                  1-10
                </label>
                <input
                  type='radio'
                  className='btn-check'
                  id='people2'
                  autoComplete='off'
                  value='10-50'
                  {...register_signup_fields_4("company_people", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='people2'
                >
                  10-50
                </label>
                <input
                  type='radio'
                  className='btn-check'
                  id='people3'
                  autoComplete='off'
                  value='50-100'
                  {...register_signup_fields_4("company_people", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='people3'
                >
                  50-100
                </label>

                <input
                  type='radio'
                  className='btn-check'
                  id='people4'
                  autoComplete='off'
                  value='100+'
                  {...register_signup_fields_4("company_people", {})}
                />
                <label
                  className='btn btn-outline-primary'
                  htmlFor='people4'
                >
                  100+
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
