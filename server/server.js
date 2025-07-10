import "dotenv/config"
import express from "express";
import cors from "cors";
import connectedDB from "./configs/mongodb.js";

const PORT = process.env.PORT || 4000;
const app = express();
await connectedDB();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
