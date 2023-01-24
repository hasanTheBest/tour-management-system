const Tour = require("../models/Tours");

// all tours
exports.getAllToursService = async () => {
  const tours = await Tour.find({});

  // console.log("toursService", tours);

  return tours;
};

// trending tours
exports.getTrendingToursService = async () => {
  const trending = await Tour.find();

  return trending;
};

// cheapest tours
exports.getCheapestToursService = async () => {
  const cheapest = await Tour.find();

  return cheapest;
};

// get tour by id
exports.getTourByIdService = async (id) => {
  console.log("tourID", id);
  const tour = await Tour.findById(id);

  return tour;
};
