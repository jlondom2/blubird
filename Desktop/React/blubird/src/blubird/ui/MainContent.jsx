import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../store/auth/authSlice";
import DashboardHeader from "../components/DashboardHeader";
import LayoutSideNav from "./components/LayoutSideNav";
import LayoutSideNav1 from "./components/LayoutSideNav1";
import Toggler from "./components/Toggler";

export const MainContent = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toggled } = useSelector((state) => state.toggler);

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(onLogout());
    navigate("/login");
  };

  console.log(user);
  return (
    <>
      <div
        className={`sb-nav-fixed bg-dark  ${
          toggled ? "sb-sidenav-toggled" : "rrr"
        }`}
      >
        <div id='layoutSidenav'>
          <LayoutSideNav handleLogout={handleLogout} />
          <LayoutSideNav1 />
          <Toggler />

          {/* content */}

          <div id='layoutSidenav_content'>
            <main>
              <div className='container-fluid px-4'>
                <p className='text-white'>Welcome! {user?.email}</p>

                <DashboardHeader />

                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
