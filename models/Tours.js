const mongoose = require("mongoose");

// schema for model
const tourSchema = mongoose.Schema({
  PackageName: String,
  PackageType: String,
  PackageLocation: String,
  PackagePrice: String,
  PackageFeatures: String,
  PackageDetails: String,
  PackageImage: String,
  CreationDate: String,
  UpdationDate: String,
});

// create model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
