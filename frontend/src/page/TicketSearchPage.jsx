import React, { useEffect, useState } from "react";
import BookTicketBox from "../components/BookTicketBox";
import { Link, useLocation } from "react-router-dom";

const TicketSearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  const [formData, setFormData] = useState({
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    departDate: searchParams.get("departDate") || "",
    flightType: "Economy",
  });

  const [searchStatus, setSearchStatus] = useState("");

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  
  return (
    <div className="px-[30px] md:px-[30px] max-w-[1400px] mx-auto">
      <BookTicketBox
        formData={formData}
        handleFormDataChange={handleFormDataChange}
      />
      <p className="py-5">
        <p>{searchStatus}</p>
      </p>
      
    </div>
  );
};

export default TicketSearchPage;
