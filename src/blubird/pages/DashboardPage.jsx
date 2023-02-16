import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import LayoutSideNav from "../ui/components/LayoutSideNav";
import LayoutSideNav1 from "../ui/components/LayoutSideNav1";
import Toggler from "../ui/components/Toggler";
import TokenomicsHeader from "../components/TokenomicsHeader";

export const DashboardPage = () => {
  const navigate = useNavigate();

  const { toggled } = useSelector((state) => state.toggler);

  const handleLogout = () => {};

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
                <TokenomicsHeader />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
