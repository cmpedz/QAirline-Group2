import locationMove from  "../models/flightsDetailsModel/locationMoveSchema.js"

export async function addAirport(req, res) {
    const { nameLocation, airport, airportCode} = req.body;
    try {
        const existingAirport = await locationMove.findOne({ airportCode });
        if (existingAirport) {
            return res.status(400).json({ message: "Airport already exists" });
        }

        const newAirport = new locationMove({
            nameLocation,
            airport,
            airportCode,
        });
        await newAirport.save();
        res.status(200).json("Airport added successfully");
    } catch (error) {
        console.error("Error when adding new airport", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllAirports = (req, res) => {
    locationMove.find({})
        .then((allAirports) => {
            res.status(200).json(allAirports);
        })
        .catch((e) => {
            console.error("Error when getting all airports:", error);
            res.status(500).json({ message: "Internal server error" });
        });
};