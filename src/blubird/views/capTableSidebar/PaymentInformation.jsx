export const PaymentInformation = () => {
  return (
    <>
      <h5>Payment Information</h5>

      <form action=''>
        <h6 className='mt-4'>PTXID</h6>
        <div className='mb-3 input-copy'>
          <input
            type='text'
            className='form-control'
            placeholder='0xec8d...8a9455'
          />
          <a href='#'>
            <i className='fa-solid fa-clipboard'></i>
          </a>
        </div>

        <h6 className='mt-4'>ERC-20 Address</h6>
        <div className='mb-3 input-copy'>
          <input
            type='text'
            className='form-control'
            placeholder='0xec8d...8a9455'
          />
          <a href='#'>
            <i className='fa-solid fa-clipboard'></i>
          </a>
        </div>
      </form>
    </>
  );
};
