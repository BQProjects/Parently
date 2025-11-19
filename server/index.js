require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminDashboardRoute = require("./admin/adminRoutes/adiminDashboardRoute");

const app = express();

// MongoDB connection caching for serverless
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb && mongoose.connection.readyState === 1) {
    return cachedDb;
  }

  try {
    cachedDb = await mongoose.connect(
      "mongodb+srv://teja29204_db_user:fxZ1yvbVig8eLHBN@cluster0.ski0qu6.mongodb.net/?appName=Cluster0"
    );
    console.log("Database is connected");
    return cachedDb;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    res.status(500).send("Database connection failed");
  }
});

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://simplefront-iota.vercel.app",
      "http://localhost:9000",
      "https://simple-jet-eta.vercel.app",
      "https://simple-quotes-alter.vercel.app",
    ],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use("/api/admin-dash", adminDashboardRoute);

app.get("/", (req, res) => {
  res.send("Server is started");
});

// Export for Vercel serverless
module.exports = app;

// For local development
if (require.main === module) {
  connectToDatabase()
    .then(() => {
      app.listen(9000, () => console.log("Server is started"));
    })
    .catch((err) => {
      console.error("Failed to connect to database:", err);
    });
}
