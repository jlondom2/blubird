import { First } from "./steps/First";
import { Second } from "./steps/Second";
import { Third } from "./steps/Third";
import { Four } from "./steps/Four";
import { useSelector } from "react-redux";

export const QuickSetupForm = () => {
  const { formPage } = useSelector((state) => state.tokenomics);
  switch (formPage) {
    case 0:
      return <First />;
    case 1:
      return <Second />;
    case 2:
      return <Third />;
    case 3:
      return <Four />;
    default:
      return <First />;
  }
};
