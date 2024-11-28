import React from "react";
import FindingAirLineBar from "./FindingAirLine/FindingAirLineBar";

const BookTicketBox = ({
  formData,
  handleFormDataChange
}) => {
  return (

    <div className="py-[50px] mx-auto px-5 border-[2px] rounded-[10px] border-black-700 h-[42rem] md:h-[20rem] flex md:flex flex-col ">

      <div className="flex flex-col ">
        <div className="flex gap-5 items-center justify-start mb-5">
          <div className="flex justify-center items-center gap-2">
            <input type="radio" name="ticketType" id="oneWay" defaultChecked class="h-[1rem] w-[1rem]"/>
            <label htmlFor="oneWay">One way</label>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input type="radio" name="ticketType" id="return" defaultChecked class="h-[1rem] w-[1rem]"/>
            <label htmlFor="return">Return</label>
          </div>
        </div>

        <FindingAirLineBar formData = {formData} handleFormDataChange = {handleFormDataChange} />
        
      </div>
      <button
        className="hover:bg-[#1E293B] bg-[#bebebe] text-black hover:text-white px-5 py-2 mt-5 rounded-lg transition duration-100 w-[200px] self-center md:self-end "
      
      >
        Search Flights
      </button>
    </div>
  );
};

export default BookTicketBox;
