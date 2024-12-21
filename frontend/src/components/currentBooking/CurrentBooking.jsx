import React, { useEffect, useState } from "react";
import BookedTicket from "./BookedTicket";
import getBookedTicketsRequest from "../../clientRequest/BookedTicketsRequest.jsx";
import "../currentBooking/CurrentBooking.css";
import axios from "axios";

const CurrentBooking = () => {
  
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    getBookedTicketsRequest(setBookedTickets)
  }, [])

  const handleCancel = async (ticketId) => {
    try {
      console.log(ticketId);
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:5000/api/tickets/delete-ticket/${ticketId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json"
          },
        }
      );
      if (response.status === 200) {
        setBookedTickets((prevTickets) => prevTickets.filter(ticket => ticket.ticketId !== ticketId));
      }
    } catch (error) {
      console.error("Failed to cancel ticket:", error);
      alert("Failed to cancel ticket. Please try again.");
    }
  };

  useEffect(() => {
    console.log("check bookedTickets : " + JSON.stringify(bookedTickets.length));
  }, [bookedTickets])


  return (

    <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-200">
      <thead className="bg-gray-200 text-gray-700 text-sm uppercase font-semibold">
        <tr>
          <th className="py-4 px-6 text-center">Flight No.</th>
          <th className="py-4 px-6 text-center">Aircraft</th>
          <th className="py-4 px-6 text-center">Departure</th>
          <th className="py-4 px-6 text-center">Arrival</th>
          <th className="py-4 px-6 text-center">Seat Class</th>
          <th className="py-4 px-6 text-center">Seat Number</th>
          <th className="py-4 px-6 text-center">Total Price</th>
          <th className="py-4 px-6 text-center">Action</th>
        </tr>
      </thead>
      <tbody>

      {
       bookedTickets.length > 0 ? (
            
               bookedTickets.map((bookedTicket, index) =>{
                  console.log("check index " + index);
                  return <BookedTicket key={index} bookedTicketInfors={bookedTicket} order={index} handleCancel={handleCancel}

                />  
              })
      ) : (      
        null
      )
    }

      </tbody>
    </table>
  </div>
   
  );
};

export default CurrentBooking;
