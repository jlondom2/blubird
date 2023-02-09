import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import LayoutSideNav from "../components/LayoutSideNav";
import LayoutSideNav1 from "../components/LayoutSideNav1";
import Toggler from "../components/Toggler";
import TokenomicsHeader from "../components/TokenomicsHeader";

function DashboardPage() {
  const [isActive, setActive] = useState(false);

  const [item, setItem] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    setItem(!item);
  };

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <div
        className={`sb-nav-fixed bg-dark  ${
          isActive ? "sb-sidenav-toggled" : "rrr"
        }`}
      >
        <div id='layoutSidenav'>
          <LayoutSideNav handleLogout={handleLogout} />
          <LayoutSideNav1 />
          <Toggler
            handleToggle={handleToggle}
            item={item}
          />

          {/* content */}

          <div id='layoutSidenav_content'>
            <main>
              <div class='container-fluid px-4'>
                <p className='text-white'>
                  <small>
                    Welcome! <strong>{user.email}</strong>
                  </small>
                </p>

                <TokenomicsHeader />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
