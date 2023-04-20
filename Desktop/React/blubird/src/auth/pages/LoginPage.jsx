import NavBarLogin from "../components/NavBarLogin";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { SignUpForm } from "../components/signup/SignUpForm";
import { handleShow1 } from "../../store/ui/signUpModalsSlice";
import { Step1, Step2, Step3, Step4, Step5 } from "../components/signup";
import { startLogin, validateLogin } from "../../store/auth/thunks";
import { onloginTest } from "../../store/auth/authSlice";
import { Step6 } from "../components/signup/Step6";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { state, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const {
    showModal1,
    showModal2,
    showModal3,
    showModal4,
    showModal5,
    showModal6,
  } = useSelector((state) => state.modal);

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
    dispatch(startLogin(data));
  };

  return (
    <>
      {/* <SignUpForm>
        <Step1 props={showModal1} />
        <Step2 props={showModal2} />
        <Step3 props={showModal3} />
        <Step4 props={showModal4} />
        <Step5 props={showModal5} />
        <Step6 props={showModal6} />
      </SignUpForm> */}

      <div className='bg-primary'>
        {/* NavBar Login */}
        <NavBarLogin />

        <div id='layoutAuthentication'>
          <div id='layoutAuthentication_content'>
            <div className='container'>
              <div className='row justify-content-center text-white py-5'>
                {successMessage ? (
                  <div
                    className='alert alert-success py-3 text-center'
                    role='alert'
                  >
                    Account Created, please login using your credentials below
                  </div>
                ) : (
                  ""
                )}

                <h1 className='text-center fw-light mt-5 mb-3'>
                  Sign in to your account
                </h1>

                <div className='col-md-5 col-lg-4'>
                  <div className='login-form'>
                    <p className='text-center'>
                      <strong>Enter your email Address and password</strong>
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

                      <div className='form-floating mb-3'>
                        <input
                          className='form-control'
                          type='password'
                          placeholder='password'
                          {...register("password", { required: true })}
                        />
                        <label>Password</label>
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
                      Don't have and account yet? <br />
                      <Link
                        to='/signup'
                        onClick={() => dispatch(handleShow1())}
                        className='fw-bold'
                      >
                        Sign Up
                      </Link>
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
