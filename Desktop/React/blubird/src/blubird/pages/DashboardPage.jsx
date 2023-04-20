import { useSelector } from "react-redux";

import { TokenomicsSetup } from "../views/TokenomicsSetup";
import { Allocations } from "../views/tokenomicsTables/Allocations";
import { ReleaseSchedule } from "../views/tokenomicsTables/ReleaseSchedule";
import { MainContent } from "../ui/MainContent";
import { TeamDetails } from "../views/capTable/setup/TeamDetails";

import { Navigate } from "react-router-dom";

export const DashboardPage = () => {
  const { setupDone } = useSelector((state) => state.tokenomics);

  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <MainContent>
        {!setupDone ? (
          <>
            <TokenomicsSetup />
          </>
        ) : (
          <>
            <Allocations />
            <ReleaseSchedule />
            <TeamDetails />
          </>
        )}

        {user.first_time ? (
          <>
            <Navigate to='/tokenomics-first-time' />
          </>
        ) : (
          <></>
        )}
      </MainContent>
    </>
  );
};
