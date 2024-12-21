import flights from "../../models/flightsDetailsModel/flightSchema.js";
import locationMove from "../../models/flightsDetailsModel/locationMoveSchema.js";



export const getFlights = async (req, res) => {

  const { from, to, departureDate, returnDate, quantitesPassangers, flightType} = req.body;

  if (!from || !to) {
    return res
    .status(400)
    .json({ status: false, message: "Enter flight details to search flights" });
  }

  if(!departureDate){
    return res
    .status(400)
    .json({ status: false, message: "Enter departure date to search flights" });
  }

  if(quantitesPassangers == 0){
    return res
    .status(400)
    .json({ status: false, message: "Enter quantities passangers to search flights" });
  }

  try {


    const fromLocation = await locationMove.findOne({ nameLocation: from });

    const toLocation = await locationMove.findOne({ nameLocation: to });


    if (!fromLocation || !toLocation) {
      return res
        .status(404)
        .json({ status: false, message: "No locations found" });
    }
    
    const matchedFlights = await flights.find({
      from: fromLocation._id,
      to: toLocation._id,
      "departDate.date" : departureDate,
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
          {path : "to"}
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

