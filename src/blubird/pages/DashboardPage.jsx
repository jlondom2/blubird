import { useSelector } from "react-redux";

import { TokenomicsSetup } from "../views/TokenomicsSetup";
import { Allocations } from "../views/tokenomicsTables/Allocations";
import { ReleaseSchedule } from "../views/tokenomicsTables/ReleaseSchedule";
import { MainContent } from "../ui/MainContent";
import { TeamDetails } from "../views/capTable/setup/TeamDetails";

export const DashboardPage = () => {
  const { setupDone } = useSelector((state) => state.tokenomics);

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
      </MainContent>
    </>
  );
};
