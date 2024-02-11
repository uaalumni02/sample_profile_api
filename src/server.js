import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose, { connect } from "mongoose";

const app = express();
const { log, error } = console;

const port = process.env.PORT || 3000;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_URL = process.env.MONGO_URL;

// mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
//   if (err) return log("Unable to Connect to MongoDB");
//   return log("Connection Successful");
// });

app.use("/api", router);

app.listen(port, () => log("server is running"));
export default app;
