const trackerCtrl = require("../controllers/tracker.controller");

const express = require('express');
const router = express.Router();

// Request 
router.get("/", (req, res) => {
  console.log("POST /tracker/");
  trackerCtrl.trackRequest(req, res);
});

module.exports = router;
