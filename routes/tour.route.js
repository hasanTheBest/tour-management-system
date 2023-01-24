const express = require("express");
const router = express.Router();

// imports
const tourController = require("../controllers/tour.controller");

// get all tours
router.route("/all").get(tourController.getAllTours);

// get trending tours
router.route("/trending").get(tourController.getTrendingTours);

// get cheapest tours
router.route("/cheapest").get(tourController.getCheapestTours);

// get a specific tour by id
router.route("/:tourId").get(tourController.getTourById);

module.exports = router;
