import React from "react";


const BookedTicket = (props) =>{

    const {order, flight, departCity, arrivalCity, departDate, arrivalDate, seatNumber} = props.bookedTicketInfors

    return(
    
        
          <tr>
            <td>{props.order + 1}</td>
            <td>{flight}</td>
            <td>{departCity}</td>
            <td>{arrivalCity}</td>
            <td>{departDate}</td>
            <td>{arrivalDate}</td>
            <td>{seatNumber}</td>
          </tr>
      
    )
}

export default BookedTicket;