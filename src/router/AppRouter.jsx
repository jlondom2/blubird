import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { LoginPage } from "../auth";
import { DashboardPage } from "../blubird";
import { getEnvVariables } from "../helpers";

export const AppRouter = () => {
  const { state: authStatus } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        {authStatus === "not-authenticated" ? (
          <Route
            path='/auth/*'
            element={<LoginPage></LoginPage>}
          ></Route>
        ) : (
          <Route
            path='/*'
            element={
              <Navigate
                to='/dashboard'
                replace={true}
              />
            }
          ></Route>
        )}

        <Route
          path='/*'
          element={<Navigate to='auth/login' />}
        ></Route>

        <Route
          path='/dashboard'
          element={<DashboardPage />}
        ></Route>
      </Routes>
    </>
  );
};
