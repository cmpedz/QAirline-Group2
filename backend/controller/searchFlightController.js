import flights from "../models/flightsDetailsModel/flightSchema.js";
import airlines from "../models/flightsDetailsModel/airlineSchema.js";
import serviceInfors from "../models/flightsDetailsModel/serviceInforsSchema.js";
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

  const { from, to, departureDate, arriveDate} = req.body;
  

  try {

    console.log("from req : " + from + ", to req : " + to);

    const fromLocation = await locationMove.findOne({ nameLocation: from });

    const toLocation = await locationMove.findOne({ nameLocation: to });


    if (!fromLocation || !toLocation) {
      return res
        .status(404)
        .json({ status: false, message: "No locations found" });
    }
    
    console.log("check fromlocation id : " + fromLocation);

    console.log("check tolocation id : " + toLocation);

    console.log("check date arrive" + departureDate);
    
    const matchedFlights = await flights.find({
      from: fromLocation._id,
      to: toLocation._id,
      //"departInfors.date" : departureDate,
    });

    if (matchedFlights.length === 0) {
      console.log("no flights matched");
      return res
        .status(404)
        .json({ status: false, message: "No flights found" });
    }
    const flightsWithComprehensiveInfo = await Promise.all(
      matchedFlights.map(async (flight) => {
        const populatedFlight = await flights.populate(flight, [
          { path: "airline"},
          {path : "from"},
          {path : "to"},
          { path: "flightsClass.service" }
        ]);
        return {
          ...populatedFlight.toObject(), 
          
        };
      })
    );
    console.log("check flights infors : " + JSON.stringify(flightsWithComprehensiveInfo));
    res.status(200).json(flightsWithComprehensiveInfo);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const getAllFlights = async (req, res) => {
  try {
    const allFlights = await flights.find().populate('from')
    .populate('to').populate('airline')
    .populate('flightsClass.service').exec();
    res.status(200).json(allFlights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
