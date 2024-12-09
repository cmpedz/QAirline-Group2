import express from "express";

import {
  addFlight,
  getSingleFlight,
  getFlights,
  getAllFlights
} from "../controller/searchFlightController.js";


const router = express.Router();

router.post("/addFlight", addFlight);
router.post("/search", getFlights);
router.get("/getAllFlights", getAllFlights)

export default router;
