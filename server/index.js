import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"
import dotenv from 'dotenv'
import Connetcdb from "./config/db.js";
const app = express();

dotenv.config()


app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());


app.use("/posts", postRoutes);

Connetcdb();

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on port ${PORT}`));


