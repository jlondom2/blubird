import { useState } from "react";
import { Offcanvas, Tab, Tabs } from "react-bootstrap";
import { IndividualDetails } from "./IndividualDetails";

export const Sidebar = ({ show, hide }) => {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={hide}
        placement='end'
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Tabs
            defaultActiveKey='individual_info'
            id=''
            className='mb-4'
          >
            <Tab
              eventKey='individual_info'
              title='Individual Info'
            >
              <IndividualDetails />
            </Tab>
            <Tab
              eventKey='payment'
              title='TXID & ERC-20 Address'
            >
              <p>test2</p>
            </Tab>
            <Tab
              eventKey='comissions'
              title='Comissions'
            >
              <p>test3</p>
            </Tab>
          </Tabs>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
