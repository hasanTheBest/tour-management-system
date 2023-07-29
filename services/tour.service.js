const TourPackage = require("../models/Tours");

// all tours
exports.getAllToursService = async (
  filterQuery,
  { selectFields, limit = 2, page = 1, sortBy }
) => {
  const tours = await TourPackage.find(filterQuery)
    .select(selectFields)
    .sort(sortBy)
    .skip((+page - 1) * +page)
    .limit(limit);

  // console.log("selectedFiled", selectFields);

  return tours;
};

// trending tours
exports.getTrendingToursService = async () => {
  const trending = await TourPackage.find({}).sort("-__v").limit(3);

  return trending;
};

// cheapest tours
exports.getCheapestToursService = async () => {
  const cheapest = await TourPackage.find({}).sort("packagePrice").limit(3);

  return cheapest;
};

// get tour by id
exports.getTourByIdService = async (id) => {
  const tour = await TourPackage.findById(id);

  // console.log(Object.values(tour));

  // if (tour.hasOwnProperty("packageViewCount")) {
  //   tour.packageViewCount = tour.packageViewCount + 1;
  // } else {
  //   tour.packageViewCount = 1;
  // }
  // // console.log(tour.hasOwnProperty("packageViewCount"));

  // const tourPackageViewCount = new TourPackage(tour);

  // await tourPackageViewCount.save();

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

// update a tour
exports.updateTourByIdService = async (id, data) => {
  const tourPackage = await TourPackage.updateOne({ _id: id }, data, {
    runValidators: true,
  });

  return tourPackage;
};
