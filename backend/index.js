import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import flightRoute from "./Routes/flights.js";


dotenv.config();

const app = express();

const corsOptions = {
  origin: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("server is working");
});

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};


app.use("/api/flights", flightRoute);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
