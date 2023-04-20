import { useSelector } from "react-redux";

import { MainContent } from "../ui/MainContent";

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
