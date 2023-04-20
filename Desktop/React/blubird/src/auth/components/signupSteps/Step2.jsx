import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Step2 = () => {
  const { state, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

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
    navigate("/modules");
  };
  return (
    <>
      <div className='step2'>
        <div className='col-md-5 mx-auto col-lg-4'>
          <div className='login-form'>
            <p className='text-center'>
              <strong>Fill in your profile details</strong>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter your full name'
                  {...register("full_name", { required: true })}
                />
                <label>Enter your full name</label>
              </div>

              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Create a Password'
                  {...register("password", { required: true })}
                />
                <label>Create a Password</label>
              </div>

              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter an account name'
                  {...register("account_name", { required: true })}
                />
                <label>Enter an account name</label>
              </div>

              <div className='form-check form-check-inline text-center mt-1 mb-4'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  required
                  {...register("agree_terms", { required: true })}
                />
                <label className='fs-6 form-check-label'>
                  <small>
                    I agree to the <Link to='/'>Terms of Service</Link> and
                    <Link to='/'> Privacy Policy</Link>
                  </small>
                </label>
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
        </div>
      </div>
    </>
  );
};
