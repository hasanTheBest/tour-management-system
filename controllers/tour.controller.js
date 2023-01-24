const {
  getAllToursService,
  getTrendingToursService,
  getCheapestToursService,
  getTourByIdService,
  addTourService,
} = require("../services/tour.service");

// Get all tours
exports.getAllTours = async (req, res, next) => {
  try {
    const tours = await getAllToursService();

    res.status(200).json({
      status: "success",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Unable to find data",
      error: error.message,
    });
  }
};

// Get trending tours
exports.getTrendingTours = async (req, res, next) => {
  try {
    const trending = await getTrendingToursService();

    res.status(200).json({
      status: "success",
      data: trending,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Unable to find data",
      error: error.message,
    });
  }
};

// Get cheapest tours
exports.getCheapestTours = async (req, res, next) => {
  try {
    const cheapest = await getCheapestToursService();

    res.status(200).json({
      status: "success",
      data: cheapest,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Unable to find data",
      error: error.message,
    });
  }
};

// Get a tour by id
exports.getTourById = async (req, res, next) => {
  const { tourId } = req.params;

  try {
    const tour = await getTourByIdService(tourId);

    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "An error occurred",
      error: error.message,
    });
  }
};

// Add a tour
exports.addTour = async (req, res, next) => {
  try {
    const addedResult = await addTourService(req.body);
    res.status(200).json({
      status: "success",
      data: addedResult,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Can not add tour",
      error: error.message,
    });
  }
};
