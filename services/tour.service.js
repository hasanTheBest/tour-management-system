const TourPackage = require("../models/Tours");

// all tours
exports.getAllToursService = async () => {
  const tours = await TourPackage.find({});

  // console.log("toursService", tours);

  return tours;
};

// trending tours
exports.getTrendingToursService = async () => {
  const trending = await TourPackage.find();

  return trending;
};

// cheapest tours
exports.getCheapestToursService = async () => {
  const cheapest = await TourPackage.find({});

  return cheapest;
};

// get tour by id
exports.getTourByIdService = async (id) => {
  const tour = await TourPackage.findById(id);

  return tour;
};

// add tour
exports.addTourService = async (tourData) => {
  // console.log("tourData", tourData);
  const tourPackage = new TourPackage(tourData);

  // save
  await tourPackage.save();

  return tourPackage;
};
