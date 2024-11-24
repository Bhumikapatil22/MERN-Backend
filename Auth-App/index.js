import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

dbConnect();

app.use("/api/v1",userRoutes)

app.listen(PORT,()=>{
    console.log(`App is running at port:${PORT}`)
})