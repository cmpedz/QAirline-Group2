import express from "express";
import { deleteTicket } from "../controller/ticketController.js";


const router = express.Router();

router.delete("/delete-ticket/:ticketId", deleteTicket);

export default router;
