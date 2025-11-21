import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import juegoRoutes from "./routes/juegoRoutes.js";
import resenaRoutes from "./routes/resenaRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a Mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error Mongo:", err));

// Rutas
app.use("/api/juegos", juegoRoutes);
app.use("/api/resenas", resenaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
