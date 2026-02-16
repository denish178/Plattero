import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Plattero Backend is running");
});
// db connection
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
