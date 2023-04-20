import { useState } from "react";
import { Offcanvas, Tab, Tabs } from "react-bootstrap";
import { Commissions } from "./Commissions";
import { IndividualDetails } from "./IndividualDetails";
import { PaymentInformation } from "./PaymentInformation";

export const Sidebar = ({ show, hide }) => {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={hide}
        placement='end'
        backdrop='static'
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
              <PaymentInformation />
            </Tab>
            <Tab
              eventKey='comissions'
              title='Comissions'
            >
              <Commissions />
            </Tab>
          </Tabs>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
