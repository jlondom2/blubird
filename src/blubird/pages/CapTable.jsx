import { useDispatch, useSelector } from "react-redux";
import { showTokenDetails } from "../../store/captable/captableSlice";

import { MainContent } from "../ui/MainContent";
import { AllocationsCapTable } from "../views/capTable/AllocationsCapTable";
import { RoundDetails } from "../views/capTable/setup/RoundDetails";
import { TeamDetails } from "../views/capTable/setup/TeamDetails";

import { TokenDetails } from "../views/capTable/setup/TokenDetails";

export const CapTable = () => {
  const { setupDone, setupStep, tokenDetailsModal } = useSelector(
    (state) => state.captable
  );
  const dispatch = useDispatch();

  const startSetup = () => {
    dispatch(showTokenDetails());
  };

  return (
    <>
      <MainContent>
        {setupDone ? (
          <AllocationsCapTable />
        ) : (
          <>
            <button
              onClick={startSetup}
              className='btn btn-primary'
            >
              Start Captable Setup
            </button>

            <TokenDetails />
            <RoundDetails />
            <TeamDetails />
          </>
        )}
      </MainContent>
    </>
  );
};
