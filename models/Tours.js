const mongoose = require("mongoose");

// schema for model
const tourSchema = mongoose.Schema({
  title: String,
});

// create model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
