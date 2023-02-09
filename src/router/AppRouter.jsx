import { Route, Routes } from "react-router-dom";

import LoginPage from "../auth/pages/LoginPage";
import BluBirdRoutes from "../blubird/routes/BlubirdRoutes";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginPage></LoginPage>
            </PublicRoute>
          }
        ></Route>

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <BluBirdRoutes></BluBirdRoutes>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default AppRouter;
