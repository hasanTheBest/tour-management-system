const { query } = require("express");
const {
  getAllToursService,
  getTrendingToursService,
  getCheapestToursService,
  getTourByIdService,
  addTourService,
  updateTourByIdService,
} = require("../services/tour.service");

// Get all tours
exports.getAllTours = async (req, res, next) => {
  try {
    const { fields, sort, limit, page } = req.query;

    const filterQuery = { ...req.query };
    const excludesFiled = ["fields", "sort", "limit", "page"];

    excludesFiled.forEach((property) => {
      delete filterQuery[property];
    });

    let queries = {};

    if (fields) {
      queries.selectFields = fields.split(",").join(" ");
    }

    if (sort) {
      queries.sortBy = sort.split(",").join(" ");
    }

    if (limit) {
      queries.limit = limit;
    }

    if (page) {
      queries.page = page;
    }

    const tours = await getAllToursService(filterQuery, queries);

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
  console.log("Cheapest Tour controller");
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

// Update tour by id
exports.updateTourById = async (req, res, next) => {
  try {
    const updatedResult = await updateTourByIdService(
      req.params.tourId,
      req.body
    );
    res.status(200).json({
      status: "success",
      data: updatedResult,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Can not add tour",
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
