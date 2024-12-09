import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  flight: {
    type: Schema.Types.ObjectId,
    ref: "flights",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  seat: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  passportNumber: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passportSizePhoto: {
    type: String,
    required: true,
  },
});

export default mongoose.model("bookings", bookingSchema);
