const express = require("express");
const { test } = require("../adminFuntions/adminDashboard.js");

const router = express.Router();

// Admin Dashboard Route
router.get("/admin/dashboard", (req, res) => {
  res.send("Welcome to the Admin Dashboard");
});

router.get("/test", test);

module.exports = router;
