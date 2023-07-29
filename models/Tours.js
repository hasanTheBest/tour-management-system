const mongoose = require("mongoose");

const TourPackageSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  packageType: {
    type: String,
  },
  packageLocation: {
    type: String,
    required: true,
  },
  packagePrice: {
    type: String,
    required: true,
  },
  packageFeatures: {
    type: [String],
    required: true,
  },
  packageDetails: {
    type: String,
  },
  packageImage: {
    type: String,
  },
  creationDate: {
    type: Date,
  },
  updationDate: {
    type: Date,
  },
  packageViewCount: {
    type: Number,
  },
});

const TourPackage = mongoose.model("TourPackage", TourPackageSchema);

module.exports = TourPackage;
