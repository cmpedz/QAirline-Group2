import flights from "../models/flightsDetailsModel/flightSchema.js";
import airlines from "../models/flightsDetailsModel/airlineSchema.js";
import locationMove from "../models/flightsDetailsModel/locationMoveSchema.js";
import mongoose from "mongoose";

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




export const getAllFlights = async (req, res) => {
  try {
    const allFlights = await flights.find().populate('from')
    .populate('to').populate('airline');
    res.status(200).json(allFlights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
