import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";

import LayoutSideNav from "../ui/components/LayoutSideNav";
import LayoutSideNav1 from "../ui/components/LayoutSideNav1";
import Toggler from "../ui/components/Toggler";
import TokenomicsHeader from "../components/TokenomicsHeader";
import { onLogout } from "../../store/auth/authSlice";
import tokenomicsSlice from "../../store/tokenomics/tokenomicsSlice";
import { TokenomicsSetup } from "../views/TokenomicsSetup";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { toggled } = useSelector((state) => state.toggler);

  const { setupDone } = useSelector((state) => state.tokenomics);

  const { user } = useSelector((state) => state.auth);

  console.log("user is", user);

  const handleLogout = () => {
    dispatch(onLogout());
    navigate("/login");
  };

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

                <TokenomicsHeader />

                {!setupDone ? (
                  <>
                    <TokenomicsSetup />
                  </>
                ) : (
                  ""
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
