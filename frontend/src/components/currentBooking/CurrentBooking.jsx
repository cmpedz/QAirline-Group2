import React, { useEffect, useState } from "react";
import BookedTicket from "./BookedTicket";
import getBookedTicketsRequest from "../../clientRequest/BookedTicketsRequest.jsx";
import "../currentBooking/CurrentBooking.css";
import axios from "axios";
import { now } from "mongoose";
import WattingProcess from "../Loading/WattingProcess.jsx";

const CurrentBooking = () => {
  
  const [bookedTickets, setBookedTickets] = useState([]);

  const [isVisiable, setIsVisiable] = useState(false);
  // function isCancelationValidate(index) {
  //   const currentTimestamp = Date.now(); 
  //   console.log("check booked index : " + index-1);
  //   console.log("check bookedTickets : " + JSON.stringify(bookedTickets[index-1]));
  
  //   const departDateStr = bookedTickets[index].departDate.split(" ")[1]; 
  //   const departTimestamp = new Date(departDateStr).getTime(); 
  
  //   const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  //   const cancelationDeadline = departTimestamp - oneDayInMilliseconds;
  
  //   console.log("Check depart date:", departDateStr); 
  //   console.log("Cancellation Deadline:", new Date(cancelationDeadline).toISOString()); 
  
  //   return currentTimestamp < cancelationDeadline; 
  // }

  useEffect(() => {
    getBookedTicketsRequest(setBookedTickets)
  }, [])

  const handleCancel = async (ticketId) => {
    try {
      console.log(ticketId);
      const token = localStorage.getItem("token");
      setIsVisiable(true);
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

        setIsVisiable(false);
     
     
    } catch (error) {
      console.error("Failed to cancel ticket:", error);
      setIsVisiable(false);
      alert("Failed to cancel ticket. Please try again.");
    }
  };

  useEffect(() => {
    console.log("check bookedTickets : " + JSON.stringify(bookedTickets.length));
    
  }, [bookedTickets])


  return (
    <>
    <WattingProcess isVisible = {isVisiable}></WattingProcess>
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
  </>
   
  );
};

export default CurrentBooking;
