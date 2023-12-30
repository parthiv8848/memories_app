import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"

const app = express();




app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());


app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://parthivkevadiya:parthiv1234@cluster0.wfqitqt.mongodb.net/";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port :${PORT}`))
  )

  .catch((error) => console.log(error.message));


