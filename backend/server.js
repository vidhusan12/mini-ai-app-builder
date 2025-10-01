import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import requirementsRouter from "./routes/requirements.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/requirements", requirementsRouter);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));