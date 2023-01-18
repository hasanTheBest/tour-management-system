const {
  getAllToursService,
  getTrendingToursService,
  getCheapestToursService,
} = require("../services/tour.service");

// Get all tours
exports.getAllTours = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tours = await getAllToursService(id);

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
  try {
    const tour = await getTourService();
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "An error occurred",
      error: error.message,
    });
  }
};
