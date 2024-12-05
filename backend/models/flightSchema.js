import mongoose from "mongoose";
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departTime: {
    type: String,
    required: true,
  },
  arriveTime: {
    type: String,
    required: true,
  },
  departDate: {
    type: String,
    required: true,
  },
  arriveDate: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bookedSeats: {
    type: [String],
  },
  airline: {
    type: mongoose.Schema.ObjectId,
    ref: "airlines",
    require: true,
  }
});

export default mongoose.model("flights", flightSchema);
