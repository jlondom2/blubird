import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import { onToggle } from "../../../store/ui/togglerSlice";

function Toggler() {
  const { toggled } = useSelector((state) => state.toggler);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(onToggle(!toggled));
  };
  return (
    <>
      <div id='toggler'>
        {/*   <!-- Sidebar Toggle--> */}
        <div className='toggle-bar text-center text-white'>
          <button
            className='btn btn-link text-white'
            onClick={handleToggle}
          >
            {toggled ? (
              <FontAwesomeIcon icon='fa-solid fa-chevron-right' />
            ) : (
              <FontAwesomeIcon icon='fa-solid fa-chevron-left' />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Toggler;
