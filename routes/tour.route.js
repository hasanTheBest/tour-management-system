const express = require("express");
const router = express.Router();

// imports
const tourController = require("../controllers/tour.controller");

// get all tours
router.route("/tours").get(tourController.getAllTours);

// get trending tours
router.route("/tours/trending").get(tourController.getTrendingTours);

// get cheapest tours
router.route("/tours/cheapest").get(tourController.getCheapestTours);

// post a tour
router.route("/tours/add").post(tourController.addTour);

// get a specific tour by id
router.route("/tour/:tourId").get(tourController.getTourById);

// Update a tour
router.route("/tour/:tourId").patch(tourController.updateTourById);

module.exports = router;
