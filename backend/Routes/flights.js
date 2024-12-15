import express from "express";

import {
  addFlight,
  getAllFlights
} from "../controller/searchFlightController.js";

import { getFlights } from "../controller/SearchFlightController/getSuitableFligths.js";


const router = express.Router();

router.post("/addFlight", addFlight);
router.post("/search", getFlights);
router.get("/getAllFlights", getAllFlights)

export default router;
