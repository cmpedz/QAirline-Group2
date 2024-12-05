import flights from "../models/flightSchema.js";
import airlines from "../models/airlineSchema.js"

export const addFlight = async (req, res) => {
  const {
    from,
    to,
    departDate,
    arriveDate,
    departTime,
    arriveTime,
    airlineUid,
    price,
  } = req.body;

  try {
    const airline = await airlines.findById(airlineUid);

    if (!airline) {
      return res.status(404).json({ message: "Airline not found" });
    }

    const newFlight = new flights({
      airline: airline._id, 
      from,
      to,
      departDate,
      arriveDate,
      departTime,
      arriveTime,
      price,
    });

    await newFlight.save();

    res.status(200).json("Add flight successfully");
  } catch (error) {
    console.error("Error when adding new flight:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSingleFlight = async (req, res) => {
  const { id } = req.params;

  try {
    const flight = await flights.findById(id).populate("airline");

    if (!flight) {
      return res
        .status(404)
        .json({ status: false, message: "Flight not found" });
    }

    const flightWithAirlineInfo = {
      ...flight.toObject(),
      airlineLogo: flight.airline.airlineLogo,
    };

    res.status(200).json(flightWithAirlineInfo);
  } catch (error) {
    console.error("Error when getting flight:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const getFlights = async (req, res) => {
  const { from, to, departDate, arriveDate} = req.body;

  try {

    console.log("check infors from req : " + JSON.stringify(req.body));
    
    const matchedFlights = await flights.find({
      from: from,
      to: to,
      departDate: departDate,
    });

    if (matchedFlights.length === 0) {
      return res
        .status(404)
        .json({ status: false, message: "No flights found" });
    }
    const flightsWithAirlineInfo = await Promise.all(
      matchedFlights.map(async (flight) => {
        const populatedFlight = await flights.populate(flight, {
          path: "airline",
        });
        return {
          ...populatedFlight.toObject(), 
          airlineLogo: populatedFlight.airline.airlineLogo,
        };
      })
    );

    res.status(200).json(flightsWithAirlineInfo);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const getAllFlights = async (req, res) => {
  try {
    const allFlights = await flights.find();
    res.status(200).json(allFlights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
