import mongoose from "mongoose";
const Schema = mongoose.Schema;

const flightsClass = new Schema({

    service : {
      type: Schema.Types.ObjectId,
      ref: 'serviceInfors',
      required: true,
    },
   
    seats: {
       type : [String],
       required: true,
    }
    
  })

  export default flightsClass;