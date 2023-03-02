import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginPage } from "../auth";
import { DashboardPage, CapTable } from "../blubird";

import Protected from "./Protected";
import { useEffect } from "react";
import { validateLogin } from "../store/auth/thunks";
import { checking } from "../store/auth/authSlice";
import Loader from "../blubird/ui/Loader";
import { DeploymentPage } from "../blubird/pages/DeploymentPage";

export const AppRouter = () => {
  const { state: authStatus } = useSelector((state) => state.auth);

  /* console.log(getEnvVariables()); */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateLogin());
  }, []);

  if (authStatus === "checking") {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Protected isSignedIn={authStatus}>
              <DashboardPage />
            </Protected>
          }
        />

        <Route
          path='/captable'
          element={
            <Protected isSignedIn={authStatus}>
              <CapTable />
            </Protected>
          }
        />

        <Route
          path='/deployment'
          element={
            <Protected isSignedIn={authStatus}>
              <DeploymentPage />
            </Protected>
          }
        />

        <Route
          path='/login'
          element={
            authStatus === "authenticated" ? <Navigate to='/' /> : <LoginPage />
          }
        />

        <Route
          path='/*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </>
  );
};
