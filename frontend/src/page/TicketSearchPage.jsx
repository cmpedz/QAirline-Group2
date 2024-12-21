import React, { useEffect, useState } from "react";
import BookTicketBox from "../components/BookTicketBox";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Thêm useNavigate
import DisplayFlightsHandle from "../components/DisplayFlightsHandle.jsx";
import flightsSearchRequest from "../clientRequest/FlightsSearchRequest.jsx";

const TicketSearchPage = () => {
  const location = useLocation();
  const data = location.state || {};

  const [formData, setFormData] = useState({
    from: data.from,
    to: data.to,
    departureDate: data.departureDate,
    returnDate: data.returnDate,
  });

  useEffect(() => {
    console.log("check form data change : " + JSON.stringify(formData));
  }, [formData]);

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
    <div className="max-w-[1400px] pb-[30px] mx-auto">

      <h1 className="text-[2.7em] font-bold text-white mb-[30px] mt-[20px] text-center ">Book Flight</h1>
      <BookTicketBox
        formData={formData}
        setFormData={setFormData}
        handleFormDataChange={handleFormDataChange}
        handleFlightSearch={handleFlightSearch}
      />

      <DisplayFlightsHandle
        searchedFlights={searchedFlights}
        searchStatus={searchStatus}
      ></DisplayFlightsHandle>

      
    </div>
  );
};

export default TicketSearchPage;