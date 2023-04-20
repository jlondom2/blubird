import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Profile } from "../views/accountTabs/Profile";
import { Security } from "../views/accountTabs/Security";
import { Billing } from "../views/accountTabs/Billing";
import { useNavigate } from "react-router-dom";

export const AccountPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='account'>
        <Tab.Container
          id='profile-tabs'
          className='profile-tabs'
          defaultActiveKey='profile'
        >
          <Row>
            <Col
              sm={4}
              className='profile-sidebar'
            >
              <Nav
                variant='pills'
                className='flex-column'
              >
                <div className='text-white ps-3 mb-2'>
                  <strong>User Settings</strong>
                </div>
                <Nav.Item>
                  <Nav.Link eventKey='profile'>Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='security'>Security</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='billing'>Billing</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col
              sm={8}
              className='profile-tabs-content'
            >
              <Tab.Content>
                <div className='text-end'>
                  <a
                    href='#'
                    onClick={() => navigate(-1)}
                    className='text-white'
                  >
                    <i className='fas fa-times-circle fs-4'></i>
                  </a>
                </div>
                <Tab.Pane eventKey='profile'>
                  <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey='security'>
                  <Security />
                </Tab.Pane>
                <Tab.Pane eventKey='billing'>
                  <Billing />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};
