const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();

// imports
const tourRoute = require("./routes/tour.route");

// port assigning
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", tourRoute);

// database connection
// mongoose.connect(process.env.DB_LOCAL).then(() => {
mongoose.connect(process.env.TMS_ATLAS_URI).then(() => {
  console.log("Database connection is established.");
});

// Server testing
app.listen(PORT, () => {
  console.log(`Tour Management Server is running at the port ${PORT}`);
});
