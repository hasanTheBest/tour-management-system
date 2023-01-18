const Tour = require("../models/Tours");

// all tours
exports.getAllToursService = async () => {
  const tours = await Tour.find();

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
exports.getTourService = async (id) => {
  const tour = await Tour.findOne(id);

  return tour;
};
