import airlines from "../models/airlineSchema.js"

export const addAirLine = async (req, res) => {
    const { airlineLogo, airlineName } = req.body;
    try {
        const existingAirline = await airlines.findOne({airlineName});
        if (existingAirline) {
            return res.status(400).json({ message: "Airline already exists" });
        }

        const newAirline = new airlines({
            airlineLogo,
            airlineName,
        });
        await newAirline.save();
        res.status(200).json("Airline added successfully");  
    } catch (error) {
        console.error("Error when adding new airline", error);
        res.status(500).json({ message: "Internal server error" }); 
    }
};

export const getAllAirlines = (req, res) => {
    airlines.find({})
        .then((allAirlines) => {
            res.status(200).json(allAirlines);
        })
        .catch((e) => {
            console.error("Error when getting all airlines:", error);
            res.status(500).json({ message: "Internal server error" });
        });
};