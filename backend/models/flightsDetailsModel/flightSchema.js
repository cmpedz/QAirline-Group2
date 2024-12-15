import mongoose from "mongoose";
import dayInfors from "./dayInforsSchema.js";
const Schema = mongoose.Schema;

const seatsInforEachClassType = new Schema({
     classType : {
         type: String, 
         required: true
     },

     seats:{
        type: [String],
        required: true
     }
})

const flightSchema = new Schema({

  from: {
    type: Schema.Types.ObjectId,
    ref: 'locationMove',
    required: true,
  },

  to: {
    type: Schema.Types.ObjectId,
    ref: 'locationMove',
    required: true,
  },

  departDate: dayInfors,

  arriveDate: dayInfors,

  price : {
    type : Number,
    required : true
  },

  bookedSeats: [seatsInforEachClassType],

  avaibleSeats: [seatsInforEachClassType],

  status: {
    type : String
  },

  airline: {
    type: Schema.Types.ObjectId, 
    ref: 'airlines',
    required: true,
  }

  
});

export default mongoose.model("flights", flightSchema);
