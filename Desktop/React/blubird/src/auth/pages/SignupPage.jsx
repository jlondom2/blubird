import NavBarLogin from "../components/NavBarLogin";

import { useSelector, useDispatch } from "react-redux";

import { Step1 } from "../components/signupSteps/Step1";
import { Step2 } from "../components/signupSteps/Step2";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const { state, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const { showStep1, showStep2 } = useSelector((state) => state.signupSteps);

  return (
    <>
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
                  Create Your Account
                </h1>

                {showStep1 && <Step1 />}

                {showStep2 && <Step2 />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
