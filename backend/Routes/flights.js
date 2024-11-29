import express from "express";

import {
  getFlights,
  getAllFlights
} from "../controller/searchFlightController.js";

console.log(`flighted route works fine!`);

const router = express.Router();

router.post("/search", getFlights);

router.get("/txhuaFlights", getAllFlights)

export default router;
