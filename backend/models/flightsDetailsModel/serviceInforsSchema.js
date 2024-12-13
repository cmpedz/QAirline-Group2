import mongoose from "mongoose";
const Schema = mongoose.Schema;

const serviceInforsSchema = new Schema({

    type :{
      type : String,
      required : true
    },
    include : {
        type: [String]
        
      },
  
      exclude : {
        type: [String]
      }
})

export default mongoose.model("serviceInfors", serviceInforsSchema);