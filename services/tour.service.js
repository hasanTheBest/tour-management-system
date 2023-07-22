const TourPackage = require("../models/Tours");

// all tours
exports.getAllToursService = async (
  filterQuery,
  { selectFields, limit, page, sortBy }
) => {
  const tours = await TourPackage.find(filterQuery)
    .select(selectFields)
    .sort(sortBy)
    .limit(limit);

  console.log("selectedFiled", selectFields);

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
