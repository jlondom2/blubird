export const IndividualDetails = () => {
  return (
    <>
      <h5>Individual Details</h5>
      <h6 className='mt-4'>Personal Information</h6>
      <form action=''>
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Juan Londono'
            id='floatingInput'
          />

          <label htmlFor='floatingInput'>Full Name</label>
        </div>

        <div className='form-floating mb-3'>
          <input
            type='text'
            id='floatingInput2'
            className='form-control'
            placeholder='my Company'
          />
          <label htmlFor='floatingInput2'>Company / Group</label>
        </div>

        <div className='form-floating mb-3'>
          <input
            type='email'
            id='floatingInput3'
            className='form-control'
            placeholder='test@test.com'
          />
          <label htmlFor='floatingInput3'>Email Address</label>
        </div>

        <div className='form-floating mb-3'>
          <input
            type='text'
            id='floatingInput4'
            className='form-control'
            placeholder='Marketing'
          />
          <label htmlFor='floatingInput4'>Strategic Add</label>
        </div>

        <div className='mb-3 mt-4'>
          <h6>Contribution</h6>

          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='checkbox'
              id='inlineCheckbox1'
              value='option1'
            />
            <label
              className='form-check-label'
              htmlFor='inlineCheckbox1'
            >
              Influencer
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='checkbox'
              id='inlineCheckbox2'
              value='option2'
            />
            <label
              className='form-check-label'
              htmlFor='inlineCheckbox2'
            >
              VC
            </label>
          </div>
        </div>

        <div className='mb-3 mt-5'>
          <h5 className='mb-3'>
            SAFT DETAILS
            <a
              href='#'
              className='ms-2 fs-5 text-info'
            >
              <i className='fa-solid text-info fa-circle-exclamation'></i>
            </a>
          </h5>
          <h6>Participation</h6>

          <div className='mb-5'>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='checkbox'
                defaultChecked
                id='inlineCheckboxseed'
                value='optionseed'
              />
              <label
                className='form-check-label'
                htmlFor='inlineCheckbox1'
              >
                Seed
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='checkbox'
                id='inlineCheckboxpre-sale'
                value='optionpre-sale'
              />
              <label
                className='form-check-label'
                htmlFor='inlineCheckboxpre-sale'
              >
                Pre Sale
              </label>
            </div>
          </div>

          <div className='mb-3'>
            <select
              name=''
              className='form-select'
              id=''
            >
              <option value=''>SAFT Status</option>
              <option value=''>Funded</option>
            </select>
          </div>
        </div>

        <div className='mb-3 mt-5'>
          <h5 className='mb-3'>
            Verification Status
            <a
              href='#'
              className='ms-2 fs-5 text-success'
            >
              <i className='fa-solid fa-clipboard-check text-success'></i>
            </a>
          </h5>

          <div className='mb-5'>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='checkbox'
                defaultChecked
                id='inlineCheckboxkyc'
                value='optionkyc'
              />
              <label
                className='form-check-label'
                htmlFor='inlineCheckbox1'
              >
                KYC
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='checkbox'
                id='inlineCheckboxpre-sale'
                value='optionpre-sale'
              />
              <label
                className='form-check-label'
                htmlFor='inlineCheckboxpre-verified'
              >
                Verified
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
