import express from "express";

import { addAirLine , getAllAirlines } from "../controller/airlineController.js";

const router = express.Router();
router.get("/getAllAirlines", getAllAirlines);
router.post("/addAirline", addAirLine);

export default router;
