import { Link } from "react-router-dom";

function NavBarLogin() {
  return (
    <>
      <nav className='navbar navbar-expand-lg login-bar-dark py-3'>
        <div className='container'>
          <Link to='/'>
            <img
              src='/assets/logo.png'
              width='130'
              alt=''
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBarLogin;
