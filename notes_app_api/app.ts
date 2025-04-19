import express from "express";
import noteRoutes from "./routes/notes.routes";

const app = express();
app.use(express.json());
app.use("/notes", noteRoutes);

export default app;
