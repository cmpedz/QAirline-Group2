import User from "../../models/userSchema.js";
import Tickets from "../../models/ticketSchema.js";

function convertDate(date){
    let _date = date.date;
    let time = date.time;
    return time + ", " + _date;
}

export const getAllUserBookedTickets = async (req, res) => {
  const userId = req.userId;
  try {
    console.log("check user id : " + userId);
    const userInfors = await User.findById(userId).populate("bookings"); 

    console.log("current user bookings : " + JSON.stringify(userInfors));
    if(userInfors == null) return res.status(404).json({ message: "User not found" });;
    
    const bookedTicketsId = userInfors.bookings;

    const bookedTickets = [];

    await Promise.all(bookedTicketsId.map(async (bookedTicketId) =>  {
        let bookedTicket = await Tickets.findById(bookedTicketId)
        .populate({
            path: 'bookingId',
            populate: [
              {
                path: 'flight',
                populate: [
                  {
                    path: 'airline',
                    select: 'airlineCode',
                  },
                  {
                    path: 'from',
                    select: 'nameLocation',
                  },
                  {
                    path: 'to',
                    select: 'nameLocation',
                  },
                ],
                select: 'departDate arriveDate',
              },
            ],
            select: 'seatNumber',
          });



        let bookedticketInfors = {
            flight : bookedTicket.bookingId.flight.airline.airlineCode, 
            departCity : bookedTicket.bookingId.flight.from.nameLocation, 
            arrivalCity : bookedTicket.bookingId.flight.to.nameLocation, 
            departDate : convertDate(bookedTicket.bookingId.flight.departDate), 
            arrivalDate : convertDate(bookedTicket.bookingId.flight.arriveDate),
            seatNumber : bookedTicket.bookingId.seatNumber
        }
          
        bookedTickets.push(bookedticketInfors);
    }));

    return res.status(200).json(bookedTickets);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

