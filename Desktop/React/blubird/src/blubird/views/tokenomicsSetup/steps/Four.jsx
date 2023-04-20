import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  saveFormtoBackend,
  setFormFields,
  setFormPage,
} from "../../../../store/tokenomics/tokenomicsSlice";

export const Four = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => {
    console.log(data);
    const {
      total_supply,
      allocation_team,
      allocation_advisory,
      allocation_marketing,
      allocation_rewards,
      allocation_ecosystem,
      allocation_partnerships,
      allocation_treasury,
    } = data;
    dispatch(setFormFields(total_supply));
    dispatch(setFormFields(allocation_team));
    dispatch(setFormFields(allocation_advisory));
    dispatch(setFormFields(allocation_rewards));
    dispatch(setFormFields(allocation_ecosystem));
    dispatch(setFormFields(allocation_marketing));
    dispatch(setFormFields(allocation_partnerships));
    dispatch(setFormFields(allocation_treasury));

    /* Call backend */
    dispatch(saveFormtoBackend());
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
        <div className='step done'>
          <div className='step-circle'></div>
          <span className='label'>Allocations</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <h6>
            <strong>Total Supply</strong>
            <a
              href='#'
              className='text-info ms-2 fs-5'
            >
              <i className='fa-solid fa-circle-question'></i>
            </a>
          </h6>
          <p>What is your Total Supply?</p>
          <input
            type='text'
            name=''
            className='form-control'
            placeholder='Enter your Total Supply'
            {...register("total_supply", { required: true })}
          />
          {errors.total_supply && <p className='errors'>Field is required</p>}
        </div>

        <div className='mb-3 mt-4'>
          <h6>
            <strong>Allocation Buckets</strong>
          </h6>
          <p>Select areas of allocation for your tokens</p>

          <div
            className='allocation-buckets gap-2'
            role='group'
            aria-label='Basic checkbox toggle button group'
          >
            <input
              type='checkbox'
              className='btn-check'
              id='btncheck1'
              autoComplete='off'
              {...register("allocation_team")}
            />
            <label
              className='btn btn-outline-primary'
              htmlFor='btncheck1'
            >
              TEAM
            </label>

            <input
              type='checkbox'
              className='btn-check'
              id='btncheck2'
              autoComplete='off'
              {...register("allocation_advisory")}
            />
            <label
              className='btn btn-outline-primary'
              htmlFor='btncheck2'
            >
              ADVISORY
            </label>

            <input
              type='checkbox'
              className='btn-check'
              id='btncheck3'
              autoComplete='off'
              {...register("allocation_marketing")}
            />
            <label
              className='btn btn-outline-primary'
              htmlFor='btncheck3'
            >
              MARKETING
            </label>

            <input
              type='checkbox'
              className='btn-check'
              id='btncheck4'
              autoComplete='off'
              {...register("allocation_rewards")}
            />
            <label
              className='btn btn-outline-primary'
              htmlFor='btncheck4'
            >
              REWARDS
            </label>
            <input
              type='checkbox'
              className='btn-check'
              id='btncheck5'
              autoComplete='off'
              {...register("allocation_ecosystem")}
            />
            <label
              className='btn btn-outline-primary'
              htmlFor='btncheck5'
            >
              ECOSYSTEM
            </label>
            <input
              type='checkbox'
              className='btn-check'
              id='btncheck6'
              autoComplete='off'
              {...register("allocation_partnerships")}
            />
            <label
              className='btn btn-outline-primary'
              htmlFor='btncheck6'
            >
              PARTNERSHIPS
            </label>
            <input
              type='checkbox'
              className='btn-check'
              id='btncheck7'
              autoComplete='off'
              {...register("allocation_liquidity")}
            />
            <label
              className='btn btn-outline-primary'
              htmlFor='btncheck7'
            >
              LIQUIDITY
            </label>
            <input
              type='checkbox'
              className='btn-check'
              id='btncheck8'
              autoComplete='off'
              {...register("allocation_treasury")}
            />
            <label
              className='btn btn-outline-primary'
              htmlFor='btncheck8'
            >
              TREASURY
            </label>
          </div>
        </div>

        <div className='d-grid mt-5'>
          <button
            type='submit'
            className='btn btn-primary btn-block'
          >
            CREATE
          </button>
        </div>
      </form>
    </>
  );
};
