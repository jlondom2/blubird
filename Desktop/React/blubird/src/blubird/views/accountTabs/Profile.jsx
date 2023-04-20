export const Profile = () => {
  return (
    <>
      <div className='container mt-4'>
        <h5 className='mb-3'>Profile Information</h5>
        <p>Personal Information</p>

        <form
          action=''
          className='form-profile mb-5'
        >
          <div className='row'>
            <div className='col-md-6'>
              <div className='mb-3'>
                <input
                  type='text'
                  placeholder='First Name'
                  className='form-control'
                />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='mb-3'>
                <input
                  type='text'
                  placeholder='Last Name'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='mb-3'>
                <select className='form-select'>
                  <option>Country</option>
                  <option defaultValue='1'>USA</option>
                  <option defaultValue='2'>USA</option>
                  <option defaultValue='3'>USA</option>
                </select>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='mb-3'>
                <select className='form-select'>
                  <option>Language</option>
                  <option defaultValue='1'>English</option>
                  <option defaultValue='2'>Spanish</option>
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='mb-3'>
                <select className='form-select'>
                  <option>Time Zone</option>
                  <option defaultValue='1'>USA</option>
                  <option defaultValue='2'>USA</option>
                  <option defaultValue='3'>USA</option>
                </select>
              </div>
            </div>
          </div>

          <p>Contact Information</p>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-floating mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='name@example.com'
                />
                <label htmlFor='email'>Email address</label>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-floating mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='phone'
                  placeholder='Phone number'
                />
                <label htmlFor='email'>Phone Number</label>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-md-12'>
              <button className='btn btn-primary'>Update</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
