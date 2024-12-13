import mongoose from "mongoose";
const Schema = mongoose.Schema;


const priceDetails = new Schema({

  price : {
    type : Number,
    required : true
  },

  service : {
    type: Schema.Types.ObjectId,
    ref: 'serviceInfors',
    required: true,
  }
  
})
 const dayInfors = new Schema({
    date :{
      type: String,
      required: true,
    },
    time : {
      type: String,
      required: true,
    }
 })



const flightSchema = new Schema({
  flightNumber: {
    type: String,
    required: true
  },
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

  departInfors: dayInfors,

  arriveInfors: dayInfors,

  tickets: [priceDetails],
  status: {
    type: String,  // "Scheduled", "Delayed", "Canceled"
    required: true
  }, 
  airline: {
    type: Schema.Types.ObjectId, 
    ref: 'airlines',
    required: true,
  }

  
});

export default mongoose.model("flights", flightSchema);
