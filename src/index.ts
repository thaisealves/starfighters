import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routesIndex.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router)
const PORT: number = 4000;

app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))