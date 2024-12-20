import React, { useEffect, useState } from "react";
import BookTicketBox from "../components/BookTicketBox";
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
    quantitesPassangers: 0,
    flightType: "Economy",
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
    <div className="max-w-[1400px] mx-auto">

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