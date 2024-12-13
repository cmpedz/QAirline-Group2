import mongoose from "mongoose";
const Schema = mongoose.Schema;

const locationMoveSchema = new Schema({
    nameLocation : {
        type : String,
        require : true,
    },
    airport : {
      type : String,
      require : true,
  },

  airportCode : {
    require : true,

  }
})

export default mongoose.model("locationMove", locationMoveSchema);