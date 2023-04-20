import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormFields,
  setFormPage,
} from "../../../../store/tokenomics/tokenomicsSlice";

export const Second = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => {
    console.log(data);
    const { total_raise_amount, public_sale, proposed_raise_amount } = data;
    dispatch(setFormFields(total_raise_amount));
    dispatch(setFormFields(public_sale));
    dispatch(setFormFields(proposed_raise_amount));
    dispatch(setFormPage());
  };

  return (
    <>
      {/* <!-- PROGRESS STEPS --> */}
      <div className='progress-steps'>
        <div className='step done'>
          <div className='step-circle'></div>
          <span className='label'>Token Details</span>
        </div>

        <div className='step done'>
          <div className='step-circle'></div>
          <span className='label'>Raise Details</span>
        </div>
        <div className='step'>
          <div className='step-circle'></div>
          <span className='label'>Investment Rounds</span>
        </div>
        <div className='step'>
          <div className='step-circle'></div>
          <span className='label'>Allocations</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <h6>
            <strong>Total Raise</strong>
          </h6>
          <p>How much is your total raise?</p>
          <input
            type='text'
            placeholder='Enter Total Raise Amount'
            className='form-control'
            {...register("total_raise_amount", { required: true })}
          />
          {errors.total_raise_amount && (
            <p className='errors'>Field is required</p>
          )}
        </div>

        <div className='mb-3 mt-4'>
          <h6>
            <strong>Public Sale</strong>
          </h6>
          <p>Do you have a public sale?</p>
          <select
            name=''
            className='form-select mb-3'
            id=''
            {...register("public_sale", { required: true })}
          >
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>

          {errors.public_sale && <p className='errors'>Field is required</p>}

          <input
            type='text'
            placeholder='Enter Proposed Raise Amount'
            className='form-control'
            {...register("proposed_raise_amount", { required: true })}
          ></input>

          {errors.proposed_raise_amount && (
            <p className='errors'>Field is required</p>
          )}
        </div>

        <div className='d-grid mt-5'>
          <button
            type='submit'
            className='btn btn-primary btn-block'
          >
            NEXT
          </button>
        </div>
      </form>
    </>
  );
};
