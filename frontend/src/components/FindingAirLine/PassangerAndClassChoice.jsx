import React, { useRef, useState } from "react";
import PassangerAndClassChoiceDropMenu from "./PassangerAndClassDropMenu";

function PassengerAndClassChoice() {
  const dropDownRef = useRef();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);


  const onClickHandle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex gap-5 md:w-1/5 flex-row px-5 relative pb-5 md:py-5 cursor-pointer justify-between">
      <div>
        <div>
          <h1>Passengers/Class</h1>
          <p className="outline-none text-[20px] w-full text-gray-400"> sth here</p>
        </div>
      </div>

      <div>
        <svg
          onClick={onClickHandle}
          className={`w-5 h-5 text-gray-400 self-center transition-transform duration-500 ease-in-out ${
            isDropdownVisible ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <PassangerAndClassChoiceDropMenu ref={dropDownRef} setIsDropdownVisible = {setIsDropdownVisible} isDropdownVisible = {isDropdownVisible}/>
    </div>
  );
}

export default PassengerAndClassChoice;