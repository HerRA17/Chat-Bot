import express from "express";
import { config } from "dotenv";
config();

const app = express();
// middlewares
app.use(express.json());

// connection and listeners
app.listen(5000, () => console.log("Server open"));