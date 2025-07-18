import "dotenv/config"
import express from "express";
import cors from "cors";
import connectedDB from "./configs/mongodb.js"; // Adjust the import path as necessary
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();
await connectedDB();

// Middleware
app.use(express.json());
app.use(cors());

//API routes
app.get("/", (req, res) => {
  res.send("API working");
});
app.use("/api/users", userRouter); // Use the userRouter for user-related routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
