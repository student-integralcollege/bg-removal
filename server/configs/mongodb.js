import mongoose from "mongoose";

const connectedDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });
   await mongoose.connect(`${process.env.MONGODB_URL}/bg_removal`);
};

export default connectedDB;
