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
    <div className="current-booking">
      <h1>Current Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Flight</th>
            <th>Departure City</th>
            <th>Arrival City</th>
            <th>Departure Date</th>
            <th>Arrival Date</th>
            <th>Seat Number</th>
          </tr>
        </thead>
        <tbody>
        {
           bookedTickets.length > 0 ? (
                
                   bookedTickets.map((bookedTicket, index) =>{
                    console.log("check index : " + index);
                    return  (<BookedTicket key={index} bookedTicketInfors={bookedTicket} order={index}/>);
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
