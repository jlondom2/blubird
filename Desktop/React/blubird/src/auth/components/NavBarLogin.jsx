import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBarLogin() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
    >
      <Container>
        <Navbar.Brand href='/'>
          <img
            src='/assets/logo.png'
            alt=''
            width='110'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'
        >
          <Nav className='gap-4 align-items-center'>
            <a
              href='#'
              className='text-white'
            >
              <i className='fas fa-shopping-cart fs-5'></i>
            </a>
            <button className='btn btn-primary btn-sm'>Sign In</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarLogin;
