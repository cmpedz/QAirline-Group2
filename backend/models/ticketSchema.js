import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bookings",
    },
  ],
});

export default mongoose.model("tickets", ticketSchema);
