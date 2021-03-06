import mongoose from "mongoose";

const schema = new mongoose.Schema({
  year: {
   required: true,
   type: Number
  },
  make: {
   required: true,
   type: String
  },
  model: {
   required: false,
   type: String
  }

});

export default mongoose.model("Vehicle", schema);
