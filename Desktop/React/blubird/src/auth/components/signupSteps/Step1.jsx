import React from "react";
import { useForm } from "react-hook-form";
import { handleShow2 } from "../../../store/ui/signUpSteps";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Step1 = () => {
  const { state, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  /* HANDLE THE FORM */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(handleShow2());
  };
  return (
    <>
      <div className='step1'>
        <div className='col-md-5 mx-auto col-lg-4'>
          <div className='login-form'>
            <p className='text-center'>
              <strong>Simply enter your email to get started.</strong>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='name@example.com'
                  {...register("email", { required: true })}
                />
                <label>Email address</label>
              </div>
              <div className='d-grid'>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <button
                  type='submit'
                  className='btn btn-primary'
                >
                  Next
                </button>
                {errorMessage && (
                  <p
                    className='text-center m-2'
                    style={{ color: "red" }}
                  >
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
          {/* LOGIN WITH GOOGLE */}
          <div className='text-center py-3'>
            <div className='small'>
              <p>Or sign in with</p>
              <a href='#'>
                <img
                  src='/assets/sign-google.png'
                  width='200'
                  alt=''
                />
              </a>
            </div>
          </div>
          <div className='mt-5 text-center'>
            <p>
              Already have an account yet? <br />
              <Link
                to='/login'
                onClick={() => dispatch(handleShow1())}
                className='fw-bold'
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
