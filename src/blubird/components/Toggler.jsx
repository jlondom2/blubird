import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Toggler({ handleToggle, item }) {
  return (
    <>
      <div id='toggler'>
        {/*   <!-- Sidebar Toggle--> */}
        <div className='toggle-bar text-center text-white'>
          <button
            className='btn btn-link text-white'
            onClick={handleToggle}
          >
            {item ? (
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
