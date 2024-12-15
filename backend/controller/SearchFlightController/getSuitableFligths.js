import flights from "../../models/flightsDetailsModel/flightSchema.js";
import locationMove from "../../models/flightsDetailsModel/locationMoveSchema.js";



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

