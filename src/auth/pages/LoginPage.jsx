import { useNavigate } from "react-router-dom";
import NavBarLogin from "../components/NavBarLogin";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { login } from "../../store/auth/authSlice";
import { SignUpForm } from "../components/signup/SignUpForm";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log("State is:", state);

  /* HANDLE THE FORM */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(login());
  };

  return (
    <>
      <SignUpForm />

      <div className='bg-primary'>
        {/* NavBar Login */}
        <NavBarLogin />

        <div id='layoutAuthentication'>
          <div id='layoutAuthentication_content'>
            <div className='container'>
              <div className='row justify-content-center text-white py-5'>
                <h1 className='text-center fw-light mt-5 mb-3'>
                  Sign in to your account
                </h1>

                <div className='col-md-5 col-lg-4'>
                  <div className='login-form'>
                    <p className='text-center'>
                      <strong>Enter your email Address</strong>
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
                        {errors.exampleRequired && (
                          <span>This field is required</span>
                        )}
                        <button
                          type='submit'
                          className='btn btn-primary'
                        >
                          SIGN IN
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* LOGIN WITH GOOGLE */}
                  {/*  <div className='text-center py-3'>
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
                  </div> */}

                  <div className='mt-5 text-center'>
                    <p>
                      Don't have and account yet? <br />
                      <a
                        data-bs-toggle='modal'
                        href='#sign_up'
                        className='fw-bold'
                      >
                        Sign Up
                      </a>
                    </p>
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
