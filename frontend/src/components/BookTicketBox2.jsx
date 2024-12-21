import React, { useEffect, useState } from "react";
import BookHome from "./BookHome.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Thêm useNavigate
import DisplayFlightsHandle from "../components/DisplayFlightsHandle.jsx";
import flightsSearchRequest from "../clientRequest/FlightsSearchRequest.jsx";

const TicketSearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Khởi tạo useNavigate
  const searchParams = new URLSearchParams(location.search);

  const [formData, setFormData] = useState({
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    departureDate: searchParams.get("departureDate") || "",
    returnDate: searchParams.get("returnDate") || "",
    flightType: "Economy",
  });

  const [searchStatus, setSearchStatus] = useState("");
  const [searchedFlights, setSearchedFlights] = useState([]);

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFlightSearch = async (e) => {
    e.preventDefault();
    flightsSearchRequest(formData, setSearchStatus, setSearchedFlights);
  };


  return (

    // <div className="px-[30px] md:px-[30px] max-w-[1400px] mx-auto">
    <div className="max-w-[1400px] mx-auto ">

        
        <div className="max-w-[520px] mx-auto bg-white p-7 rounded-lg shadow-lg border border-gray-300 min-h-[700px]"> 
        <div className="max-w-[300px] md:max-w-[500px] mx-auto bg-[#FED7AA] mb-[10px] py-[10px] px-[20px] rounded-lg border border-[#FED7AA]">
            <h1 className="text-[1em] text-[#00008B] md:text-[1.5em] text-blue font-bold text-center">
                FIND YOUR NEXT TRIP
            </h1>
        </div> 
         <BookHome
            formData={formData}
            setFormData={setFormData}
            handleFormDataChange={handleFormDataChange}
            handleFlightSearch={handleFlightSearch}
        />
        <button
          className="bg-[#FED7AA] text-[#00008B] font-bold px-5 py-2 mt-5 rounded-full transition duration-100 w-full border-2 border-transparent hover:border-[#1E293B]"
          onClick={handleFlightSearch}
        >
          Search Flights
        </button>
        </div>
        

      <DisplayFlightsHandle
        searchedFlights={searchedFlights}
        searchStatus={searchStatus}
      ></DisplayFlightsHandle>

      
    </div>
  );
};

export default TicketSearchPage;