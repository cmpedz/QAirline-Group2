import React, { useEffect, useState } from "react";
import BookedTicket from "./BookedTicket";
import getBookedTicketsRequest from "../../clientRequest/BookedTicketsRequest.jsx";
import "../currentBooking/CurrentBooking.css";
const CurrentBooking = () => {
  
  const [bookedTickets, setBookedTickets] = useState([]);

  useEffect(() => {
    getBookedTicketsRequest(setBookedTickets)
  }, [])

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
                  return <BookedTicket key={index} bookedTicketInfors={bookedTicket} order={index}
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
