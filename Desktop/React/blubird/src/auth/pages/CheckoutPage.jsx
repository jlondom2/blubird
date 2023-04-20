import { useNavigate } from "react-router-dom";
import NavBarLogin from "../components/NavBarLogin";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import { CryptoModal } from "../components/payment/CryptoModal";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleShowCrypto = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className='bg-primary'>
        <NavBarLogin />

        <div id='layoutAuthentication'>
          <div id='layoutAuthentication_content'>
            <div className='container'>
              <div className='row py-5'>
                <div className='text-white col-md-12 text-center mb-4'>
                  <h1 className='fw-light mt-5 mb-3'>Checkout</h1>
                  <p>
                    <strong>Your BluBird Subscription Details</strong>
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div className='summary'>
                    <div className='summary-item d-lg-flex align-items-start justify-content-between'>
                      <div>
                        <h5>Tokenomics Module</h5>
                        <p className='mb-1'>
                          License: <strong>3 Seat Licenses</strong>
                        </p>
                        <p>
                          <small className='text-muted'>Billed yearly</small>
                        </p>
                      </div>

                      <div>
                        <h6>
                          $2500.00 <s className='text-muted ms-2'>#0000.00</s>
                        </h6>
                      </div>
                    </div>

                    <div className='summary-item d-lg-flex align-items-start justify-content-between'>
                      <div>
                        <h5>Cap Table Module</h5>
                        <p className='mb-1'>
                          License: <strong>3 Seat Licenses</strong>
                        </p>
                        <p>
                          <small className='text-muted '>Billed yearly</small>
                        </p>
                      </div>

                      <div>
                        <h6>
                          $2500.00 <s className='text-muted ms-2'>#0000.00</s>
                        </h6>
                      </div>
                    </div>

                    <div className='summary-item d-lg-flex align-items-start justify-content-between'>
                      <div>
                        <h5>Deployment Module</h5>
                        <p className='mb-1'>
                          License: <strong>3 Seat Licenses</strong>
                        </p>
                        <p>
                          <small className='text-muted'>Billed yearly</small>
                        </p>
                      </div>

                      <div>
                        <h6>
                          $2500.00 <s className='text-muted ms-2'>#0000.00</s>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-5 offset-md-1'>
                  <div className='checkout-form'>
                    <form action=''>
                      <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input
                          type='text'
                          placeholder='name@domain.com'
                          className='form-control'
                        />
                      </div>
                      <Tabs
                        defaultActiveKey={2}
                        id='payment-tabs'
                        className='mt-4'
                      >
                        <Tab
                          eventKey={1}
                          title='Credit / Debit Card'
                        >
                          <div className='row'>
                            <div className='col-md-12'>
                              <div className='mb-3'>
                                <label htmlFor='card_number'>Card Number</label>
                                <div className='form-i'>
                                  <input
                                    type='text'
                                    id='card_number'
                                    placeholder='1234 1234 1234 1234'
                                    className='form-control'
                                  />
                                  <div className='field-icons d-flex gap-2'>
                                    <i className='fab fa-cc-visa'></i>
                                    <i className='fab fa-cc-amex'></i>
                                    <i className='fab fa-cc-mastercard'></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-md-6'>
                              <div className='mb-3'>
                                <label htmlFor='exp_date'>
                                  Expiration Date
                                </label>

                                <input
                                  type='text'
                                  placeholder='MM/YY'
                                  id='exp_date'
                                  className='form-control'
                                />
                              </div>
                            </div>

                            <div className='col-md-6'>
                              <div className='mb-3'>
                                <label htmlFor='cvv'>Security Code</label>
                                <div className='form-i'>
                                  <input
                                    type='text'
                                    placeholder='CVV'
                                    id='cvv'
                                    className='form-control'
                                  />
                                  <div className='field-icons d-flex '>
                                    <i className='far fa-credit-card'></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='d-grid'>
                            <a
                              href='#'
                              onClick={() => navigate("/login")}
                              className='btn btn-primary py-3 fw-bold'
                            >
                              Subscribe
                            </a>
                          </div>
                        </Tab>
                        <Tab
                          eventKey={2}
                          title='Cryptocurrency'
                        >
                          <div className='row'>
                            <div className='col-md-12'>
                              <label htmlFor=''>Cryptocurrency</label>
                              <a
                                onClick={handleShowCrypto}
                                className='select-crypto'
                              >
                                Select Cryptocurrency
                                <i className='fas fa-chevron-right'></i>
                              </a>

                              <CryptoModal
                                show={openModal}
                                setShow={setOpenModal}
                              />
                            </div>
                          </div>

                          <div className='row mt-3'>
                            <div className='col-md-12'>
                              <div className='wallet-list mb-4'>
                                <a
                                  href='#'
                                  className='wallet-btn justify-content-between mb-4'
                                >
                                  <div className='d-flex align-items-center gap-3'>
                                    <img
                                      src='/assets/usdc.png'
                                      width='40'
                                      alt=''
                                    />

                                    <p className='mb-0'>
                                      USDC <br />
                                      <small className='text-muted'>USDC</small>
                                    </p>
                                  </div>

                                  <div>
                                    <p className='mb-0'>
                                      00.00 USDC <br />
                                      <small className='text-muted'>
                                        00.00 USDC
                                      </small>
                                    </p>
                                  </div>
                                </a>

                                <a
                                  href='#'
                                  className='wallet-btn justify-content-between mb-4'
                                >
                                  <div className='d-flex align-items-center gap-3'>
                                    <img
                                      src='/assets/meta.png'
                                      width='40'
                                      alt=''
                                    />

                                    <p className='mb-0'>Metamask</p>
                                  </div>

                                  <div>
                                    <a href='#'>
                                      <i class='fas fa-times-circle fs-4'></i>
                                    </a>
                                  </div>
                                </a>
                              </div>

                              <div className='d-grid'>
                                <a
                                  href='#'
                                  className='btn btn-primary py-3 fw-bold'
                                >
                                  Connect Wallet
                                </a>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>

                      <div className='text-center'>
                        <p>
                          <small className='text-muted'>
                            By confirming your subscription, you allow Blubird
                            to charge your card for this payment and future
                            payments in accordance with their terms. You can
                            always cancel your subscription.
                          </small>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
