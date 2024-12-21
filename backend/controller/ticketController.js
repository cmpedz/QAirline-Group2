import bookings from "../models/bookingSchema.js"
import tickets from "../models/ticketSchema.js"

  export async function deleteTicket(req, res) {
    const { ticketId } = req.params;
  
    try {
      const ticket = await tickets.findById(ticketId);
  
      if (!ticket) {
        return res.status(404).json({ message: "Ticket not found." });
      }
      console.log("check ticket deleted : " + JSON.stringify(ticket));
      if (ticket.bookingId) {
        const booking = await bookings.findById(ticket.bookingId);
        
        // const flight = await flight.findById(booking.flight);
        
        await bookings.findByIdAndDelete(ticket.bookingId);
      }
      await tickets.findByIdAndDelete(ticketId);
      return res.status(200).json({ message: "Ticket and booking deleted successfully." });
    } catch (error) {
      console.error("Error cancelling ticket:", error);
      return res.status(500).json({ message: "Failed to cancel ticket." });
    }
  };