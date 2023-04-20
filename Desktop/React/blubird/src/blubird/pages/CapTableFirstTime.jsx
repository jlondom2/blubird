import { useSelector } from "react-redux";

import { TokenomicsSetup } from "../views/TokenomicsSetup";
import { Allocations } from "../views/tokenomicsTables/Allocations";
import { ReleaseSchedule } from "../views/tokenomicsTables/ReleaseSchedule";
import { MainContent } from "../ui/MainContent";
import { TeamDetails } from "../views/capTable/setup/TeamDetails";
import { AllocationsEmpty } from "../views/tokenomicsTables/AllocationsEmpty";
import { ReleaseScheduleEmpty } from "../views/tokenomicsTables/ReleaseScheduleEmpty";
import { CaptableFirst } from "../views/capTable/CaptableFirstTime";

export const CapTableFirstTime = () => {
  const { setupDone } = useSelector((state) => state.tokenomics);

  return (
    <>
      <MainContent>
        <CaptableFirst />
      </MainContent>
    </>
  );
};
