import React from "react";


const BookedTicket = (props) =>{

    const {order, flight, departCity, arrivalCity, departDate, arrivalDate, seatNumber, price, classType, flightNumber, handleEdit} = props.bookedTicketInfors

    return(
    
        
        <tr key={order} className="border-t hover:bg-gray-50 transition">
        <td className="py-4 px-6 text-center">{flightNumber}</td>
        <td className="py-4 px-6 text-center">{flight}</td>
        <td className="py-4 px-6 text-center">
          <p className="font-semibold">{departCity}</p>
          <p className="text-gray-500 text-sm">{departDate}</p>
        </td>
        <td className="py-4 px-6 text-center">
          <p className="font-semibold">{arrivalCity}</p>
          <p className="text-gray-500 text-sm">{arrivalDate}</p>
        </td>
        <td className="py-4 px-6 text-center">{classType}</td>
        <td className="py-4 px-6 text-center">{seatNumber}</td>
        <td className="py-4 px-6 text-center">{price}</td>
        <td className="py-4 px-6 text-center">
          <button  className="text-blue-500 font-semibold hover:underline">
            Cancel
          </button>
        </td>
        </tr>
      
    )
}

export default BookedTicket;