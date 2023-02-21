import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginPage } from "../auth";
import { DashboardPage } from "../blubird";
import { getEnvVariables } from "../helpers";
import Protected from "./Protected";
import { useEffect } from "react";
import { validateLogin } from "../store/auth/thunks";

export const AppRouter = () => {
  const { state: authStatus } = useSelector((state) => state.auth);

  /* console.log(getEnvVariables()); */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateLogin());
  }, []);

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
