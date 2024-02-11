import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const { log } = console;

const port = process.env.PORT || 3000;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_URL = process.env.MONGO_URL;

mongoose.connect(DB_URL)
  .then(() => {
    console.log("Connection Successful");
    app.listen(port, () => log("server is running"));
  })
  .catch((error) => {
    console.error("Unable to Connect to MongoDB:", error);
  });

app.use("/api", router);