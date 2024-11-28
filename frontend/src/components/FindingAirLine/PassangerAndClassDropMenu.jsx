import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from "react";
import PassangerTypeChoice from "./PassangerAndClassDropDownMenuComponent/PassangerTypeChoice";
import ClassTypeChoice from "./PassangerAndClassDropDownMenuComponent/ClassTypeChoice";

const PassangerAndClassChoiceDropMenu = forwardRef((props, ref) => {
  
  const dropDownRef = useRef();
  const bgDropDownRef = useRef();


  useEffect(() => {
    if (props.isDropdownVisible) {

      dropDownRef.current.classList.remove("hidden");
      dropDownRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

      if(window.innerWidth < 768){
        bgDropDownRef.current.classList.remove("hidden")
        document.body.classList.add("overflow-hidden");
      }
    } else {

      dropDownRef.current.classList.add("hidden");
      
      if(!bgDropDownRef.current.classList.contains("hidden")){
        bgDropDownRef.current.classList.add("hidden")
      }

      if(document.body.classList.contains("overflow-hidden")){
        document.body.classList.remove("overflow-hidden")
      }

    }
  }, [props.isDropdownVisible]);

  return (
    <>
      <div
        ref={bgDropDownRef}
        className="fixed md:static w-[100%] h-[100%] bg-black bg-opacity-50 inset-0 z-49 hidden"
      ></div>

      <div ref={dropDownRef}
        className={`absolute right-0 top-20 bg-gray-100 w-[100%] md:w-[270px] px-5 border-1 rounded-[10px] py-5 z-50 hidden`}
      >
        <div className="w-[100%] flex flex-row items-center justify-between">
          <h1 className="font-bold">Passenger</h1>
          <i
            className="fa-solid fa-x cursor-pointer"
            onClick={() => props.setIsDropdownVisible(false)}
          ></i>
        </div>
        <br />
        <hr className="border-1 border-black" />
        <br />
        <div>
          <PassangerTypeChoice passengerType="Adults" age="12+ years" />
          <PassangerTypeChoice passengerType="Child" age="2-11 years" />
        </div>
        <br />
        <h1 className="font-bold">Class</h1>
        <br />
        <hr className="border-1 border-black" />
        <br />
        <div>
          <ClassTypeChoice label_name="Economy" />
          <ClassTypeChoice label_name="Business" />
          <br />
          <button className="border-1 rounded-[10px] w-[100%] bg-purple-500 py-1 text-white">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
});

export default PassangerAndClassChoiceDropMenu;