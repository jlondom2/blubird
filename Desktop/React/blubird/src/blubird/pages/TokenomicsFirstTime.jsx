import { useSelector } from "react-redux";

import { MainContent } from "../ui/MainContent";

import { NoDemo } from "../views/tokenomicsTables/NoDemo";

export const TokenomicsFirstTime = () => {
  const { setupDone } = useSelector((state) => state.tokenomics);

  return (
    <>
      <MainContent>
        <NoDemo />
      </MainContent>
    </>
  );
};
