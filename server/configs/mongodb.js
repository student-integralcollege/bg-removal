import mongoose from "mongoose";

const connectedDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });

   await mongoose.connect(`${process.env.MONGODB_URI}/bg_removal`);
};

export default connectedDB;
