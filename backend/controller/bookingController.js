import bookings from "../models/bookingSchema.js";

export const getAllBookings = async (req, res) => {
  try {
    const allBookings = await bookings
      .find()
      .populate("flight", "flightNumber airline from to departDate arriveDate") 
      .populate("user", "firstName lastName email");

    res.status(200).json(allBookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
