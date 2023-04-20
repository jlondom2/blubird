export const Loader = () => {
  return (
    <>
      <section
        className='vh-100 text-center'
        style={{ backgroundColor: "#171717" }}
      >
        <div className='container py-5 h-100'>
          <div className='row d-flex align-items-center justify-content-center h-100'>
            <div
              className='spinner-border text-light'
              role='status'
            >
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loader;
