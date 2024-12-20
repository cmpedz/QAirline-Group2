import bookings from "../models/bookingSchema.js";

export const getAllBookings = async (req, res) => {
  try {
    const allBookings = await bookings
      .find()
      .populate({
        path: "flight",
        select: "flightNumber from to departDate arriveDate airline",
        populate: [
          {
            path: "from", select: "nameLocation"
          },
          {
            path: "to", select: "nameLocation"
          },
          {
            path: "airline", select: "airlineCode"
          }
        ]

      }) 
      .populate("user","name");

    res.status(200).json(allBookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
