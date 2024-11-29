import React, { useEffect, useState } from "react";
import BookTicketBox from "../components/BookTicketBox";
import { Link, useLocation } from "react-router-dom";
import { BACKENDURL } from "../Config/Config.js";
import { toast } from "react-toastify";

const TicketSearchPage = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  const [formData, setFormData] = useState({
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    departureDate: searchParams.get("departureDate") || "",
    returnDate: searchParams.get("returnDate") || "",
    flightType: "Economy"
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

    if (!formData.from || !formData.to) {
      setSearchStatus("Enter flight details to search flights");
      return;
    }

    if(!formData.departureDate){
      setSearchStatus("Enter departure date to search flights");
      return;
    }

    try {
      const response = await fetch(BACKENDURL + "/api/flights/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("check data get : " + JSON.stringify(formData));

      const data = await response.json();

      if (data.status === false) {
        toast.error(data.message);
        // Reset searchedFlights state to clear previous flight data
        setSearchedFlights([]);
        setSearchStatus("No flights found for the provided informations");
      } else {
        setSearchedFlights(data);
        setSearchStatus(
          <>
            <b>{data.length}</b> flights found from <b>{formData.from}</b> to{" "}
            <b>{formData.to}</b>
          </>
        );
      }
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };


  
  return (
    <div className="px-[30px] md:px-[30px] max-w-[1400px] mx-auto">
    <BookTicketBox
      formData={formData}
      handleFormDataChange={handleFormDataChange}
      handleFlightSearch={handleFlightSearch}
    />
    <p className="py-5">
      <p>{searchStatus}</p>
    </p>
    {searchedFlights.length > 0 ? (
      <div className="flex justify-center items-center gap-5 flex-wrap w-full">
        {searchedFlights.map((flight, index) => {
          console.log(flight);
        }
          
        )}
      </div>
    ) : null}
  </div>
);
};

export default TicketSearchPage;
