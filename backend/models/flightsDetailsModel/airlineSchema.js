import mongoose from "mongoose";
import flightsClass from "./flightsClassSchema.js";

const Schema = mongoose.Schema;


const airlineSchema = new Schema({
  airlineManifacturing: {
    type: String,
    required: true,
  },
  airlineCode: {
    type: String,
    require : true
  },
  airlineLogo:{
    type: String
  },

  seatClasses: [
    {
      classType : {
        type: Schema.Types.ObjectId,
        ref: 'classType',
        required: true,
      },
     
      seats: {
         type : [String],
         required: true,
      }
    }
  ],


});

export default mongoose.model("airlines", airlineSchema);
