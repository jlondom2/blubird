import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormFields,
  setFormPage,
} from "../../../../store/tokenomics/tokenomicsSlice";

export const First = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => {
    console.log(data);

    const { deployment_chain, token_ticker, no_token_ticker } = data;

    dispatch(setFormFields(deployment_chain));

    if (token_ticker.length < 1) {
      dispatch(setFormFields(no_token_ticker));
    } else {
      dispatch(setFormFields(token_ticker));
    }

    dispatch(setFormPage());
  };

  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <>
      {/* <!-- PROGRESS STEPS --> */}
      <div className='progress-steps'>
        <div className='step done'>
          <div className='step-circle'></div>
          <span className='label'>Token Details</span>
        </div>

        <div className='step'>
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
            <strong>Deployment Chain</strong>
          </h6>
          <p>Which chain will you be deploying to?</p>
          <input
            type='text'
            placeholder='Select or Enter Chain Code'
            className='form-control'
            required
            {...register("deployment_chain", { required: true })}
          />
          {errors.deployment_chain && (
            <p className='errors'>Field is required</p>
          )}
        </div>

        <div className='mb-3 mt-4'>
          <h6>
            <strong>Token Ticker</strong>
          </h6>
          <p>What is your token ticker?</p>
          {!check && (
            <input
              type='text'
              placeholder='Enter Token Ticker'
              className='form-control'
              required
              {...register("token_ticker")}
            />
          )}
        </div>

        <div className='mb-3'>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='checkbox'
              id='inlineCheckbox1'
              value='no_token_ticker'
              {...register("no_token_ticker")}
              onChange={handleCheck}
            />
            <label
              className='form-check-label'
              htmlFor='inlineCheckbox1'
            >
              There is no token ticker at this time
            </label>
          </div>
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
