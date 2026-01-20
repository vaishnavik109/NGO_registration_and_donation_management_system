console.log("donation.routes.js LOADED");
const express = require("express");
const router = express.Router();
const controller = require("./donation.controller");

router.post("/create", controller.createDonation);
router.get("/user/:userId", controller.getUserDonations);
router.get("/all", controller.getAllDonations);

module.exports = router;
