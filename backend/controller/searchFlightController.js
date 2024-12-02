import Flight from "../models/flightSchema.js";


export const getFlights = async (req, res) => {
  const { from, to, departureDate, returnDate, flightType } = req.body;

  try {
    // Find flights based on the provided criteria

    console.log("check infors from req : " + JSON.stringify(req.body));
    

    const flights = await Flight.find({
      from: from,
      to: to,
      departDate: departureDate,
    });

    if (flights.length === 0) {
      return res
        .status(404)
        .json({ status: false, message: "No flights found" });
    }

    res.status(200).json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllFlights = async (req, res) => {
  try {
    // Fetch all flights and populate the airline field
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
