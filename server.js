// server/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();
const cors = require('cors');
const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.options("", cors(corsConfig));
app.use(cors(corsConfig));
const PORT = process.env.PORT || 5000;

// Middlewares to read form bodies
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json()); // <-- critical for JSON forms
app.use(express.urlencoded({ extended: true })); // supports traditional form posts

// DB connect
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || "portfolio",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

app.get("/health", (_req, res) => res.json({ ok: true }));

// Routes
app.use("/api/contact", contactRoutes);

app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, error: "Server error" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


