import mongoose from "mongoose";
const Schema = mongoose.Schema;

const airlineSchema = new Schema({
  airlineLogo: {
    type: String,
    required: true,
  },
  airlineName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("airlines", airlineSchema);
