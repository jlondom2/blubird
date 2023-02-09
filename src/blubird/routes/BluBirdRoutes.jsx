/* import NavBar from "../../ui/components/Navbar";
 */
import { Route, Routes, Navigate } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";

function BluBirdRoutes() {
  return (
    <>
      {/*  <NavBar></NavBar> */}

      <Routes>
        <Route
          path='/'
          element={<Navigate to='/login'></Navigate>}
        ></Route>
        <Route
          path='/dashboard'
          element={<DashboardPage></DashboardPage>}
        ></Route>
      </Routes>
    </>
  );
}

export default BluBirdRoutes;
