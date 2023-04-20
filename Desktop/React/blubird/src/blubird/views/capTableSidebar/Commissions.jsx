export const Commissions = () => {
  return (
    <>
      <h5>Commissions Structure</h5>

      <form action=''>
        <div className='form-check form-check-inline mt-4'>
          <input
            defaultChecked
            className='form-check-input'
            type='checkbox'
            id='inlineCheckbox11'
            value='option11'
          />
          <label
            className='fw-bold fs-6 form-check-label'
            htmlFor='inlineCheckbox11'
          >
            Commission Paid Out
          </label>
        </div>

        <h6 className='mt-4'>Seed % Individual</h6>
        <div className='mb-3 input-copy'>
          <input
            type='text'
            className='form-control'
            placeholder='00%'
          />
          <a href='#'>
            <i className='fa-solid fa-clipboard'></i>
          </a>
        </div>

        <h6 className='mt-4'>Private Pre-Sale % Individual</h6>
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

        <h6 className='mt-4'>Total Commission to Individual</h6>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='$000,0000,000.00'
          />
        </div>
      </form>
    </>
  );
};
