import express from "express";

import {
    getAllBookings,

} from "../controller/bookingController.js";

const router = express.Router();

router.get("/getAllBookings", getAllBookings);


export default router;
