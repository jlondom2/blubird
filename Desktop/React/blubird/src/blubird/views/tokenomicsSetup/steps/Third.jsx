import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setFormFields,
  setFormPage,
} from "../../../../store/tokenomics/tokenomicsSlice";

export const Third = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => {
    console.log(data);
    const { seed_round, private_round, proposed_raise_amount_private_round } =
      data;
    dispatch(setFormFields(seed_round));
    dispatch(setFormFields(private_round));
    dispatch(setFormFields(proposed_raise_amount_private_round));
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
        <div className='step done'>
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
            <strong>Seed Round</strong>
          </h6>
          <p>Do you have a seed round</p>
          <select
            name=''
            className='form-select mb-3'
            id=''
            {...register("seed_round", { required: true })}
          >
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>

          {errors.seed_round && <p className='errors'>Field is required</p>}
        </div>

        <div className='mb-3 mt-4'>
          <h6>
            <strong>Private Round</strong>
          </h6>
          <p>Do you have a private round</p>
          <select
            name=''
            className='form-select mb-3'
            id=''
            {...register("private_round", { required: true })}
          >
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>

          {errors.private_round && <p className='errors'>Field is required</p>}
          <input
            type='text'
            placeholder='Enter Proposed Raise Amount'
            className='form-control'
            {...register("proposed_raise_amount_private_round", {
              required: true,
            })}
          ></input>
          {errors.proposed_raise_amount_private_round && (
            <p className='text-danger'>Field is required</p>
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
