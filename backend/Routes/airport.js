import express from "express";

import { addAirport , getAllAirports } from "../controller/airportController.js";

const router = express.Router();
router.get("/getAllAirports", getAllAirports);
router.post("/addAirport", addAirport);

export default router;
