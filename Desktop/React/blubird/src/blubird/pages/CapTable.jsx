import { useDispatch, useSelector } from "react-redux";
import { showTokenDetails } from "../../store/captable/captableSlice";

import { MainContent } from "../ui/MainContent";
import { AllocationsCapTable } from "../views/capTable/AllocationsCapTable";
import { AdvisoryDetails } from "../views/capTable/setup/AdvisoryDetails";
import { RoundDetails } from "../views/capTable/setup/RoundDetails";
import { TeamDetails } from "../views/capTable/setup/TeamDetails";

import { TokenDetails } from "../views/capTable/setup/TokenDetails";
import { Navigate } from "react-router-dom";

export const CapTable = () => {
  const { setupDone, setupStep, tokenDetailsModal } = useSelector(
    (state) => state.captable
  );

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startSetup = () => {
    dispatch(showTokenDetails());
  };

  return (
    <>
      <MainContent>
        {setupDone ? (
          <>
            <AllocationsCapTable />
            <a
              role='button'
              onClick={startSetup}
            >
              Open Cap Table Setup
            </a>
          </>
        ) : (
          <>
            <button
              onClick={startSetup}
              className='btn btn-primary'
            >
              Start Captable Setup
            </button>
          </>
        )}

        {user.first_time ? <Navigate to='/captable-first-time' /> : <></>}

        <TokenDetails />
        <RoundDetails />
        <TeamDetails />
        <AdvisoryDetails />
      </MainContent>
    </>
  );
};
