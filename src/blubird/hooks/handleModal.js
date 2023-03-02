import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetSteps } from "../../store/captable/captableSlice";

export const handleModal = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);

    setTimeout(() => {
      dispatch(resetSteps());
    }, 200);
  };

  return {
    show,
    handleClose,
  };
};
