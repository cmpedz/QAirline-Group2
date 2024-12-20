import express from "express";

import { addAircraft , getAllAircrafts } from "../controller/aircraftController.js";

const router = express.Router();
router.get("/getAllAircrafts", getAllAircrafts);
router.post("/addAircraft", addAircraft);

export default router;
